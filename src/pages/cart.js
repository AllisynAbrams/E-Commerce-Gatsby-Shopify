import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StoreContext, useAddItemToCart } from "../context/StoreContext"
import Container from "../components/container"
import Cart from "../components/cart"
import Layout from "../components/layout"


const CartPage = () => {
 return (
   <Layout>
     <h1>Shopping Cart Page</h1>
     <Cart />
   </Layout>
 ) 
}

export default CartPage
