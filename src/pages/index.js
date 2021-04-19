import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import PlusIcon from "../icons/plus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>do what?</h1>
    <h2>No register. No login. Not a bunch of tutorials.</h2>
    <h2>Just write your daily tasks and keep track of them.</h2>
    <div>
      <input type="text" id="fname" name="fname" placeholder="What do I need to do today?" />
      <button type="button">
        Add task
        <img src={PlusIcon} aria-hidden/>
      </button>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
