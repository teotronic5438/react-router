import React, { Children } from 'react';
import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';

import LayoutPublic from '../layout/LayoutPublic';

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
            },
        ],
    },

]);