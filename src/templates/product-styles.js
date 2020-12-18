import React from "react"
import styled from "styled-components"
import { breakpoints } from "./collection-styles"

// max widths for media queries
// export const breakpoints = {
//   s: 425,
//   m: 768,
//   l: 992,
//   xl: 1200,
// }

export const PrimaryProductImage = styled.img`
margin: 5px auto;
max-width: 40% 
`
export const ProductTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0;
`

export const Price = styled.p`
  font-size: 18px;
`

export const Fave = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 3px;
  padding: 0 1.5px;
  z-index: 1;
`
