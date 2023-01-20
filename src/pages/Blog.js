import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Blog = () => {
  const {posts} = useLoaderData();
  console.log(posts);
  const results = posts.map((blog) => <ListGroup.Item key={blog.id}>
      <Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link>
  </ListGroup.Item>);

  return (
    <Card>
      {posts.length && <div>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          {results}
        </ListGroup>
      </div>}
    </Card>
  )
}

export default Blog;

// 1) Exportamos una funcion que devuelve una promesa en loaderBlog
// 2) Devuelve los posts y lo configura en el loader que devuelve una promesa
// 3) Tendremos acceso al useLoaderData para acceder al archivo.

export const loaderBlog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {posts}; // debe devolver siempre en un objeto 
}