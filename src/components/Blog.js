import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="max-w-md bg-white rounded-lg">
      <Link to="/">
        <img
          className="rounded-t-lg w-full"
          src="https://themefisher.com/_next/image?url=%2Fblog%2Fit-website-templates.png&w=430&q=75"
          alt=""
        />
      </Link>

      <div className="p-5 px-6">
        <p className="mb-3 font-normal text-gray-500 text-[17px]">
          By <Link to="/blog">Huy Bui Khanh</Link> | <span>20 Mins read</span>
        </p>
        <Link to="/">
          <h5 className="mb-2 text-[22px] font-bold tracking-tight text-gray-700 ">
            10 Best AI Website Templates In 2023
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
