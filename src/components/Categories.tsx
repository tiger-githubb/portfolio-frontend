import React from "react";
import Category from "./Category";

export const Categories = ({ categories }: any) => {
  return (
    <div className="flex gap-6 mb-8">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category}/>
        </div>
      ))}
    </div>
  );
};
