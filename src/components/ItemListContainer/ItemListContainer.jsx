import React, { useContext, useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';
import './itemlistcontainerstyles.css'


export const ItemListContainer = (props) => {

  const [items, setItems]= useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId}= useParams()

  useEffect(()=>{
 
   setLoading(true)
   const db = getFirestore();
   const productos = db.collection('productos')
   if (categoryId){
    const filtrado = productos.where("category", "==", categoryId)
    filtrado.get()
      .then((res)=>{
        const newItem = res.docs.map((doc)=>{
          return{id: doc.id, ...doc.data()}
        })
        setItems(newItem)

      })
    .catch((err)=> console.log(err))
    .finally(()=>{
      setLoading(false)
    })
   } else{  
    productos.get()
    .then((res)=>{
     const newItem = res.docs.map((doc)=>{
       return{id: doc.id, ...doc.data()}
     })
     setItems(newItem)
    })
    .catch((error)=>console.log(error))
    .finally(()=>{
     setLoading(false)
    })
   }

   }
 ,[categoryId])

  return (
    <div className='bodyCatalogue'>
    
    {
    loading
    ?<h2>Cargando...<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></h2>
    :<ItemList productos={items}/>
}
    </div>
  )
}
