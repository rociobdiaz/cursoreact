import lapicesgiotto from './imagenes/lapices24giotto.jpg';
import fibrasfilgo from './imagenes/fibras10filgo.jpg';
import crayonescrayola from './imagenes/crayones24crayola.jpg';
import resma from './imagenes/resma.jpg';
import cintatransparente from './imagenes/cinta.jpg';
import cintapapel from './imagenes/cintapapel.jpg'


export const stock = [
    {
        id: 1,
        name: "Lapices de colores",
        description: "Caja de 24 lapices",
        price: 405,
        img: lapicesgiotto,
        category: 'libreria'
    },
    {
        id: 2,
        name: "Fibras de colores",
        description: "Caja de 10 fibras",
        price: 250,
        img: fibrasfilgo,
        category: 'libreria'
    },
    {
        id: 3,
        name: "Crayones de cera",
        description: "Caja de 24 crayones",
        price: 650,
        img: crayonescrayola,
        category: 'libreria'
    },
    {
        id: 4,
        name: "Resma A4",
        description: "Resma tamaño A4 80gr",
        price: 420,
        img: resma,
        category: 'papelera'
    },
    {
        id: 5,
        name: "Cinta adhesiva",
        description: "Cinta adhesiva transparente",
        price: 280,
        img: cintatransparente,
        category: 'papelera'
    },
    {
        id: 6,
        name: "Cinta de papel",
        description: "Cinta de papel",
        price: 290,
        img: cintapapel,
        category: 'papelera'
    }
    
]