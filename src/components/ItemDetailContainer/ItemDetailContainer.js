import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext';
import { getFirestore } from '../Firebase/config';
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

            const db = getFirestore()
            const prod = db.collection('Productos')
            const item = prod.doc(itemId)

            item.get()
                .then((doc) => {
                    setItem({
                        id: doc.id, ...doc.data()
                    })
                })

            .catch( err => console.log (err))

            .finally(()=> {
                setLoading(false)
                })
            

    }, [itemId, setLoading])

    return (
        <div>
            {
                loading ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}