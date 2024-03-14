import './App.css';

function App() {


  return (
    <>
      <div className="fontFam w-11/12 mx-auto">
        <header className="flex justify-between items-center pt-5 md:pt-8 mb-4 md:mb-8 pb-3 border-b">
          <h1 className="text-neutral-900 text-2xl sm:text-[40px] font-bold">
            Knowledge Cafe
          </h1>
          <img
            className="w-11 sm:w-[60px] h-11 sm:h-[60px] rounded-full"
            src="https://via.placeholder.com/60x60"
          />
        </header>
        <main className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6 ">
          {/* left part  */}
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

          {/* right part  */}
          <div className="w-full md:w-1/3">
            <div className="w-full bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600 mb-6">
              <h2 className="text-indigo-600 text-xl lg:text-2xl font-bold  py-5 text-center">
                Spent time on read : 177 min
              </h2>
            </div>
            <div className="w-full bg-neutral-900 bg-opacity-5 rounded-lg p-4 lg:p-7">
              <h2 className="text-neutral-900 text-xl lg:text-2xl font-bold pb-2">
                Bookmarked Blogs : 8
              </h2>
              {/* Start book mark */}
              <div className=" bg-white rounded-lg mb-4">
                <p className="w-full text-neutral-900 text-base lg:text-lg font-medium p-4">
                  Master Microsoft Power Platform and Become an In-Demand!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
