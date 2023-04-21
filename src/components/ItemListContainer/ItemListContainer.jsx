import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = (props) => {

  const [items, setItems]= useState([])

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    pedirProductos()
    .then((res)=>{
      setItems(res)
    })
    .catch((error)=> console.log(error))
    .finally(()=>{
      setLoading(false)
    })
  },[])

  return (
    <>
    {
    loading
    ?<h2>Cargando...<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></h2>
    :<ItemList productos={items}/>
}
    </>
  )
}
