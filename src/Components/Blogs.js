import React, { useContext } from 'react'
import Spinner from './Spinner'
import Card from './context/Card'
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
          (posts.map ( (post) => ( <Card/> )))
        )
      }
      
    </div>
  )
}

export default Blogs
