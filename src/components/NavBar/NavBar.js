import React, { useCallback } from 'react';
import './NavBar.css';


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
                    <li><a href="#"><i class="material-icons">shopping_cart</i></a></li>
                    <li><a href="#"><i class="material-icons">search</i></a></li>
                    
                </ul>
            </div>
            </nav>
            
        )
    }
}

export default Navbar;