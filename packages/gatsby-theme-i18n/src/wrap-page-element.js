import * as React from "react"
import { LocaleProvider } from "./context"
import { SEO } from "./components/seo"

const wrapPageElement = ({ element, props }) => (
  <LocaleProvider pageContext={props.pageContext}>{element}</LocaleProvider>
)

export { wrapPageElement }

export function Head({ location, pageContext }) {
  return <SEO location={location} pageContext={pageContext} />
}
