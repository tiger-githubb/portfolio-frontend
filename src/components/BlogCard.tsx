import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: any) {
  const tuncateBlogDescription =
    blog?.attributes.Description.length > 80
      ? blog?.attributes.Description.substring(0, 80) + "..."
      : blog?.attributes.Description;

  const imageUrl = ""+blog?.attributes.Image?.data?.attributes?.url;

  return (
    <>
      <div className="roundec-lg shadow-md p-4 mb-4 overflow-hidden border-gray-600 cursor-pointer">
        <Link href={"/blog/23"}>
          <div>
            <Image
              src={""}
              alt=""
              layout="fill"
              objectFit="cover"
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
