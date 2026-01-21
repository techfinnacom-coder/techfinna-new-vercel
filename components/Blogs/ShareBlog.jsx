import React from "react";

const ShareBlog = ({ copyToClipboard }) => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-end share-div my-6">
        <div className="flex justify-center items-center ">
          <a className="mx-6" href="https://www.youtube.com/@tech-finna/">
            <img className="" src="/images/blogs/video.png" width="20px" />
          </a>
          <button onClick={(e) => copyToClipboard(e)} className="mx-6">
            <img className="" src="/images/blogs/share.png" width="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareBlog;
