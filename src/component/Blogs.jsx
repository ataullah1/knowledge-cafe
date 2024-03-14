import { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmark }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((dta) => setBlog(dta));
  }, []);
  //   console.log(blog);
  return (
    <div className="w-full md:w-8/12">
      {blog.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
};
export default Blogs;
