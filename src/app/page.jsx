import Link from "next/link";
import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="container">
        <div className="row d-flex">
          <CardList />
          <Menu />
        </div>
      </div>
    </div>
  );
}
