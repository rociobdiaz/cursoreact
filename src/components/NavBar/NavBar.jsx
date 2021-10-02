import React from 'react'
import { CartWidget } from './CartWidget';

export const NavBar = ({titulo}) => {
    return (
        <section>
            <nav>
                <div>
                    <h1>{titulo}</h1>
                </div>
                <div>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>
                <CartWidget />

            </nav>
        </section>
    )
}
