import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import './itemlistcontainerstyles.css'

export const ItemListContainer = (props) => {

  const [items, setItems]= useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId}= useParams()

  useEffect(()=>{
    setLoading(true)
    pedirProductos()
    .then((res)=>{
      if(categoryId){
        setItems(res.filter(prod=> prod.category === categoryId))
      }
      else{
        setItems(res)
      }
      
    })
    .catch((error)=> console.log(error))
    .finally(()=>{
      setLoading(false)
    })
  },[categoryId])

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
