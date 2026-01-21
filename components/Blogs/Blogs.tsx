import React from "react";
import Article from "./Article";
import { Metadata } from "next";
import BlogCard from "../BlogsList/BlogCard";
import Contact from "./Contact";

export default function Blogs({ singleBlog, relatedBlogs }: any) {
  const meta = {
    title: singleBlog?.metaTitle,
    desc: singleBlog?.metaDescription,
    url: singleBlog?.metaUrl,
  };
  return (
    <>
      <head>
        <link rel="canonical" href={meta?.url} />
        <title>{meta?.title}</title>
        <meta name="title" content={meta?.title} />
        <meta name="description" content={meta?.desc} />
        {/* <!-- Basic meta tags --> */}

        <meta name="robots" content="INDEX,FOLLOW" />

        {/* <!-- Facebook meta tags --> */}
        <meta name="og:title" content={meta?.title} />
        <meta name="og:description" content={meta?.desc} />

        <meta property="og:url" content={meta?.url} />

        {/* <!-- Twitter meta tags --> */}
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.desc} />
        <meta property="twitter:url" content={meta?.url} />
      </head>
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
        {singleBlog?.title ? (
          <>
            <Article singleBlog={singleBlog} relatedBlogs={relatedBlogs} />
          </>
        ) : (
          <>
            <img src="/images/loader.gif" width={100} />
          </>
        )}
      </div>
      <div className="bg-gray-200">
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
          <div className="max-w-[780px] px-6 pb-6">
           {relatedBlogs?.length > 0 && (
              <div className="my-12 w-full">
                <h2 className="text-3xl text-black mb-6">Related Articles</h2>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4 justify-center">
                  {relatedBlogs.map((blog: any) => (
                    <BlogCard key={blog.slug} blog={blog} />
                  ))}
                </div>
              </div>
            )} 
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
