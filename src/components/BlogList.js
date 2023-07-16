import React from 'react';
import Blog from './Blog';

const BlogList = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15].map((value) => (
        <div>
          <Blog />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
