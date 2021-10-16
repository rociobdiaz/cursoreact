import React from 'react';
import { Item } from './Item';
import './Items.scss'

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="box__container">
            <h2>Nuestros productos</h2>
            <hr/>

            <div className="box__container--row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
            </div>
        </div>
    )
}