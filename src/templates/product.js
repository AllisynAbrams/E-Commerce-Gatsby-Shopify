import React, {useState} from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Button, ButtonGroup } from "reactstrap"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  // const {product.variants[i].title} = 

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedQty, setSelectedQty] = useState(null)


  const handleAddToBag = (e) => {
    e.preventDefault()
  }
  const handleQtyChange = e => {
    // setSelectedQty({ ...selectedQty, [e.target.name]: e.target.value })
    setSelectedQty(e.target.value )
  }
  console.log("selectedQty", selectedQty)

  return (
    <Layout>
      <div className="card card-product-grid">
        <div className="img-wrap">
          <img
            src={product.images[0].originalSrc}
            alt={product.title}
            style={{
              height: `300px`,
            }}
          />
        </div>
      </div>
      <h3>{product.title}</h3>
      <div>{product.description}</div>

      {/*--------- TESING ---------*/}
      <p css={{ color: `red`, fontSize: `14px` }}>TESTING STATE:</p>
      <p css={{ color: `red`, fontSize: `14px` }}>
        selected size: {selectedSize}
      </p>
      <p css={{ color: `red`, fontSize: `14px` }}>
        selected qty: {selectedQty}
      </p>
      {/*--------- TESING ---------*/}

      <form id="product-form" className="product-add">
        <div className="sizes">
          <p>Selected Size: {selectedSize}</p>
          <ButtonGroup>
            {product.variants.map(variant => (
              <div key={variant.id}>
                <Button
                  key={variant.id}
                  name="size"
                  onClick={() => setSelectedSize(`${variant.title}`)}
                  active={selectedSize === `${variant.title}`}
                  css={{ margin: `5px` }}
                >
                  {variant.title}
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

        <button type="submit">Add to Cart</button>
      </form>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </Layout>
  )
}


export default ProductTemplate

// https://www.gatsbyjs.cn/docs/building-an-ecommerce-site-with-shopify/#generating-a-page-for-each-product
