import * as React from "react"
import { graphql } from "gatsby"
// import { useTranslation } from "react-i18next"
import { Link,useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LocalizedLink=Link;
//const LocalesList=['en', 'de'];

const Index = ({ data }) => {
  const {t} = useI18next();
  return (
    <Layout>
      <Seo title={t("home")} />
      <h1>{t("helloWorld")}</h1>
      <p>{t("indexNote")}</p>
      <p>
        <LocalizedLink to="/page-2/">{t("secondPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/">{t("thirdPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-2/" language="de">
          {t("secondPageGermanLink")}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="en">
          {t("indexPageEnglishLink")}
        </LocalizedLink>
      </p>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <h2>{t("overviewLang")}</h2>
      {/* <LocalesList /> */}
    </Layout>
  )
}

export default Index

//query($locale: String!) {
// """   
// childMdx: { fields: { locale: { eq: $locale } } }
// """



export const query = graphql`
query($language: String!) {
  locales: allLocale(
    filter: { ns: { in: ["translation"] }, language: { eq: $language } }
  ) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allFile(
    filter: {
      sourceInstanceName: { eq: "blog" }
    }
  ) {
    nodes {
      childMdx {
        frontmatter {
          slug
          title
        }
      }
    }
  }
}
  
`