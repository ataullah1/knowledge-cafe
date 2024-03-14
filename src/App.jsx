import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import { useEffect } from 'react';
import Blogs from './component/Blogs';
import Bookmarks from './component/Bookmarks';

function App() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((dta) => setBlog(dta));
  }, []);

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
