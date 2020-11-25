// import React from "react"
// import { Link, graphql } from "gatsby"
// import { node } from "prop-types"
// import { css } from "@emotion/core"
// import Layout from "../components/layout"

// const AllProducts = ({ data }) => {
//   const product = data.allShopifyProduct
//   console.log("this is product: ", product)
//   console.log("this is img", product.nodes[0].images[0].originalSrc)

//   let productMap = product.nodes.map((product, i) => (
//     <div key={product.id} className="col-md-4">
//       <Link to={`/product/${product.handle}/`}>
//         <div className="card card-product-grid">
//           <div className="img-wrap">
//             <img src={product.images[0].originalSrc} alt={product.title} />
//           </div>
//           <h3>{product.title}</h3>
//           <div className="price-wrap mt-2">
//             <span className="price">
//               ${product.priceRange.maxVariantPrice.amount}
//             </span>
//           </div>
//           {product.variants.length > 1
//             ? product.variants.map(variant => (
//                 <div key={variant.title}>
//                   <p>{variant.title}</p>
//                 </div>
//               ))
//             : null}
//         </div>
//       </Link>
//     </div>
//   ))

//   return <Layout>{productMap}</Layout>
// }

// export const query = graphql`
//   query {
//     allShopifyProduct(filter: { availableForSale: { eq: true } }) {
//       nodes {
//         title
//         shopifyId
//         tags
//         id
//         handle
//         productType
//         images {
//           originalSrc
//         }
//         priceRange {
//           maxVariantPrice {
//             amount
//           }
//         }
//         productType
//         variants {
//           title
//           image {
//             localFile {
//               childImageSharp {
//                 original {
//                   width
//                   height
//                   src
//                 }
//               }
//             }
//           }
//           title
//           priceV2 {
//             amount
//             currencyCode
//           }
//           sku
//           product {
//             productType
//           }
//         }
//       }
//     }
//   }
// `

// export default AllProducts

// ref:
// https://dev.to/idiglove/display-shopify-collections-in-your-gatsby-ecommerce-site-2459

// const Product = ({ product }) => {
//     return (
//         <div>
//             <h2>{product.title}</h2>
//         </div>
//     )
// };

// export default ({ data }) => {
// return (
// <>
// <h1>test homepage</h1>
// {data.allShopifyProduct.nodes.map(({ product }) => (
//     <Product key={product.id} product={product} />
// ))}
// <pre>{JSON.stringify(data, null, 2)}</pre>
// </>
// )
// }
