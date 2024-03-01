import React from "react";
import Pagination from "@/components/Pagination";

const CardList = () => {
  return (
    <div className="col-8 border">
      <h2 className="mt-5">Recent Posts</h2>
      <div className="row row-cols-1 row-cols-sm-2 mt-4">
        <div className="col mt-4">
          <img className="rounded w-100" src="/p1.jpeg" alt=""></img>
        </div>
        <div className="col mt-4 d-flex flex-column">
          <p className="">11.02.2023 - CULTURE</p>
          <h3 className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="mt-4 text-soft">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, porro quidem illum distinctio nam, magni natus tempora
            delectus nihil ducimus assumenda commodi ex voluptate ea similique
            minima quas iure unde.
          </p>
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
      <div className="row row-cols-1 row-cols-sm-2 mt-4">
        <div className="col mt-4">
          <img className="rounded w-100" src="/p1.jpeg" alt=""></img>
        </div>
        <div className="col mt-4 d-flex flex-column">
          <p className="">11.02.2023 - CULTURE</p>
          <h3 className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="mt-4 text-soft">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, porro quidem illum distinctio nam, magni natus tempora
            delectus nihil ducimus assumenda commodi ex voluptate ea similique
            minima quas iure unde.
          </p>
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
      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default CardList;
