import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  console.log('env: '+ process.env.DATABASE_URL);
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column ">
          <h1 className="fw-bold display-4">{data?.title} </h1>
          <div className="mt-3 d-flex">
            {data?.user?.image && (
              <div className="m-0 ">
                <Image
                  className="rounded-circle"
                  src={data?.user.image}
                  width={55}
                  height={55}
                  alt=""
                ></Image>
              </div>
            )}
            <div className="ms-3  d-flex align-items-start justify-content-center flex-column">
              <p className="fs-7  m-0">{data?.user.name}</p>
              <p className="fs-7 text-soft m-0 ">
                {data?.createAt.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          {data?.img && (
            <div
              className=" position-relative d-none d-md-block "
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            >
              <Image
                src={data?.img}
                alt=""
                layout="fill"
                objectFit="cover"
                className="position-absolute top-0 start-0 rounded"
              ></Image>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 mt-5 pe-4">
          {/* <div className="" dangerouslySetInnerHTML={{ __html: data?.desc }} /> */}
          <div>{data?.desc}</div>
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
