import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { useTranslation } from "react-i18next"

const Seo = ({ description, title, /* i18ntitle, */ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  // const { t } = useTranslation()
  // title = i18ntitle ? t(i18ntitle) : title

  return (
    <>
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
