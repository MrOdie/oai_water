/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../assets/font/typography.css"
import "../assets/scss/style.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
    <div id="body">
      <Header/>
      <main >{children}</main>
      <Footer/>
    </div>
    </>
  )
}

export default Layout
