"use client";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useState } from "react";

const BlogsList = (props) => {
  const [blogs, setBlogs] = useState(props);
  // const blogAr = [{}];
  useEffect(() => {
    setBlogs(props);
  }, [props]);
  console.log(blogs.props, "vishal");
  return (
    <div className=" w-full text-black flex flex-col">
      <div className="flex justify-start items-center px-4 my-6 w-[80%] mx-auto">
        <img src="/images/article.png" width={100} />
        <h1 className="text-5xl text-start md:text-6xl mx-4">
          Blogs & Articles
        </h1>
      </div>
      <div className="my-6 mx-auto flex gap-3 flex-wrap justify-center px-8 w-full">
        {/* blog cards */}
        {/* blog cards */}
        {blogs.props.length > 0 ? (
          blogs.props.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <img src="/images/loader.gif" width={100} />
        )}
      </div>
    </div>
  );
};

export default BlogsList;
