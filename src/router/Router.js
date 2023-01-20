import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Blog, { loaderBlog } from '../pages/Blog';
import NotFound from '../pages/NotFound';

import LayoutPublic from '../layout/LayoutPublic';
import Post, { loaderPost } from '../pages/Post';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true, // se recomienda definir la ruta principal del path principal en el children
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: loaderBlog,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: loaderPost,
            },
        ],
    },

]);