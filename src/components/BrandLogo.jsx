import { brandLogo } from "../const";
import styles from "../style";

export const BrandLogo = () => (

    <section className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.padding} z-10`}>
        <p className={`${styles.paragraph} text-font-light dark:text-dark-font text-center`}>These Companies Trust Us</p>
        <h3 className={`${styles.heading3} text-font-light dark:text-dark-font text-center`}>With Their Marketing</h3>
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full  z-20 bg-dark rounded-full h-[160px] p-5`}>
        {brandLogo.map((logo) => (
          <div key={logo.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={logo.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>


)



export default BrandLogo

/**
 * This is a brand logo component that is created using the map method.
 * Js objects contain 'id' for the map key, and 'logo' value which
 * contains the logo image.
 * These javascript object values are located in /src/const/index.js
 */