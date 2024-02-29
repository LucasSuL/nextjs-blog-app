import React from "react";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className="col-3 border">
      <p className="softText mt-5">What's hot</p>
      <h2 className="">Most Popular</h2>
      <div className="mt-5">
        <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-7">Travel</p>
        <p className="mt-2 mb-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-1 fs-7 ">
          John Doe - <span className="softText">01.09.2023</span>
        </p>
      </div>
      <div className="mt-5">
        <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-7">Travel</p>
        <p className="mt-2 mb-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-1 fs-7 ">
          John Doe - <span className="softText">01.09.2023</span>
        </p>
      </div>
      <div className="mt-5">
        <p className=" rounded-5 text-bg-dark d-inline px-3 p-1 fs-7">Travel</p>
        <p className="mt-2 mb-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-1 fs-7 ">
          John Doe - <span className="softText">01.09.2023</span>
        </p>
      </div>
    </div>
  );
};

export default Menu;
