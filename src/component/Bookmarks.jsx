import PropTypes from 'prop-types';
const Bookmarks = ({ bookmark }) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="w-full bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600 mb-6">
        <h2 className="text-indigo-600 text-xl lg:text-2xl font-bold  py-5 text-center">
          Spent time on read : 177 min
        </h2>
      </div>
      <div className="w-full bg-neutral-900 bg-opacity-5 rounded-lg p-4 lg:p-7">
        <h2 className="text-neutral-900 text-xl lg:text-2xl font-bold pb-2">
          Bookmarked Blogs : {bookmark.length}
        </h2>
        {/* Start book mark */}
        {bookmark.map((bookmark, ind) => (
          <div key={ind} className=" bg-white rounded-lg mb-4">
            <p className="w-full text-neutral-900 text-base lg:text-lg font-medium p-4">
              {bookmark}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
};
export default Bookmarks;
