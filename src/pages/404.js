import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Denna sida finns inte</h1>
      <p>Tryck på knappen för att gå tillbaka</p>
      <a
        href="/"
        style={{
          marginTop: '1rem',
          background: 'lightblue',
          padding: '1rem',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        Gå tillbaka
      </a>
    </div>
  </Layout>
)

export default NotFoundPage
