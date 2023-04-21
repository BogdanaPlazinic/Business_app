import { statistic } from '../const'
import styles from '../style'

export const Statistic = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap pb-20`}>
      {statistic.map((stat) => (
        <div key={stat.id} className={`flex flex-1 justify-center items-center flex-col m-3 min-w-[300px]
         bg-dark dark:bg-shadow-clr rounded-full h-[160px] text-dark-font`}>
          <h3 className={`${styles.heading3} ${styles.flexCenter} flex-wrap pr-5 pl-5`}>
            {stat.value}
          </h3>
          <p className={`${styles.paragraph} ${styles.flexCenter} sm:pr-5 sm:pl-5`}>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
)



export default Statistic

/**
 * This is statistic component that is created using the map method.
 * Js objects contain 'id' for the map key, 'title' value which contains 
 * the text value, and 'value' for numbers.
 * These javascript object values are located in /src/const/index.js
 */