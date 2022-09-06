import * as React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => {
  const { t } = useTranslation("404")
  return (
    <Layout>
      <h1>{t("notFound")}</h1>
    </Layout>
  )
}

export default NotFound

export function Head() {
  return <Seo title="404" />
}
