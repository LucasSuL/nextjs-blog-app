import React from "react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="container">
      <h2 className="mt-5">Popular Categories</h2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6">
        {data?.map((item) => (
          <div className="col">
            <Link
              key={item._id}
              href="/"
              className="d-flex align-items-center justify-content-center gap-2 rounded p-3 mt-4 text-capitalize"
              style={{ backgroundColor: `${item.color}` }}
            >
              {item.img && (
                <Image
                  className="rounded-5"
                  src={item.img}
                  width={32}
                  height={32}
                ></Image>
              )}
              <p className="m-0 text-decoration-none">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
