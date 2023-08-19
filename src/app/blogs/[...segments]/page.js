import React from 'react';

const SingleBlog = ({params}) => {
  const [year, id]=params.segments ||[];
  console.log(params.segments);
    return (
        <div>
            SingleBlog {year|| new Date().getFullYear()}
        </div>
    );
};

export default SingleBlog;