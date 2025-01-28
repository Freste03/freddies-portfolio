import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './about.module.css'

const About = ({ image }) => {
  return (
    <div className={styles.container}>
      <GatsbyImage alt="" image={image} />
      <div className={styles.text}>
        <h1>Om mig</h1>
        <p>
          Hej! Jag heter Freddie Stenqvist och studerar Frontend utveckling på
          IT-Högskolan i Stockholm. Jag har ett stort intresse för
          webbutveckling och design och strävar ständigt efter att utvecklas och
          lära mig mer inom området. Projekten jag har skapat under min
          studietid har varit lärorika för min utveckling, och med denna
          portfolio vill jag visa vad jag hittils skapat.
        </p>
      </div>
    </div>
  )
}

export default About
