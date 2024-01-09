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

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const router = useRouter();
  const idBlog = router.query ? router.query.idBlog : null;

  useEffect(() => {
    const fetchBlog = async () => {
      if (idBlog) {
        const res = await fetch(`http://localhost:3003/api/blogs/${idBlog}`);
        const data: BlogData = await res.json();
        setBlogData(data);
      }
    }
    fetchBlog();
  }, [idBlog]);

  return (
    <div>
      <h1>salam</h1>
      {blogData && (
        <div>
          <h2>{blogData.title}</h2>
          <p>{blogData.content}</p>
          <p>{blogData.likes}</p>
          <Image src={blogData.image} alt="blog image" />
        </div>
      )}
    </div>
  );
}