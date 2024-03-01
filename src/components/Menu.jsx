import React from "react";
import Image from "next/image";

const Menu = () => {
  const catNames = ["style", "fashion", "food", "travel", "culture", "coding"];
  const catColors = [
    "#57c4ff31",
    "#da85c731",
    "#7fb88133",
    "#ff795736",
    "#ffb04f45",
    "#5e4fff31",
  ];
  const categories = catNames.map((cat, index) => {
    return (
      <div className="col">
        <div
          key={cat}
          className="text-center rounded p-2 text-capitalize"
          style={{ backgroundColor: catColors[index] }}
        >
          <p className="m-0 ">{cat}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="col-4 border">
      <div>
        <p className="text-soft mt-5 mb-0">What's hot</p>
        <h2 className="mt-1 mb-4">Most Popular</h2>
        <div className="mt-3">
          <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-8">
            Travel
          </p>
          <p className="mt-2 mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-1 fs-8 ">
            John Doe - <span className="text-soft">01.09.2023</span>
          </p>
        </div>
        <div className="mt-3">
          <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-8">
            Travel
          </p>
          <p className="mt-2 mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-1 fs-8 ">
            John Doe - <span className="text-soft">01.09.2023</span>
          </p>
        </div>
        <div className="mt-3">
          <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-8">
            Travel
          </p>
          <p className="mt-2 mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-1 fs-8 ">
            John Doe - <span className="text-soft">01.09.2023</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-soft mt-5 mb-0">Discover by topic</p>
        <h2 className="mt-1">Categories</h2>
        <div className="mt-4 row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {categories}
        </div>
      </div>
      <div>
        <p className="text-soft mt-5 mb-0">Chosen by the editor</p>
        <h2 className="mt-1">Editors Pick</h2>
        <div className="row">
          <div className="d-flex mt-3 gap-3 align-items-top">
            <div className="col-3">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={70}
                height={70}
                alt=""
              ></Image>
            </div>
            <div className="col-9">
              <p className=" rounded-pill text-bg-dark d-inline px-3 p-1 fs-8">
                Travel
              </p>
              <p className="mt-2 mb-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-1 fs-8 ">
                John Doe - <span className="text-soft">01.09.2023</span>
              </p>
            </div>
          </div>
          <div className="d-flex mt-3 gap-3 align-items-top">
            <div className="col-3">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={70}
                height={70}
                alt=""
              ></Image>
            </div>
            <div className="col-9">
              <p className=" rounded-pill text-bg-dark d-inline px-3 p-1 fs-8">
                Travel
              </p>
              <p className="mt-2 mb-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-1 fs-8 ">
                John Doe - <span className="text-soft">01.09.2023</span>
              </p>
            </div>
          </div>
          <div className="d-flex mt-3 gap-3 align-items-top">
            <div className="col-3">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={70}
                height={70}
                alt=""
              ></Image>
            </div>
            <div className="col-9">
              <p className=" rounded-pill text-bg-dark d-inline px-3 p-1 fs-8">
                Travel
              </p>
              <p className="mt-2 mb-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-1 fs-8 ">
                John Doe - <span className="text-soft">01.09.2023</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
