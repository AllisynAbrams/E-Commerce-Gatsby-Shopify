import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HI SHOPPERS</h1>
    <h3>Welcome to this awesome e-com site!</h3>

    <h3>The homepage is still a work in progress, but go ahead and test out the
      navigation links to see some products and details.</h3>

    <p>
      Disclaimer: Please don't actually attempt to order anything because these
      product images are just borrowed from the Abercrombie website for the
      purpose of a class project (Abercrombie is cool again and they always have
      promotions..I think I personally drove 25% of their non-logo sales from
      2016-present, so Abercrombie please hire me as a brand ambassador...or a
      developer, thanks).
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
