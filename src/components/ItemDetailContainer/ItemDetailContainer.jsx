import React, { useEffect , useState } from 'react';
//import {pedirProductos} from '../../helpers/pedirProductos';
import {getFirestore} from '../../firebase/config'
import Spinner from 'react-bootstrap/Spinner';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './itemdetailcontainerstyles.css'

export const ItemDetailContainer = () => {

    const [item,setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
       setLoading(true)
        //pedirProductos()
        //.then(res=>{
        //    setItem(res.find(prod => prod.id === Number(itemId)))
       // })
        //.catch((error)=> console.log(error))
       // .finally(()=>{
         //   setLoading(false)
        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)
        item.get()
        .then((doc)=>{
          setItem({
            id: doc.id, ...doc.data()
          })
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
          setLoading(false)
        })
        
    },[itemId])
  return (
    <section className='itemDetails'>
      {
        loading
        ?<h2>Cargando...<Spinner animation="border" role="status"></Spinner></h2>
        :<ItemDetail {...item}/>
      }

    </section>
  )}
