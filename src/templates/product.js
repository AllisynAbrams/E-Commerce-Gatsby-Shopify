import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

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
      <h1>{product.title}</h1>
      <div>{product.description}</div>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </Layout>
  )
}


export default ProductTemplate

// https://www.gatsbyjs.cn/docs/building-an-ecommerce-site-with-shopify/#generating-a-page-for-each-product
