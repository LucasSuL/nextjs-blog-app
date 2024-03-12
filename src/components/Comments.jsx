import Image from "next/image";
import React from "react";

const Comments = () => {
  const authenticated = "authenticated";

  return (
    <div className="mt-5">
      <h3>Comments</h3>
      {authenticated === "authenticated" ? (
        <div>
          <textarea
            class="form-control mt-3"
            id="exampleFormControlTextarea1"
            placeholder="write a comment..."
            rows="5"
          ></textarea>
          <button type="button" class="btn btn-success mt-3">
            Send
          </button>
        </div>
      ) : (
        <div>
          <div>Login to write a comment.</div>
          <button type="button" class="btn btn-success mt-2">
            Login
          </button>
        </div>
      )}

      <div className="mt-5">
        <div className="d-flex flex-column mt-3">
          <div className="d-flex">
            <div className="m-0 ">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={40}
                height={40}
                alt=""
              ></Image>
            </div>
            <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
              <p className="fs-7  m-0">John Doe</p>
              <p className="fs-7 text-soft m-0 ">01.09.2023</p>
            </div>
          </div>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            necessitatibus, quibusdam a ipsam quasi modi illo quis inventore
            neque perspiciatis?
          </p>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="d-flex">
            <div className="m-0 ">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={40}
                height={40}
                alt=""
              ></Image>
            </div>
            <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
              <p className="fs-7  m-0">John Doe</p>
              <p className="fs-7 text-soft m-0 ">01.09.2023</p>
            </div>
          </div>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            necessitatibus, quibusdam a ipsam quasi modi illo quis inventore
            neque perspiciatis?
          </p>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="d-flex">
            <div className="m-0 ">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={40}
                height={40}
                alt=""
              ></Image>
            </div>
            <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
              <p className="fs-7  m-0">John Doe</p>
              <p className="fs-7 text-soft m-0 ">01.09.2023</p>
            </div>
          </div>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            necessitatibus, quibusdam a ipsam quasi modi illo quis inventore
            neque perspiciatis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
