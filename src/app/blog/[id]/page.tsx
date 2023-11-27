import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchBlog(id: number) {
  const options = {
    Headers: {
      Autorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}/?populate=*`
    );
    const response = await res.json();
    return response;
  } catch {}
}

export default async function page({ params }: any) {
  const blog = await fetchBlog(params.id);

  if (!blog) {
    return <div>{"Article not found"}</div>;
  }

  const blogImg = blog?.data.attributes.img.data.attributes.url || "";

  const imageUrl = "http://127.0.0.1:1337" + blogImg;

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <Link href={"/"}>{"Back"}</Link>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
          <Image src={imageUrl} alt={""} layout="fill" priority objectFit="cover" />
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-semibold">
            {blog.data.attributes.Title}
          </h1>
          <p className=" text-gray-600 mt-2">
            {blog.data.attributes.Description}
          </p>
          <div className="flex mt-4 items-center text-gray-400">
            <span className="text-sm">
              {" "}
              Published on{" "}
              {new Date(blog.data.attributes.publishedAt).toLocaleString()}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
