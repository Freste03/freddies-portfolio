import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNavigationLinks {
        edges {
          node {
            id
            linkText
            slug
          }
        }
      }
    }
  `)

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.navigationItem}>Hem</span>
      </Link>
      <ul className={styles.navigation}>
        {data.allContentfulNavigationLinks.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={styles.navigationItem}>
              <Link to={'/' + edge.node.slug + '/'} activeClassName="active">
                {edge.node.linkText}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
