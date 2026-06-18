"use client";

import * as React from "react";
import Link from "next/link";
import { Bookmark, Share2, Eye } from "lucide-react";

function formatDate(input) {
  if (!input) return "";
  const d = new Date(input);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function htmlToText(html) {
  if (!html) return "";
  if (typeof window === "undefined") {
    return html
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
}

function readingTime(html) {
  const text = htmlToText(html);
  const words = text ? text.split(/\s+/).length : 0;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

function AvatarInline({ src, alt, initials }) {
  if (src) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-6 w-6 rounded-full object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="grid h-6 w-6 place-items-center rounded-full bg-muted text-foreground/70 text-[10px] font-medium"
      title={alt}
    >
      {initials}
    </div>
  );
}

export default function BlogCard({ blog }) {
  const excerpt = React.useMemo(() => {
    const text = htmlToText(blog?.article);
    return text.slice(0, 160);
  }, [blog?.article]);

  if (!blog) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="animate-pulse">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <div className="absolute inset-0 bg-muted" />
          </div>
          <div className="space-y-3 p-5">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-muted" />
              <div className="h-4 w-32 rounded bg-muted" />
            </div>
            <div className="h-6 w-3/4 rounded bg-muted" />
            <div className="h-6 w-2/3 rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-11/12 rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  const dateStr = formatDate(blog.pub_date);
  const rtime = readingTime(blog.article);

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-transform duration-200 hover:-translate-y-0.5 max-w-[450px]">
      <Link href={`/blogs/${blog.slug}/`} aria-label={`Open ${blog.title}`}>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <img
            src={blog.image || "/placeholder.jpg"}
            alt={blog.title || "Blog image"}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-5 bg-white">
        <Link href={`/blogs/${blog.slug}/`}>
          <h3 className="text-black text-2xl font-bold leading-tight text-foreground">
            {blog.title}
          </h3>
        </Link>

        <p
          className="mt-2 leading-relaxed text-gray-700 line-clamp-2"
          title={excerpt}
        >
          {excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            {dateStr && <span>{dateStr}</span>}
            <span aria-hidden="true">•</span>
            <span>{rtime}</span>
            {typeof blog.views === "number" && (
              <>
                <span aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  {blog.views}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 text-gray-700">
            <button
              type="button"
              className="rounded-md p-2 hover:bg-muted"
              aria-label="Share"
              onClick={(e) => {
                e.preventDefault();
                // if (navigator.share) {
                //   navigator
                //     .share({
                //       title: blog.title,
                //       url:
                //         typeof window !== "undefined"
                //           ? window.location.origin + `/blogs/${blog.slug}/`
                //           : `/blogs/${blog.slug}/`,
                //     })
                //     .catch(() => {});
                // }
              }}
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
