import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Tags = ({ allTags }) => {
  const theme = useContext(ThemeContext)

  let colors = ["#7e532999", "#cda98999", "#c6be8099", "#6b8c2199", "#5c814b99"]
  if (theme.name === "dark") {
    colors = colors.reverse()
  }
  const colorsLength = colors.length

  return (
    <div>
      {allTags.map((tag, index) => {
        const colorIndex = index % colorsLength
        return (
          <span key={tag}>
            <Tag name={tag} color={colors[colorIndex]} />
          </span>
        )
      })}
    </div>
  )
}

const Tag = ({ name, color }) => {
  return (
    <span
      style={{
        margin: "0.25rem",
        padding: "0 0.75rem",
        borderRadius: "5px",
        backgroundColor: `${color}`,
        whiteSpace: "pre",
      }}
    >
      {name}
    </span>
  )
}

export default Tags
