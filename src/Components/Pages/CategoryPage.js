import React from 'react'
import Header from '../Header'
import { useLocation, useNavigation } from 'react-router-dom';
import Blogs from '../Blogs';
import Pagination from '../Pagination';

function CategoryPage() {

  const navigation = useNavigation();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

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
        Blogs on <span>{category}</span>
      </h2>
      </div>    
      <Blogs />
      <Pagination />
  </div>
  )
}

export default CategoryPage
