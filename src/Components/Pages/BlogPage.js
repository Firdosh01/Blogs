import React from 'react'
import {useState} from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';


function BlogPage() {

  const [blog, setBlog] = useState(null)
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const {setLoading, loading} = useContext(AppContext)

  async function fetchRelatedBlogs() {
    setLoading(true)
  }

  return (
    <div>
      
    </div>
  )
}

export default BlogPage
