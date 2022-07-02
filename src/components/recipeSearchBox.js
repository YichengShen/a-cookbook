import React from "react"
import "./recipeSearchBox.css"

const RecipeSearchBox = ({ inputChangeHandler, postCount }) => {
  return (
    <div className="post-search-wrapper">
      <span>
        <input
          type="text"
          aria-label="Search"
          placeholder="输入美食的名称或标签..."
          onChange={inputChangeHandler}
        />
      </span>
      <span className="post-count-wrapper">
        <p className="post-count">{postCount}&nbsp;种美食</p>
      </span>
    </div>
  )
}

export default RecipeSearchBox
