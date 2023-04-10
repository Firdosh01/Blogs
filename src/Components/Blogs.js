import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from './context/AppContext'

function Blogs() {
  const {posts, loading} = useContext(AppContext)

  return (
    <div>
      {
        loading ? (<Spinner />) :
        (
          posts.length === 0 ? 
          (<div>
            <p>No Post Found</p>
          </div>) :
          (posts.map ( (post) => (
            <div>
                    <p>{post.title}</p>

                    <p>
                      By <span>{post.author}</span> On <span>{post.category}</span>
                    </p>
                    <p>Posted On {post.date} </p>
                    <p>{post.content} </p>

                    <div>
                      {post.tags.map( (tag, index) => {
                        return <span key={index}> {`#${tag}`}</span>
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
