import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightgrey`,
      marginBottom: `1.45rem`,
      lineHeight: `0.3`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <i class="fas fa-heart" style={{ fontSize: `30px`, color: `black` }}></i>
      <i class="fas fa-user" style={{ fontSize: `30px`, color: `black` }}></i>

      <Link to="/cart/">
        <i
          class="fas fa-shopping-cart"
          style={{ fontSize: `30px`, color: `black` }}
        ></i>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
