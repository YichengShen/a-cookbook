import * as React from "react"
import { ThemeContext } from "./ThemeContext"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  & a {
    color: ${props => (props.theme.name === "dark" ? "#D8E9A8" : "inherit")};
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <ThemeContext.Consumer>
        {theme => (
          <ThemedLayout theme={theme}>
            <div className="global-wrapper" data-is-root-path={isRootPath}>
              <Header location={location} title={title} theme={theme} />

              <main>{children}</main>

              <Footer />
            </div>
          </ThemedLayout>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Layout
