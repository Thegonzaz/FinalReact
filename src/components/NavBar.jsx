import React from 'react'
import CartWidget from './CartWidget';
import NavButton from './NavButton'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="nav-link" To='/'>GonPage</NavLink>
                    <NavButton />
                    <div className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent" >
                        <NavLink className="nav-link" to='/categoria/perifericos'>Perifericos</NavLink>
                        <NavLink className="nav-link" to='/categoria/monitores'>Monitores</NavLink>
                        <NavLink className="nav-link" to='/cart' ><CartWidget /></NavLink>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;