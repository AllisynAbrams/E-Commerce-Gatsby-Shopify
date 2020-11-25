/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products 
  const product = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            title
            description
            productType
            handle
            tags
            shopifyId
            availableForSale
            images {
              originalSrc
              id
              localFile {
                childImageSharp {
                  fluid(maxHeight: 600) {
                    tracedSVG
                  }
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants {
              title
              price
              sku
              availableForSale
              id
              product {
                tags
                images {
                  originalSrc
                }
              }
              image {
                originalSrc
              }
              shopifyId
            }
          }
        }
      }
    }
  `)

  //  Query for all collections
  const collections = await graphql(`
    {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            handle
            products {
              title
              images {
                originalSrc
              }
              shopifyId
              handle
              description
              availableForSale
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `)

  // Iterate over all products and create a new page using the appropriate template file/path
  // The product "handle" is generated automatically by Shopify and part of the above queries
  product.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })

  collections.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.handle}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        collection: node,
        productCount: node.products.length,
      },
    })
  })
}

// refs:
// https://www.gatsbyjs.cn/docs/building-an-ecommerce-site-with-shopify/#generating-a-page-for-each-product
//  https://dev.to/idiglove/display-shopify-collections-in-your-gatsby-ecommerce-site-2459
// https://owlypixel.com/build-a-store-with-shopify-and-gatsby/#create-account
