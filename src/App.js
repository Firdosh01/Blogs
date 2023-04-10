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
    <div>

      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
