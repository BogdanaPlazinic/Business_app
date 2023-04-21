import styles from "../style";
import { HeroMainElement, HeroDesign, HeroDesign2, HeroDesign3 } from "../assets";
import { BsFillPlayFill } from "react-icons/bs"



export const Hero = () => (
      <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[1]`}>
          <div className="flex flex-col justify-between items-start w-full">
            <div>
              <img src={HeroDesign} alt="hero-design" className=" object-contain w-full"/>
            </div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px]
             text-font-light dark:text-dark-font ss:leading-[100.8px] leading-[65px]">
              We help to <br className="sm:block hidden" />{" "}
              <span className="text-[72px]">Solve Clients</span>{" "}<br className="sm:block hidden"/>Problems
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5  text-font-light dark:text-dark-font`}>
              Our Activate suite of business apps gives your Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className="pt-10 flex">
                <div className={`${styles.flexCenter} w-[200px] h-[60px] mr-2  bg-shadow-clr dark:bg-light 
                cursor-pointer rounded-full`}>
                  <p className={`${styles.paragraph} text-light dark:text-dark`}>Our Portfolio</p>
                </div>
                <div className={`${styles.flexCenter} w-[60px] h-[60px] bg-shadow-clr rounded-full`}>
                  <BsFillPlayFill className="text-light text-[40px] cursor-pointer"/>
                </div>
              </div>
          </div>
          <img src={HeroDesign2} alt="hero-design" className="relative left-[40%]" />
          </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 xxs:my-0 flex-col relative`}>
        <img src={HeroMainElement} alt="mobile-design" className='w-[100%] h-[100%] relative z-[5]' />
        <img src={HeroDesign3} alt="hero-design" className="relative bottom-[80%] right-[60%]" />

        <div className="absolute top-[-80%] left-[-2%] z-[0] w-[1350px] h-[1350px] rounded-[100%] hero-gradient2" />
        <div className="absolute top-[-70%] left-[-20%] z-[0] w-[1250px] h-[1250px] rounded-[100%] hero-gradient" />
      </div>
      </section>
)



export default Hero