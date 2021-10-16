import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Items.scss'

export const Item = ( {id, name, price, img, description} ) => {

    return (

        <Card style={{ width: '18rem' }} className="m-3 card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>

                <Link to={`/detail/${id}`}>
                    <Button variant="dark">Ver Producto</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}