import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { StoreContext } from "../context/StoreContext"

const Header = ({ siteTitle }) => {
  const {store: { checkout }} = useContext(StoreContext)
  const lineItemCount = 
    checkout.lineItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
    console.log('this is lineItemCount - ', lineItemCount)
    

  return (
    <header
      style={{
        background: `lightgrey`,
        marginBottom: `1.45rem`,
        lineHeight: `0.3`,
      }}
    >
      <div
        className="header-container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `.65rem 1.0875rem`,
        }}
      >
        <h1 className="sitetitle" style={{ margin: 0 }}>
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

        {/* <i class="fas fa-heart" style={{ fontSize: `30px`, color: `black` }}></i> */}

        <div className="dashboard-container">
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            className="fa-icon"
          ></FontAwesomeIcon>

          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="fa-icon"
          ></FontAwesomeIcon>

          <Link to="/cart/">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              color="black"
              className="fa-icon"
            ></FontAwesomeIcon>
            <span className="line-item-count">{lineItemCount}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
