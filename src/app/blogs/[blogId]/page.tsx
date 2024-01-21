"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Layout } from "@/components";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  imageUrl: string;
  dateCreated: Date;
  user: {
    username: string;
    email: string;
    avatar: string;
  };
};

export default function Blog({ params: { blogId } }: any) {
  const router = useRouter();
  const [blog, setBlog] = useState<TBlog | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      if (blogId) {
        const res = await fetch(
          `https://fooderra-api.vercel.app/api/blogs/${blogId}`
        );
        const data = await res.json();
        setBlog(data);
      }
    };
    fetchBlog();
  }, [blogId]);

  return (
    <Layout>
      <Flex>
        <Button onClick={() => router.push("/blogs")}>Back to all blogs</Button>
        {blog && (
          <div>
            <Heading>{blog.title}</Heading>
            <Text>{blog.content}</Text>
            <Button>{blog.likes}</Button>
            <Text>
              {" "}
              {new Date(blog.dateCreated)
                .toLocaleString(undefined, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(
                  /(\d{2})\.(\d{2})\.(\d{4}),\s(\d{2}):(\d{2})/,
                  "$1.$2.$3, $4:$5"
                )}
            </Text>
            <Text>@{blog.user.username}</Text>
            <Avatar name={blog.user.username} />
            <Image
              src={blog.imageUrl}
              alt="blog image"
              height={"50px"}
              width={"50px"}
            />
          </div>
        )}
      </Flex>
    </Layout>
  );
}
