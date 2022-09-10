import * as React from "react"
// import { useTranslation } from "react-i18next"
import { graphql } from 'gatsby'
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LocalizedLink=Link;

const Page3 = () => {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo title={t("thirdPage")} />
      <h1>{t("thirdPage")}</h1>
      <p>{t("thirdNote")}</p>
      <p>
        <LocalizedLink to="/page-2/">{t("secondPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">{t("indexPageLink")}</LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3



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
}
`