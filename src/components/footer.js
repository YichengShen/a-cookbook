import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <footer style={{ marginTop: "2vh" }}>
      <div>
        <a href="https://www.yichengshen.com/" target="_blank" rel="noreferrer">
          个人网页
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/YichengShen"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()} {author.name}.
      </div>
    </footer>
  )
}

export default Footer
