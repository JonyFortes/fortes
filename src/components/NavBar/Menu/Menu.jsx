import React from 'react';
import './Menu.css';

export const Menu = (props) => {
        return(
            <ul class="left hide-on-med-and-down">
                    <ul>
                    <li><a href="#">{props.lista[0]}</a></li>
                    <li><a href="#">{props.lista[1]}</a></li>
                    <li><a href="#">{props.lista[2]}</a></li>
                    <li><a href="#">{props.lista[3]}</a></li>
                    <li><a href="#">{props.lista[4]}</a></li>
                    </ul>
                </ul>
        )
}

export default Menu;