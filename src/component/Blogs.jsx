import { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmark, readTime }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((dta) => setBlog(dta));
  }, []);
  //   console.log(blog);
  return (
    <div className="w-full md:w-8/12">
      {blog.map((blog, i) => (
        <Blog
          key={i}
          blog={blog}
          handleBookmark={handleBookmark}
          readTime={readTime}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  readTime: PropTypes.func,
};
export default Blogs;
