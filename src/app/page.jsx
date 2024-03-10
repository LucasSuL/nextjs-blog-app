import Link from "next/link";
import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="container">
        <div className="row d-flex">
          <CardList page={page}/>
          <Menu />
        </div>
      </div>
    </div>
  );
}
