import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Contact from '../components/contact'
import Hero from '../components/hero'
import get from 'lodash/get'
import { graphql } from 'gatsby'

class Kontakt extends React.Component {
  render() {
    const data = get(this, 'props.data.allContentfulContactInformation.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Kontakt" />
        <Hero title="Kontakt" />
        <Contact data={data} />
      </Layout>
    )
  }
}
export default Kontakt

export const pageQuery = graphql`
  query {
    allContentfulContactInformation {
      nodes {
        telephoneNumber
        email
        github
        linkedin
      }
    }
  }
`
