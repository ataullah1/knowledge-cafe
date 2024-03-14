import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  //   console.log(id, cover);
  return (
    <div className="pb-5 md:pb-9 mb-5 md:mb-10 border-b">
      <div className="mb-7">
        <img className="w-full rounded-lg" src={cover} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="w-[60px] h-[60px] rounded-full" src={author_img} />
          <div>
            <p className="text-neutral-900 text-2xl font-bold  leading-[38.40px]">
              {author}
            </p>
            <p className="text-neutral-900 text-opacity-60 text-base font-semibold  leading-relaxed">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-right text-neutral-900 text-opacity-60 text-xl font-medium ">
            {reading_time} min read
          </p>

          <FaRegBookmark className="cursor-pointer" />
        </div>
      </div>
      <div>
        <h1 className=" text-neutral-900 text-2xl sm:text-3xl lg:text-[40px] font-bold py-2 md:leading-10 lg:leading-[64px]">
          How to get your first job as a self-taught programmer
        </h1>
        <p className="text-neutral-900 text-opacity-60 text-lg md:text-xl font-medium  leading-loose">
          {hashtags.map((has, idx) => (
            <span key={idx}>
              <a href="#">#{has} </a>
            </span>
          ))}
        </p>

        <a
          href="#"
          className="text-indigo-600 text-lg md:text-xl font-semibold  underline"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};

// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
// };
export default Blog;
