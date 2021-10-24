//import React from 'react';
import { useHistory } from 'react-router';
import './Detail.scss';
import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'




export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return (
        <div>
            <div className="box__detail container">
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

                { isInCart(id) 
                    ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    :
                        <>
                            <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                            <button
                                className="btn btn-success my-2"
                                onClick={handleAgregar}
                                >
                                Agregar
                            </button>
                        </>
                }

                <hr/>

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