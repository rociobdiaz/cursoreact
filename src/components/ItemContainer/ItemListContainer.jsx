import React, { useContext, useEffect, useState } from 'react';
import { getFirestore } from '../Firebase/config';
import { ItemList } from './ItemList';
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext'




export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    
    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

            const db = getFirestore()
            const prod = categoryId 
                                ? db.collection('Productos').where('category', '==', categoryId)
                                : db.collection('Productos')

            prod.get()
                .then((response) => {
                    const newItems = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                
                setItems(newItems)
            })

            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
                console.log("Fin del llamado")
            })

    }, [categoryId, setLoading])

    return (
        <section className="container my-5">
            {
                loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={items}/>
            }
            
        </section>
    )}