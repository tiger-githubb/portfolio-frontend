import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogCard() {
  return (
    <>
    <div  className='roundec-lg shadow-md p-4 mb-4 overflow-hidden border-gray-600 cursor-pointer'>
        <Link href={"/"}>
            <div>
            <Image src={""} alt='' layout='fill' objectFit='cover'className='rounded-t-lg'/>
            </div>
            <div className='p-2'> 
                <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">Blog Title</h2>
                <p className="text-grey-600">
                    Description of the article
                </p>
            </div>
        </Link>
    </div>
    </>
  )
}

export default BlogCard