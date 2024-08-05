import React from "react";
import Image from "next/image";
import Arrow from "../assets/icons/arrow.svg";

export default function CardNavigation({
  page,
  totalNumberOfPages,
  setPage,
}: {
  page: number;
  totalNumberOfPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <nav className="flex justify-center">
      <button
        className=""
        onClick={() => (page === 1 ? setPage(page) : setPage(page - 1))}
      >
        <Image src={Arrow} alt="Arrow Back" width={20} className="rotate-90" />
      </button>
      <div className="flex items-center text-xl px-5">
        {page} / {totalNumberOfPages}
      </div>
      <button
        className=""
        onClick={() =>
          page === totalNumberOfPages ? setPage(page) : setPage(page + 1)
        }
      >
        <Image src={Arrow} alt="Arrow Back" width={20} className="-rotate-90" />
      </button>
    </nav>
  );
}
