import React, { useState, useEffect, useContext } from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Button, ButtonGroup } from "reactstrap"
import { graphql } from "gatsby"
import { StoreContext, useAddItemToCart } from "../context/StoreContext"
import Container from "../components/container"

const ProductTemplate = ({ data }) => {
  const product = data.shopifyProduct
  // console.log("this is product/data - ", product)

  const variants = data.shopifyProduct.variants
  console.log("variants - ", variants)

  // const sizes = product.options.find(option => option.name === "Size").values
  // console.log("this is sizes", sizes)

  const { store, setStore } = useContext(StoreContext)
  const [variant, setVariant] = useState(variants[0])
  const [size, setSize] = useState("S")
  const [selectedQty, setSelectedQty] = useState(1)
  // const addItemToCart = useAddItemToCart()

  const [cart, setCart] = useState([
    {
      variantId: "",
      quantity: ""
    },
  ])

  //  const newVariant = product.variants.find(variant => {
  //     return variant.selectedOptions[0].value === size
  //   })

  //   console.log("this is newVariant.shopifyId - ", newVariant.shopifyId)

  // if (variant !== newVariant.shopifyId) {
  //   setVariant(newVariant.shopifyId)
  // }

  // useEffect(() => {
  //     const newVariant = product.variants.find(variant => {
  //       return variant.selectedOptions[0].value === size
  //     })

  //     // console.log("this is newVariant.shopifyId - ", newVariant.shopifyId)

  //     if (variant.shopifyId !== newVariant.shopifyId) {
  //       setVariant(newVariant.shopifyId)
  //     }

  // }, [size, variant])

  const handleQtyChange = e => {
    // setSelectedQty({ ...selectedQty, [e.target.name]: e.target.value })
    setSelectedQty(e.target.value)
  }

  console.log("selectedQty - ", selectedQty)
  console.log("this is size - ", size)
  console.log("this is variant - ", variant)

  const addToCart = (variantId, quantity) => {
    const cartArray = [...cart]
    // const variantIndex = cartArray.indexOf(variant);
    // if (variantIndex < 0) {
    cartArray.push(`variant: ${variantId}`)
    console.log(`adding ${variant} to cart`)
    setCart(cartArray)
    console.log("this is cart", cart)
    // }
  }

  // /*--------- ADD TO CART FUNCTION ---------*/
  // const addToCart = async (variantId, quantity) => {
  //   if (variantId === "" || !quantity) {
  //     console.log("missing size and/or quantity - both are required")
  //     return
  //   }
  //   setStore(prevState => {
  //     return { ...prevState, isAdding: true }
  //   })

  //   const { client, checkout } = store

  //   // checkoutId is a reference to what session this user is on
  //   const checkoutId = checkout.id

  //   // lineItems are an array of the items a user adds to the cart
  //   const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

  //   const newCheckout = await client.checkout.addLineItems(
  //     checkoutId,
  //     lineItemsToAdd
  //   )

  //   // return client.checkout
  //   //   .addLineItems(checkoutId, lineItemsToAdd)
  //   //   .then(checkout => {
  //   //     setStore(prevState => {
  //   //       return { ...prevState, checkout, isAdding: false }
  //   //     })
  //   //   })

  //   setStore(prevState => {
  //     return { ...prevState, checkout: newCheckout, isAdding: false }
  //   })
  // }

  // /*--------- ADD TO CART FUNCTION ---------*/
  const handleAddToCart = e => {
    e.preventDefault()
    addToCart(size, selectedQty)
  }

  // console.log("this is store - ", store)

  return (
    <Layout>
      <div className="card card-product-grid">
        {/* <div className="img-wrap"> */}
        <Container>
          {product.images.map(image => (
            <img
              src={image.originalSrc}
              key={image.id}
              alt={product.title}
              style={{
                height: `300px`,
              }}
            />
          ))}
        </Container>
        {/* </div> */}
      </div>
      <h3>{product.title}</h3>
      <div>{product.description}</div>

      {/*--------- TESING ---------*/}
      <p css={{ color: `red`, fontSize: `14px` }}>TESTING STATE:</p>
      <p css={{ color: `red`, fontSize: `14px` }}>selected size: {size}</p>
      <p css={{ color: `red`, fontSize: `14px` }}>
        selected qty: {selectedQty}
      </p>
      {/*--------- TESING ---------*/}

      <form id="product-form" className="product-add">
        <div className="sizes">
          <p>Selected Size: {size}</p>
          <ButtonGroup>
            {product.variants.map((variant, i) => (
              <div key={variant.id}>
                <Button
                  key={variant.id}
                  value={variant.shopifyId}
                  name="size"
                  onClick={() => setSize(`${variant.shopifyId}`)}
                  active={size === `${variant.selectedOptions[0].value}`}
                  css={{ margin: `5px` }}
                >
                  {variant.selectedOptions[0].value}
                </Button>
              </div>
            ))}
          </ButtonGroup>
        </div>

        <label htmlFor="qty">Quantity</label>
        <select name="qty" id="qty" onChange={handleQtyChange}>
          <optgroup label="Qty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </optgroup>
        </select>

        <button type="submit" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>

      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </Layout>
  )
}

export default ProductTemplate

// https://www.gatsbyjs.cn/docs/building-an-ecommerce-site-with-shopify/#generating-a-page-for-each-product

export const query = graphql`
  query productTemplate($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      description
      descriptionHtml
      options {
        name
        values
      }
      images {
        id
        originalSrc
        localFile {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      variants {
        shopifyId
        id
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
