import styles from "../style";
import { PortfolioShape } from "../assets";

export const PortfolioText = () => {
  return (
    <section id="portfolio" className={`${styles.flexCenter} flex-col`}>
      <div className="relative right-[40%]">
        <img src={ PortfolioShape } alt="shape-design" />
      </div>

        <div className={`${styles.padding} z-10`}>
        <p className={`${styles.paragraph} text-font-light dark:text-dark-font text-center`}>
          Awesome Portfolio
          </p>
        <h3 className={`${styles.heading3} text-font-light dark:text-dark-font text-center`}>
        We Have A Great Portfolio To Check
          </h3>
      </div>
    </section>
  )
}


export default PortfolioText