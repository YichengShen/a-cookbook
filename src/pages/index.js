import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipeSearchBox from "../components/recipeSearchBox"
import RadarChart from "../components/radarChart"
import Tags from "../components/tags"

const RecipeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const allPosts = data.allMarkdownRemark.nodes

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
    postCount: data.allMarkdownRemark.nodes.length,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = data.allMarkdownRemark.nodes || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.frontmatter
      return title.includes(query) || (tags && tags.join("").includes(query))
    })
    const postCount = filteredData.length

    setState({
      filteredData,
      query,
      postCount,
    })
  }

  const { filteredData, query, postCount } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="目录" />
        <RecipeSearchBox
          inputChangeHandler={handleInputChange}
          postCount={postCount}
        />
        <p style={{ marginTop: "50px" }}>暂时没找到哦，试试别的关键词吧！</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="目录" />

      <RecipeSearchBox
        inputChangeHandler={handleInputChange}
        postCount={postCount}
      />

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "20px",
                  }}
                >
                  {/* The left part (title, tags, description) */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <header style={{ marginBottom: "0px" }}>
                      <h2 style={{ marginBottom: "0px" }}>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                    </header>
                    <section>
                      <div style={{ marginBottom: "0.5rem" }}>
                        <Tags allTags={post.frontmatter.tags} />
                      </div>
                      <div>
                        {post.frontmatter.description && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description,
                            }}
                            itemProp="description"
                          />
                        )}
                      </div>
                    </section>
                  </div>
                  {/* The right part (radar chart) */}
                  <div style={{ width: "188px" }}>
                    <RadarChart
                      protein={post.frontmatter.protein}
                      carb={post.frontmatter.carb}
                      fat={post.frontmatter.fat}
                      sugar={post.frontmatter.sugar}
                      fibre={post.frontmatter.fibre}
                    />
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default RecipeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          protein
          carb
          fat
          sugar
          fibre
        }
      }
    }
  }
`
