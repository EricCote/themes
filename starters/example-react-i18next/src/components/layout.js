import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
//import { useTranslation } from "react-i18next"
// import { MdxLink, LocalizedLink } from "gatsby-theme-i18n"
import { Link, useI18next} from 'gatsby-plugin-react-i18next'

const MdxLink = Link;
const LocalizedLink =Link

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  const { t } = useI18next()
  return (
    <React.Fragment>
      <header>
        <LocalizedLink to="/">{t("home")}</LocalizedLink>
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  )
}

export default Layout
