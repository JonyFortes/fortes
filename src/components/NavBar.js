import React from 'react';
import './NavBar.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">TNA</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a class="menu-list" href="sass.html">Mouse</a></li>
                        <li><a class="menu-list" href="badges.html">Teclados</a></li>
                        <li><a class="menu-list" href="collapsible.html">Monitores</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;