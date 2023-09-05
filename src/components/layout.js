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
  --color-primary: ${props =>
    props.theme.name === "dark" ? "#D8E9A8" : "#A27B5C"};
  --color-heading: ${props =>
    props.theme.name === "dark" ? "#cda989" : "#c26513"};
  --color-link: ${props =>
    props.theme.name === "dark" ? "#D8E9A8" : "#c26513"};
  --color-text-prompt: ${props =>
    props.theme.name === "dark" ? "#d1dce5" : "#6b6d6e"};
  --color-text-input: ${props =>
    props.theme.name === "dark" ? "white" : "black"};
  --color-searchbox-background: ${props =>
    props.theme.name === "dark" ? "#6b8c2199" : "#cda98999"};
  --color-searchbox-border: ${props =>
    props.theme.name === "dark" ? "#5c814b99" : "#7e532999"};
  --color-searchbox-background-focus: ${props =>
    props.theme.name === "dark" ? "#6b8c2166" : "#cda98966"};
  --color-searchbox-outline-focus: ${props =>
    props.theme.name === "dark" ? "#5c814b" : "#7e5329"};

  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;
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
