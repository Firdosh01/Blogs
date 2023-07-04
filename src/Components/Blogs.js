import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from './context/AppContext'
import BlogDetails from './BlogDetails'

function Blogs() {
  const {posts, loading} = useContext(AppContext)

  return (
    <div className='flex flex-col my-4 gap-y-7'>
      {
        loading ? (<Spinner />) :  
        (
          posts.length === 0 ? 
          (<div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-3xl font-bold text-center'>No Post Found</p>
          </div>) :
          (posts.map ( (post) => (
            <BlogDetails key={post.id} post={post} />
          )))
        )
      }
      
    </div>
  )
}

export default Blogs
