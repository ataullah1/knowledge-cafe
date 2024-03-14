import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Bookmarks from './component/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (dta) => {
    setBookmark([...bookmark, dta]);
  };
  // console.log(bookmark);
  return (
    <>
      <div className="fontFam w-11/12 mx-auto">
        <Header />
        <main className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6 ">
          {/* left part Blog  */}
          <Blogs handleBookmark={handleBookmark} />
          {/* right part  Bookmark */}
          <Bookmarks bookmark={bookmark} />
        </main>
      </div>
    </>
  );
}

export default App;
