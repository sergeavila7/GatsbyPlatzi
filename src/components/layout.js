/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { Content, Footer } from "../styles/components"

import Header from "./header"

const Layout = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        Con ❤ por Platzi
        <a href="https://www.platzi.com">Gatsby</a>
      </Footer>
    </Content>
  </>
  //     )}
  //   />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
