import styles from "./style";
import { 
Header, 
Hero,
BrandLogo,
AboutUs,
Statistic,
BusinessCards,
PortfolioText,
PortfolioCards,
BlogCards,
Footer,
BusinessCardText,
StatisticText,
FooterContact,
BlogCardsText,
} from "./components";


import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs";


export const App = () => {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }else{
        setTheme('light');
      }
    }, []);

    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark');
      }else{
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);

    const handleThemeSwitcher = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }

  return (
    <>
    <button type="button" onClick={handleThemeSwitcher}
    className="fixed w-10 h-10 z-50 right-2 top-28 bg-indigo-500 txt-lg p-1 rounded-full bg-dark dark:bg-light
     text-white flex justify-center items-center">
      {theme === 'dark' ? <BsSun size="20px" color="#51495F" /> : <BsMoonFill size="20px" color="#fff" />}
    </button>

    <div className="bg-light dark:bg-dark w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className='w-[90%]'>
          <Header />
        </div>
      </div>

    <div className={` bg-light dark:bg-dark ${styles.flexStart}`}>
      <div className=" w-[90%]">
        <Hero />
      </div>
    </div>

    <div className={`bg-light dark:bg-dark ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BrandLogo />
        <AboutUs />
        <StatisticText />
        <Statistic />
        </div>
      </div>

      <div className={`bg-light dark:bg-dark2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <BusinessCardText />
        <BusinessCards />
        <PortfolioText />
        <PortfolioCards />
        <BlogCardsText />
        <BlogCards />
        </div>
      </div>

      <div className=" bg-dark">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className='w-[90%]'>
            <FooterContact />
            <Footer />
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}



export default App

/**
 * This is the main component of the application.
 * A dark mode effect was created using useState and useEffect.
 * In the tailwind.config.js file, class recognition for dark mode is configured.
 * /**@type {import('tailwindcss').Config}
      module.exports = {
        darkMode: 'class',
 */
