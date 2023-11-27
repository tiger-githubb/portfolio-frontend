import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.attributes.Title)}
      className={`${
        cat.attributes.Title === category
          ? "bg-white text-black"
          : "bg-slate-400"
      } " p-4 rounded-lg shadow-md cursor-pointer  `}
    >
      {cat.attributes.Title}
    </div>
  );
};

export default Category;