const Blogs = () => {
  return (
    <div className="w-full md:w-8/12">
      <div className="pb-5 md:pb-9 mb-5 md:mb-10 border-b">
        <div className="mb-7">
          <img
            className="w-full rounded-lg"
            src="https://via.placeholder.com/845x450"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://via.placeholder.com/60x60"
            />
            <div>
              <p className="text-neutral-900 text-2xl font-bold  leading-[38.40px]">
                Mr. Raju
              </p>
              <p className="text-neutral-900 text-opacity-60 text-base font-semibold  leading-relaxed">
                Mar 14 (4 Days ago)
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-right text-neutral-900 text-opacity-60 text-xl font-medium ">
              05 min read
            </p>
            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex bg-slate-500" />
          </div>
        </div>
        <div>
          <h1 className=" text-neutral-900 text-2xl sm:text-3xl lg:text-[40px] font-bold py-2 md:leading-10 lg:leading-[64px]">
            How to get your first job as a self-taught programmer
          </h1>
          <p className="text-neutral-900 text-opacity-60 text-lg md:text-xl font-medium  leading-loose">
            #beginners #programming
          </p>

          <a
            href="#"
            className="text-indigo-600 text-lg md:text-xl font-semibold  underline"
          >
            Mark as read
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
