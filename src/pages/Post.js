import React from 'react';
import {useLoaderData} from 'react-router-dom';


const Post = () => {
    const {post} = useLoaderData();

  return (
    <>
        <h1> {post.id} - {post.title} </h1>
        <p> {post.body} </p>
    </>
  )
}

export default Post

export const loaderPost = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    if(!res.ok) 
        // eslint-disable-next-line no-throw-literal
        throw({
            status: res.status,
            statusText: 'No encontrado',
        })

    const post = await res.json();
    return {post};
} 