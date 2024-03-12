import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">{cat.toUpperCase()} BlogPage</h1>
      <div className="row d-flex">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
