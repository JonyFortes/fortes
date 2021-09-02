import React from 'react';
import './titulo.css';

export const Titulo = (props) => {
        return(
            <h1 className="titulo"><a  href="#">{props.titulos}</a></h1>
        )
}

export default Titulo;