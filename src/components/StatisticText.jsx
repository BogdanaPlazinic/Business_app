import React from 'react'
import styles from '../style'

export const StatisticText = () => {
  return (
    <section className={`${styles.flexCenter} flex-col pt-16`}>
        <div className={`${styles.padding} z-10`}>
        <p className={`${styles.paragraph} text-font-light dark:text-dark-font text-center`}>Digital Marketing Agency & Software Development</p>
        <h3 className={`${styles.heading3} text-font-light dark:text-dark-font text-center`}>Company Website Design Full Services.</h3>
      </div>
    </section>
  )
}


export default StatisticText