import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Pagination';
import { AppContext } from './Components/context/AppContext';
import { useEffect, useContext } from 'react';


function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-1">

      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
