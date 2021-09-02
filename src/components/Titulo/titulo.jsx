import React from 'react';
import './titulo.css';

export const Titulo = (props) => {
        return(
            <div className="titulo">
            <h1><a  href="#">{props.titulos[0]}</a></h1>
            <h2>{props.titulos[1]}</h2>
            </div>
        )
}

export default Titulo;