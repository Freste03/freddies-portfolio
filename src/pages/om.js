import React from 'react'
import Layout from '../components/layout'
import About from '../components/about'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Om = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson(
        filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
      ) {
        nodes {
          name
          shortBio {
            raw
          }
          image {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
          }
          personPicture {
            gatsbyImage(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 500
              height: 500
            )
          }
        }
      }
    }
  `)

  const personPicture =
    data.allContentfulPerson.nodes[0].personPicture.gatsbyImage

  return (
    <Layout>
      <Seo title="Om" />
      <About image={personPicture} />
    </Layout>
  )
}

export default Om
