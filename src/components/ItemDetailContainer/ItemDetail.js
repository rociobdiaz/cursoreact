import { useHistory } from 'react-router';
import './Detail.scss';
import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'




export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack} = useHistory()

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

    const styles = {
        btnAgregar: isInCart(id) ? "btn btn-danger" : "btn btn-success",
        btnTerminar: `btn btn-success ${!isInCart(id) && "desactivado"}`
    }

    return (
        <>
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
            
            <div className={isInCart(id) && "desactivado"} >

                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                <button
                    disabled={cantidad === 0}
                    className={styles.btnAgregar}
                    onClick={handleAgregar}
                >
                    Agregar
                </button>

                <Link to="/cart" className={styles.btnTerminar}>Terminar mi compra</Link>
                          

                <hr/>
                
                <button 
                className="btn btn-primary"
                onClick={() => goBack()}
                >
                    Volver
                </button>

                
            </div>
            
        </>
    )
}