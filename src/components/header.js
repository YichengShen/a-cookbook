import * as React from "react"
import { Link } from "gatsby"
import Switch from "react-switch"
import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"

const Header = ({ location, title, theme }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <header className="global-header" style={{ display: "flex" }}>
      <div>{header}</div>
      <div style={{ marginLeft: "auto" }}>
        <Switch
          onChange={() =>
            theme.updateTheme(theme.name === "light" ? "dark" : "light")
          }
          checked={theme.name === "dark"}
          onColor="#222"
          offColor="#333"
          checkedIcon={<img src={moonIcon} alt="moon icon" />}
          uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
          boxShadow="0 0 2px 3px #4E9F3D"
          activeBoxShadow="0 0 2px 3px #bee494"
        />
      </div>
    </header>
  )
}

export default Header
