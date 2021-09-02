import React from 'react';
import './NavBar.css';
import Carrito from './Carrito/Carrito.js';
import Search from './Search/Search.js';
import Menu from './Menu/Menu.jsx';


class Navbar extends React.Component{
    render(){

        return(
            <nav class="nav-wrapper">
            <div class="container">
                <a href="#" data-target="menu-responsive" class="sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>

                <ul class="left hide-on-med-and-down">
                    <Menu lista={["Mouse","Teclados","Monitores"]} />
                </ul>
                <ul  class="right">
                    <Carrito/>
                    <Search/>

                </ul>
            </div>
            </nav>
            
        )
    }
}

export default Navbar;