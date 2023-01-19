import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page" className='text-center'>
            <h1 className='text-danger'>Oops! - 404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className='btn btn-primary' to="/">Volver al Home</Link>
        </div>
    );
};

export default NotFound;