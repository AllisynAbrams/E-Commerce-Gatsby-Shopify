import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StoreContext, useAddItemToCart } from "../context/StoreContext"
import Container from "../components/container"
import Cart from "../components/cart"


const CartPage = () => {
 return (
   <Container>
     <h1>Shopping Cart Page</h1>
     <Cart />
   </Container>
 ) 
}

export default CartPage
