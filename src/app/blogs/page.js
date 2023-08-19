import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
export const metadata = {
    title: 'Blogs ||Learn-next',
    description: 'next app',
  }
  const blogs=[
    {
        id:1,
        year:2016,
        title:"title 1",
    },
    {
        id:2,
        year:2016,
        title:"title 2",
    },
    {
        id:4,
        year:2016,
        title:"title 4",
    },
    {
        id:5,
        year:2016,
        title:"title 5",
    },
    {
        id:6,
        year:2016,
        title:"title 6",
    },
  ]
const BlogsPage = () => {
    const router=useRouter();
    return (
        <div>
            {
                blogs.map(({id, year, title})=>(
        <Link className='mr-10 border-2' key={id} href={`/blogs/${year}/${id}`} >{title}</Link>  ))
            }
        </div>
    );
};

export default BlogsPage;