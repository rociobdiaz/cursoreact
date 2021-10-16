import React from 'react';
import { useHistory } from 'react-router';
import './Detail.scss'




export const ItemDetail = ({ id, name, price, img, description, category} ) => {

    const {goBack, push} = useHistory()


    return (
        <div>
            <div className="box__detail">
                <div className="box__detail--img">
                    <img src={img} alt={name}/>
                </div>
                
                <div className="box__detail--description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h4>Precio: ${price}</h4>
                </div>  
            </div>
            
            <div className="box__buttons">
                <button 
                    className="btn btn-primary"
                    onClick={() => push("/")}
                >
                    Volver al inicio
                </button>
                
                <button 
                className="btn btn-primary"
                onClick={() => goBack()}
                >
                    Volver
                </button>

                
            </div>
            
        </div>
    )
}