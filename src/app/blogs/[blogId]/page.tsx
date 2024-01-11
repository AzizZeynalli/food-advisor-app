"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Image } from "@chakra-ui/react";

type BlogData = {
  title: string;
  content: string;
  likes: number;
  image: string;
};

export default function Blog({params : {blogId}} : any) {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  console.log(blogId); 
  useEffect(() => {
    const fetchBlog = async () => {
      if (blogId) {
        const res = await fetch(`http://localhost:3003/api/blogs/${blogId}`);
        const data: BlogData = await res.json();
        setBlogData(data);
      }
    }
    fetchBlog();
  }, [blogId]);

  return (
    <div>
      <h1>salam</h1>
      {blogData && (
        <div>
          <h2>{blogData.title}</h2>
          <p>{blogData.content}</p>
          <p>{blogData.likes}</p>
          <Image src={`data:image/jpg;base64,${blogData.image}`} alt="blog image" height={'50px'} width={'50px'}/>
        </div>
      )}
    </div>
  );
}