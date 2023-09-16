import React from 'react'
import CartWidget from './CartWidget';
import NavButton from './NavButton'

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">GonPage</a>
                     <NavButton/>
                        <div className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent" >
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Productos</a>
                            <a className="nav-link" href="#">Contacto</a>
                        <a className="nav-link" href="#"><CartWidget /></a>
                        </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;