import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"

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
        {/* <FontAwesomeIcon icon={faCoffee} size="1x" /> */}
        <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
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
