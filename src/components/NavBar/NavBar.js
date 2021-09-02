import React, { useCallback } from 'react';
import './NavBar.css';
import Carrito from './Carrito/Carrito.js';
import Search from './Search/Search.js';



class Navbar extends React.Component{
    render(){

        return(
            <nav class="nav-wrapper">
            <div class="container">
                <a href="#" data-target="menu-responsive" class="sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>

                <ul class="left hide-on-med-and-down">
                    <li><a href="#">Monitores</a></li>
                    <li><a href="#">Mouse</a></li>
                    <li><a href="#">Teclado</a></li>
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