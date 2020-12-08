/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { StoreContextProvider } from "./src/context/StoreContext"
export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
)
