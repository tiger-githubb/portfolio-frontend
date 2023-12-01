import Image from "next/image";
import Link from "next/link";
import React from "react";
import { remark } from "remark";
import html from "remark-html";

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
  const content = blog?.data.attributes.Description || "";
  console.log(content);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  console.log(contentHtml);


  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <Link href={"/"}>{"Back"}</Link>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image
            src={imageUrl}
            alt={""}
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>

      </div>
    </>
  );
}
