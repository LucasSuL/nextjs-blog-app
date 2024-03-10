"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center ">
        <li
          class={`page-item ${hasPrev ? "" : "disabled"}`}
          onClick={hasPrev ? () => router.push(`?page=${page - 1}`) : undefined}
        >
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link">{page}</a>
        </li>

        <li
          class={`page-item ${hasNext ? "" : "disabled"}`}
          onClick={hasNext ? () => router.push(`?page=${page + 1}`) : undefined}
        >
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
