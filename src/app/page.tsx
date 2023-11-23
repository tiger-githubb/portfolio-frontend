import Blogs from '@/components/Blogs'
import { Categories } from '@/components/Categories'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <h2>Home Page</h2>
   <Categories/>
   <Blogs/>
   </>
  )
}
