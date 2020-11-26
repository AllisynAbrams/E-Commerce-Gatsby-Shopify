import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

const Navigation = ({ data }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar color="faded" light>
      {/* <NavbarBrand href="/" className="mr-auto">
        e-commerce project
      </NavbarBrand> */}

      {/* {data.allShopifyCollection.edges.map((collection, i) => (
          <Link to={`/collection/${collection.node.handle}`} className="nav-link" key={i}>
            {collection.node.title}
          </Link>
      ))} */}

      <Link to="/shop-all">
        <p className="nav-link-menu">Shop All</p>
      </Link>

      <Link to="/collection/clothing">
        <p className="nav-link-menu">Clothing</p>
      </Link>

      <Link to="/collection/shoes">
        <p className="nav-link-menu">Shoes</p>
      </Link>

      <Link to="/collection/best-of-basics">
        <p className="nav-link-menu">Best of Basics</p>
      </Link>

      <form>
        <input type="text" placeholder="search" name="search"></input>
        <button type="submit">search</button>
      </form>

      {/* MOBILE NAV */}

      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem className="nav-link" onClick={toggleNavbar}>
            <Link to="/shop-all">Shop All</Link>
          </NavItem>

          <NavItem className="nav-link" onClick={toggleNavbar}>
            <Link to="/collection/clothing">Clothing</Link>
          </NavItem>

          <NavItem className="nav-link" onClick={toggleNavbar}>
            <Link to="/collection/shoes">Shoes</Link>
          </NavItem>

          <NavItem className="nav-link" onClick={toggleNavbar}>
            <Link to="/collection/best-of-basics">Best of Basics</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    
  )
}


// export const query = graphql(`
//   query {
//     allShopifyCollection(sort: { fields: [title] }) {
//       edges {
//         node {
//           id
//           title
//           handle
//           products {
//             title
//             images {
//               originalSrc
//             }
//             shopifyId
//             handle
//             description
//             availableForSale
//             priceRange {
//               maxVariantPrice {
//                 amount
//               }
//               minVariantPrice {
//                 amount
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `)

export default Navigation