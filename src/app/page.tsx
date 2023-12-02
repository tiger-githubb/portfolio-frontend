import Blogs from "@/components/Blogs";
import { Categories } from "@/components/Categories";

async function fetchCategories() {
  const options = {
    Headers: {
      Autorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${process.env.API_URL}`+"/api/categories");
    const response = await res.json();
    return response;
  } catch {}
}

async function fetchBlogs() {
  const options = {
    Headers: {
      Autorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/blogs?populate=*");
    const response = await res.json();
    return response;
  } catch {}
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <>
      <h2>Home Page</h2>
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </>
  );
}
