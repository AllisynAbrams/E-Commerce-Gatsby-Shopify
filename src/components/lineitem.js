import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StoreContext, useAddItemToCart } from "../context/StoreContext"
import Container from "./container"

const LineItem = ( props ) => {
    // console.log('this is props in LineItem - ', props)
    const { item } = props
    
    const {removeLineItem, store: { client, checkout } } = useContext(StoreContext)

    console.log("this is item in LineItem - ", item)
    console.log(
      "this is item.variant.selectedOptions - ",
      item.variant.selectedOptions[0]
    )

    const variantImage = item.variant.image ? (
      <img
        src={item.variant.image.src}
        alt={`${item.title} product shot`}
        height="60px"
      />
    ) : null

    const selectedOptions =
      item.variant.selectedOptions
        ? item.variant.selectedOptions.map(
            option => `${option.name}: ${option.value} `
          )
        : null


  return (
    <div>
      {variantImage}
      {selectedOptions}
      <p>Quantity: {item.quantity}</p>
    </div>
  )
}

export default LineItem
