import * as React from "react"
import { LocalizedRouter, useLocalization } from "gatsby-theme-i18n"
import Name from "../components/name"
import Seo from "../components/seo"

const App = () => {
  const { locale } = useLocalization()

  return (
    <LocalizedRouter basePath="/app">
      <Name path="/:name" locale={locale} />
    </LocalizedRouter>
  )
}

export default App

export function Head({ params }) {
  console.log(params)
  return <Seo title={params["*"]} />
}
