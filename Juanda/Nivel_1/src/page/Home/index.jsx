
import { useState, useEffect} from "react"

import Layout from "../../Components/Layou/index.jsx";
import Card from "../../Components/Card/index.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx"
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../Context";//importo context
//import { data } from "autoprefixer";

import "./index.css"


function Home() {


  const {items, setItems, setSearchByTitle, searchByTitle, filteredItems} = useContext(ShoppingCartContext);

  const RenderView = () => {

    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map((itemIterado)=>(
            <Card data={itemIterado} key={itemIterado.id}/>
        ))
      
      )
    }else{
      return(
         <h3 className="productoNoExiste">Loading :( </h3>
      )

    }
  }

  return (
    <>
      <Layout>
        <h1>Exclusive Products</h1>
        <input
          type="text"
          placeholder="Buscar Products"
          className="inputFiltroGeneral"
          onChange={(event)=> setSearchByTitle(event.target.value)}
           />
        <div className="containerGridCard">
        {
          <RenderView/>
        }
        </div>

        <ProductDetail/>
      </Layout>
    </>


  )
}

export default Home
