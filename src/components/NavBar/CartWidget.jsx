import React, { useContext } from 'react';
import {FaShoppingBasket} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <div>
            <FaShoppingBasket className="widget"/>

            <span> {calcularCantidad()} </span>
        </div>
        
    )
}
