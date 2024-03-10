import React from "react";
import Pagination from "@/components/Pagination";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const { posts, count } = await getData(page);
  const POST_PER_PAGE = 2;
  const hasPrev = page > 1;
  const hasNext = POST_PER_PAGE * page < count;

  return (
    <div className="col-12 col-md-8">
      <h2 className="mt-5">Recent Posts</h2>

      {posts?.map((item) => (
        <div className="row row-cols-1 row-cols-lg-2 mt-4">
          <div className="col mt-4">
            <img className="rounded w-100" src="/p1.jpeg" alt=""></img>
          </div>
          <div className="col mt-4 d-flex flex-column">
            <p className="">{`${item.createAt.slice(0, 10)} - ${
              item.catSlug
            }`}</p>
            <h3 className="mt-4">{item.title}</h3>
            <p className="mt-4 text-soft">{item.desc}</p>
            <p>
              <a
                href="#"
                class="mt-5 align-self-end link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Read More
              </a>
            </p>
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
