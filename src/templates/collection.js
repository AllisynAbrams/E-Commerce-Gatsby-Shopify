import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import {
  CollectionGrid,
  CollectionTitle,
  ProductCard,
  ProductTitle,
  Price, Fave
} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import index from "../pages/index.css"

// pageContext comes from the query to createPages in gatsby-node.js
const CollectionTemplate = ({ pageContext }) => {
  const { collection, productCount } = pageContext
  console.log('this is collection', collection)
  
  

  return (
    <Layout>
      <CollectionTitle>{collection.title}</CollectionTitle>

        <CollectionGrid>
          {collection.products.map(product => {
            // console.log(
            //   "product.priceRange.minVariantPrice.amount",
            //   product.priceRange.minVariantPrice.amount
            // )
  
            const formattedPrice = parseFloat(
              product.priceRange.minVariantPrice.amount
            ).toFixed(2)
  
            return (
              <div key={product.shopifyId} className="collection-container">
                <Link to={`/product/${product.handle}/`}>
                    <ProductCard>
                      <div className="img-wrap">
                        <img
                          src={product.images[0].originalSrc}
                          alt={product.handle}
                          css={{ border: `1px solid rgba(0, 0, 0, 0.2)` }}
                        />
                        <Fave>
                          <FontAwesomeIcon
                            icon={faHeart}
                            size="1x"
                            className="fa-icon"
                          ></FontAwesomeIcon>
                        </Fave>
                      </div>
                      <ProductTitle>{product.title}</ProductTitle>
                      <Price>${formattedPrice}</Price>
                    </ProductCard>
                </Link>
              </div>
            )
          }
          )}
        </CollectionGrid>
      
    </Layout>
  )
}

export default CollectionTemplate

// // ref:
// // https://dev.to/idiglove/display-shopify-collections-in-your-gatsby-ecommerce-site-2459