import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Header from '../Header';
import Blogs from '../Blogs';
import Pagination from '../Pagination';

function TagPage() {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button
        onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
        </div>    
        <Blogs />
        <Pagination />
    </div>
  )
}

export default TagPage
