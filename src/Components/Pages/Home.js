import React from 'react'
import Header from '../Header'
import Blogs from '../Blogs'
import Pagination from '../../Pagination'

function Home() {
  return (
    <div className="flex items-center justify-center">
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default Home