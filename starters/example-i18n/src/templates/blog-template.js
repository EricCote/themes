import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ data, pageContext, children }) => {
  return (
    <Layout>
      <h1>Data</h1>
      <div>
        {data.mdx ? children : <div>This page hasn't been translated yet</div>}
      </div>
      <h1>Context</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default BlogTemplate

export function Head({ data }) {
  return <Seo title={data.mdx.frontmatter.title} />
}

export const query = graphql`
  query ($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
