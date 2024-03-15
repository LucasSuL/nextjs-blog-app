"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    console.log("fetcher error");
    throw error;
  }
  console.log("fetcher success" + data);
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="mt-5">
      <h3>Comments</h3>
      {status === "authenticated" ? (
        <div>
          <textarea
            class="form-control mt-3"
            id="exampleFormControlTextarea1"
            placeholder="write a comment..."
            rows="5"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            type="button"
            class="btn btn-success mt-3"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <div>
          <div>Login to write a comment.</div>
          {/* <button type="button" class="btn btn-success mt-2">
            Login
          </button> */}
        </div>
      )}

      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((item) => (
            <div className="d-flex flex-column mt-3" key={item._id}>
              <div className="d-flex">
                <div className="m-0 ">
                  {item?.user?.image && (
                    <Image
                      className="rounded-circle"
                      src={item.user.image}
                      width={40}
                      height={40}
                      alt=""
                    ></Image>
                  )}
                </div>
                <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
                  <p className="fs-7  m-0">{item.user.name}</p>
                  <p className="fs-7 text-soft m-0 ">
                    {item.createAt.slice(0, 10)}
                  </p>
                </div>
              </div>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
