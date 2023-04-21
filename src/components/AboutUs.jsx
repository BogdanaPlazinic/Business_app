import { AboutUsComputer } from '../assets';
import styles from '../style';

export const AboutUs = () => (
    <section id='aboutUs' className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}>
      <div className='z-10'>
        <img src={AboutUsComputer} alt="computer" className='object-contain w-full' />
      </div>

      <div className='w-[60px] h-[2px] bg-font-light dark:bg-dark-font mr-11 mt-7'></div>

      <div className='max-w-[470px]'>
        <h3 className={`${styles.heading3}  text-font-light dark:text-dark-font`}>
        About Us
        </h3>

        <p className={`${styles.paragraph} font-semibold  text-font-light dark:text-dark-font mb-5`}>
        Simple! Our mission is to become the best design agency in the world!
        </p>

        <p className={`${styles.paragraph}  text-font-light dark:text-dark-font mb-5`}>
        What’s an outsourced marketing un-agency, you say? Well, 
        we’re the antithesis to your run-of-the-mill agency that oversells and underdelivers.
        </p>

        <p className={`${styles.paragraph}  text-font-light dark:text-dark-font mb-5`}>
        Lately, it’s been about closing the biggest contracts. But what about 
        making the biggest impact for clients? Our goal is to get RESULTS that will 
        make clients HAPPY without overpricing.
        </p>

        <p className={`${styles.paragraph}  text-font-light dark:text-dark-font mb-5`}>
        Feeling skeptical? Work with us, and see the difference between getting 
        marketing partners invested in your growth, versus salesmen invested in milking you dry!
        </p>

        <div className={`${styles.flexCenter} w-[200px] h-[60px] mr-2 bg-shadow-clr dark:bg-light cursor-pointer rounded-full`}>
          <p className={`${styles.paragraph} text-light dark:text-dark`}>LET'S TALK!</p>
        </div>
      </div>
    </section>
)



export default AboutUs