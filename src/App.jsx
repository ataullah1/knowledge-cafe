import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Bookmarks from './component/Bookmarks';

function App() {
  // console.log(blog);

  return (
    <>
      <div className="fontFam w-11/12 mx-auto">
        <Header />
        <main className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6 ">
          {/* left part Blog  */}
          <Blogs />
          {/* right part  Bookmark */}
          <Bookmarks />
        </main>
      </div>
    </>
  );
}

export default App;
