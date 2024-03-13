import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className="container mt-5">
      <div className="row" >
        <div className="col-12 col-md-6 d-flex flex-column ">
          <h1 className="fw-bold display-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="mt-3 d-flex">
            <div className="m-0 ">
              <Image
                className="rounded-circle"
                src="/p1.jpeg"
                width={55}
                height={55}
                alt=""
              ></Image>
            </div>
            <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
              <p className="fs-7  m-0">John Doe</p>
              <p className="fs-7 text-soft m-0 ">01.09.2023</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div
            className=" position-relative d-none d-md-block "
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          >
            <Image
              src="/p1.jpeg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="position-absolute top-0 start-0 rounded"
            ></Image>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8  mt-5 pe-4">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, distinctio unde dolores in obcaecati velit voluptas
            corrupti, reprehenderit quibusdam beatae eum impedit aspernatur, ab
            vitae quas rerum minima? Dolor, iste id ex labore aliquid nesciunt
            ab nemo blanditiis vel quibusdam. Commodi ratione voluptatum quas
            quaerat voluptate provident numquam alias nesciunt rerum pariatur
            tempore ducimus possimus architecto est sapiente, libero rem fugiat
            necessitatibus exercitationem repudiandae autem odio minus? Dolorem
            laudantium eos facilis doloribus fugit, quo porro corrupti pariatur.
            Sit pariatur, cumque nulla laudantium, perferendis, officia rem odit
            eum fugiat reprehenderit inventore voluptate doloremque fuga
            blanditiis dolor asperiores quidem suscipit nemo harum?
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
