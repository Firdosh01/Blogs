import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from './context/AppContext'

function Blogs() {
  const {posts, loading} = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7  mt-[270px]  mb-[300px]   justify-center items-center'>
      {
        loading ? (<Spinner />) :  
        (
          posts.length === 0 ? 
          (<div>
            <p>No Post Found</p>
          </div>) :
          (posts.map ( (post) => (
            <div>
                    <p className="text-lg font-bold "> {post.title}</p>

                    <p className='text-sm mt-[4px]'>
                      By <span>{post.author}</span> On <span>{post.category}</span>
                    </p>
                    <p className='text-sm mt-[4px]'>Posted On {post.date} </p>
                    <p className='text-md mt-[14px]'>{post.content} </p>

                    <div className='flex gap-x-3'>
                      {post.tags.map( (tag, index) => {
                        return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]"> {`#${tag}`}</span>
                      })}
                    </div>
            </div>
          )))
        )
      }
      
    </div>
  )
}

export default Blogs
