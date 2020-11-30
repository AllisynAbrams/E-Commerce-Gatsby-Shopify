import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Container from "../components/container"
import index from "../pages/index.css"

// pageContext comes from the query to createPages in gatsby-node.js
const CollectionTemplate = ({ pageContext }) => {
  const { collection, productCount } = pageContext
  console.log('this is collection', collection)
  return (
    <Layout>
      <main>
        {collection.products.map(product => (
          <div
            key={product.shopifyId}
            className="col-md-4"
          >
            <Link to={`/product/${product.handle}/`}>
              <div className="card card-product-grid">
                <div className="img-wrap">
                  <img src={product.images[0].originalSrc} alt={product.handle} />
                </div>
  
                <h3>{product.title}</h3>
  
                <div className="price-wrap mt-2">
                  <span className="price">
                    ${product.priceRange.minVariantPrice.amount}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default CollectionTemplate

// // ref:
// // https://dev.to/idiglove/display-shopify-collections-in-your-gatsby-ecommerce-site-2459