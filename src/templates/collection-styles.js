import React from "react"
import styled from "styled-components"

// max widths for media queries
export const breakpoints = {
  s: 425,
  m: 768,
  l: 992,
  xl: 1200,
}

export const CollectionTitle = styled.h2`
text-align: center;
font-size: 32px;
margin: -10px auto 25px;
`

export const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px 30px;
  padding-right: 12px;
  padding-left: 12px;

  @media (min-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(3, 1fr);
    padding-right:
  }
`

export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  color: black;
`

export const ProductTitle = styled.h3`
font-size: 14px;
font-weight: 500;
padding-left: 4px;
margin-bottom: 0;
`

export const Price = styled.p`
  font-size: 14px;
  padding-left: 4px;
  display: block;
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
