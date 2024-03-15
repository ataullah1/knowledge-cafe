import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Bookmarks from './component/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (dta) => {
    setBookmark([...bookmark, dta]);
  };
  const readTimeCall = (dta, title) => {
    const totalTime = readTime + dta;
    setReadTime(totalTime);
    // console.log('Remove dta =', title);
    const removeBookMark = bookmark.filter((bookmark) => bookmark !== title);
    setBookmark(removeBookMark);
  };
  // console.log(readTime);
  return (
    <>
      <div className="fontFam w-11/12 mx-auto">
        <Header />
        <main className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6 ">
          {/* left part Blog  */}
          <Blogs handleBookmark={handleBookmark} readTime={readTimeCall} />
          {/* right part  Bookmark */}
          <Bookmarks bookmark={bookmark} readTime={readTime} />
        </main>
      </div>
      <p className="pt-9 pb-7 bg-slate-800 text-center text-white italic">
        Coded by{' '}
        <a
          href="https://www.linkedin.com/in/md-ataullah/"
          className="font-semibold text-pink-500"
        >
          Md Ataullah
        </a>
      </p>
    </>
  );
}

export default App;
