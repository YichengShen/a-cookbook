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
          onColor="#ffffff"
          offColor="#050000"
          onHandleColor="#fff3e0"
          offHandleColor="#fff3e0"
          checkedIcon={<img src={moonIcon} alt="moon icon" />}
          uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
          boxShadow="0 0 2px 3px #FFD495"
          activeBoxShadow="0 0 2px 3px #FFD495"
        />
      </div>
    </header>
  )
}

export default Header
