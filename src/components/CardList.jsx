import React from "react";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = page > 1;
  const hasNext = POST_PER_PAGE * page < count;

  return (
    <div className="col-12 col-md-8">
      <h2 className="mt-5 m-0 ">Recent Posts</h2>

      {posts?.map((item) => (
        <div className="row row-cols-1 row-cols-lg-2 mt-4 ">
          <div className="col mt-2">
            <div
              className=" position-relative"
              style={{ width: "100%", height: "300px", overflow: "hidden" }}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="position-absolute top-0 start-0 rounded"
                ></Image>
              )}
            </div>
          </div>
          <div className="col  d-flex flex-column align-items-start mt-2">
            <p className="">{`${item.createAt.slice(0, 10)} - ${
              item.catSlug
            }`}</p>
            <Link href={`/posts/${item.slug}`}>
              <h3 className="mt-4">{item.title}</h3>
            </Link>
            <p className="mt-4 text-soft">{item.desc}</p>
            <Link href={`/posts/${item.slug}`} class="mt-5 link-offset-2">
              <p className="">Read More</p>
            </Link>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  );
};

export default CardList;
