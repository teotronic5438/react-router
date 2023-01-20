import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  const navigation = useNavigation(); // devuelve en el state, tres estados: idle | submiting | loading.

  return (
    <>
        <Navbar />
        <Container>
            { /* "Dentro de main se visualizara la navegacion y para eso uso Outlet" */}
            <main>
                { navigation.state === 'loading' && (
                  <div className='alert alert-info my-5'>Loading...</div>
                )}
                <Outlet />
            </main>
            <footer>footer</footer>
        </Container>
    </>
  )
}

export default LayoutPublic
