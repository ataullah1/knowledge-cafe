import { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog';

const Blogs = () => {
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
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

// Blogs.propTypes = {
//   blog: PropTypes.object.isRequired,
// };
export default Blogs;
