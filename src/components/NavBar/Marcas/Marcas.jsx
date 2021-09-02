import React from 'react';
import './Marcas.css';

export const Marcas = (props) => {
        return(
            <ul class="lista">
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

export default Marcas;