import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: any) {
  const tuncateBlogDescription =
    blog?.attributes.Description.length > 80
      ? blog?.attributes.Description.substring(0, 80) + "..."
      : blog?.attributes.Description;
      
  const blogImg = blog?.attributes.img.data.attributes.url || "";

  const imageUrl = "http://127.0.0.1:1337" + blogImg;

  const slug = blog?.id;

  return (
    <>
      <div className="roundec-lg shadow-md p-4 mb-4 overflow-hidden border-gray-600 cursor-pointer">
        <Link href={"/blog/" + slug}>
          <div
            className="relative w-full h-1"
            style={{ paddingBottom: "100%" }}
          >
            <Image
              src={imageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-t-lg"
            />
          </div>
          <div className="p-2">
            <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
              {blog?.attributes.Title}
            </h2>
            <p className="text-grey-600">{tuncateBlogDescription}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
