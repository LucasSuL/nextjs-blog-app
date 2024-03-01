import React from "react";

const Featured = () => {
  return (
    <div className="container mt-3">
      <h1 className="display-1 fw-medium">
        <strong>Hey! Lucas here! </strong>Discover my stories and ideas!
      </h1>
      <div className="row row-cols-1 row-cols-md-2 mt-5 d-flex align-items-center">
        <div className="col">
          <img className="mb-3 img-fluid" src="/p1.jpeg" alt="" />
        </div>
        <div className="col">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="text-soft fs-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            tempore recusandae, sed in dicta, quidem fugit aliquam qui nostrum
            et consequatur, eum quibusdam ut? Nisi natus iste officia, iusto
            necessitatibus recusandae delectus ducimus amet quia quo modi rerum
            veritatis cupiditate illum eos vel hic, eum autem culpa voluptates
            totam ex?
          </p>
          <button className="btn btn-secondary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
