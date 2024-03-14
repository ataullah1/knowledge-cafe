const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h1>sdfsa</h1>
    </div>
  );
};

Blog.propsTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
