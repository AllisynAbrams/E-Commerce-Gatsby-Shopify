import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import index from "./index.css"


const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

<div className="hp-overlay">
      <p className="hp-image-text">
        the essential closet staples.. <br /> whether you're out and about or
        working from home{" "}
      </p>
      
      <Link to="/collection/best-of-basics">
        <button className="hp-image-link">shop now</button>
      </Link>
</div>

    <img
      src="https://res.cloudinary.com/dv7inaqe9/image/upload/v1606745947/dressysweatshirt-black_fumirv.jpg"
      alt="clothing basics jeans sweater"
      className="hp-banner"
    />

    {/* <h1>HI SHOPPERS</h1> */}

    {/* <h3>Welcome to this awesome e-com site!</h3> */}

    {/* <h3>
      The homepage is still a work in progress, but go ahead and test out the
      navigation links to see some products and details.
    </h3> */}

    <p>
      Disclaimer: Please don't actually attempt to order anything because these
      product images are just borrowed from the Abercrombie and Bloomingdale's
      websites for the purpose of a class project.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
