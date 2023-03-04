import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ id)
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <br></br>
            <h4>Written by: {blog.author}</h4>
            <br></br>
            <div>{blog.body}</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
