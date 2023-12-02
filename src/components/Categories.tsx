"use client"
;import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

export const Categories = ({ categories }: any) => {
  const { changeCategory } = useContext(CategoryContext);

  // useLayoutEffect(() => {
  //   changeCategory(categories?.data[0].attributes.Title);
  // },[]);

  useLayoutEffect(() => {
    // Check if categories and categories.data are available before accessing properties
    if (categories?.data && categories.data.length > 0) {
      changeCategory(categories.data[0].attributes.Title);
    }
  }, [categories, changeCategory]); // Include dependencies in the dependency array


  return (
    <div className="flex gap-6 mb-8">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};
