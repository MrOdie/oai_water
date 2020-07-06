/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';

import "../assets/font/typography.css"
import "../assets/scss/style.scss"

import Header from "./partials/header"
import Footer from "./partials/footer"

const Layout = ({ children, page }) => {

  return (
    <>
      <ParallaxProvider>
        <div className={page} id="body">
          <Header />
          <main >{children}</main>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  )
}

export default Layout
