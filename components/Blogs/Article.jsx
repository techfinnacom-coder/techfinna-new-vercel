"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import copy from "copy-to-clipboard";
import ShareBlog from "./ShareBlog";
import Contact from "./Contact";
import BlogCard from "../BlogsList/BlogCard";

const Article = ({ singleBlog, relatedBlogs }) => {
  const [tags, setTags] = useState([]);
  console.log(singleBlog, "singleBlog inside article.jsx");
  // converting tags object to array
  useEffect(() => {
    if (singleBlog?.tags) {
      var result = Object.keys(singleBlog?.tags).map(
        (key) => singleBlog?.tags[key]
      );
      setTags(result);
    }
  }, [singleBlog]);
  console.log(tags);
  var tagsList = [];
  if (tags.length > 0) {
    tagsList = tags.map((tag) => {
      return (
        <p
          key={tag}
          className="rounded-xl px-4 py-2 bg-gray-300 text-black mx-2 my-1"
        >
          {tag}
        </p>
      );
    });
  }

  const copyToClipboard = (e) => {
    console.log("clicked on copytoclipboard");
    const copytext = `https://techfinna.com/blog/${singleBlog.slug}/`;
    copy(copytext);
    document.getElementById("snackbar").classList.add("left-5");
    document.getElementById("snackbar").classList.remove("left-[-300px]");
    setTimeout(closeSnackBar, 3000);
  };
  const closeSnackBar = () => {
    document.getElementById("snackbar").classList.add("left-[-300px]");
    document.getElementById("snackbar").classList.remove("left-5");
  };
  return (
    <>
      <main className="px-6 prose prose-xl prose-slate dark:prose-invert article-blog max-w-[780px] flex justify-center itemms-center flex-col">
        <h1 className="text-[42px] text-black text-center my-[32px]">
          {singleBlog?.title}
        </h1>
        <div className="flex justify-start items-center px-4">
          <img
            className="border-2 border-gray-600 drop-shadow-xl shadow-black rounded-full "
            src="/images/techfinna-logo.png"
            width={50}
            height={50}
          />
          <div className="flex px-4 text-black justify-between w-full">
            <div className="flex gap-2 justify-center items-center w-[40%]">
              <p className="mt-0 text-right text-gray-500 text-[14px]">
                <span className="font-semibold text-gray-700"></span>{" "}
                {singleBlog?.time} read
              </p>
              ·
              <p className="mt-0 text-right text-gray-500 text-[14px]">
                <span className="font-semibold text-gray-700"></span>{" "}
                {singleBlog?.pub_date}
              </p>
            </div>
            <div className="flex justify-end items-end flex-wrap px-4 w-[60%]">
              {singleBlog ? <>{tagsList}</> : <></>}
            </div>
          </div>
        </div>
        <ShareBlog singleBlog={singleBlog} />
        {/* main article here */}
        <article className="text-gray-800 text-lg  article">
          <section dangerouslySetInnerHTML={{ __html: singleBlog?.article }} />
        </article>
        {/* back to home link */}
        <p>
          {" "}
          <p className="text-center mx-auto py-12">
            <Link href="/">← Back to home</Link>
          </p>
        </p>
        <div className="flex justify-start items-center px-4">
          {singleBlog ? <>{tagsList}</> : <></>}
        </div>
        <ShareBlog singleBlog={singleBlog} />
        {/* alert url copied */}
        <div
          id="snackbar"
          className="absolute duration-300 flex ease-in items-center gap-5 bottom-5 left-[-300px] w-[250px] justify-between px-3 p-2.5 border-[#F0FDF4] bg-[#F0FDF4] rounded-sm"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4ADE80"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
            </svg>
            <h4 className="text-[#166534] font-semibold">URL Copied!</h4>
          </div>
          <div
            onClick={closeSnackBar}
            className=" group mr-1 cursor-pointer border-white rounded-sm "
          >
            <svg
              className="group-hover:rotate-90 group-hover:scale-125 duration-200 ease-linear"
              xmlns="http://www.w3.org/2000/svg"
              fill="#22C55E"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </div>
        </div>
      </main>
      {/* <div>
        {relatedBlogs?.length > 0 && (
          <div className="my-12 w-full">
            <h2 className="text-3xl text-black mb-6">Related Articles</h2>
            <div className="grid grid-col-1 md:grid-cols-2 gap-4 justify-center">
              {relatedBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        )}

        <Contact />
      </div> */}
    </>
  );
};

export default Article;
