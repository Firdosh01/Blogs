import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Pagination';
import { AppContext } from './Components/context/AppContext';
import { useEffect, useContext } from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Components/Pages/Home';


function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag)
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category)
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:blogId' element={<BlogPage/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
      </Routes>
    </div>
  );
}

export default App;
