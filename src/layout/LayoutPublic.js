import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  return (
    <>
        <Navbar />
        <Container>
            { /* "Dentro de main se visualizara la navegacion y para eso uso Outlet" */}
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </Container>
    </>
  )
}

export default LayoutPublic
