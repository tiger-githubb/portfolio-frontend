import Blogs from "@/components/Blogs";
import { Categories } from "@/components/Categories";

async function fetchcategories() {
  const options = {
    Headers: {
      Autorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories");
    const response = await res.json();
    console.log(response);
        
    return response;
  } catch {}
}

export default async function Home() {
  const categories = await fetchcategories();
  return (
    <>
      <h2>Home Page</h2>
      <Categories categories={categories} />
      <Blogs />
    </>
  );
}
