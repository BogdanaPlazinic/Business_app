import styles from '../style';
import { businessCard } from '../const';
import { plus } from '../assets';



const FeatureCard = ({ icon, title, content, index }) =>(
  <div className={`flex flex-1 xs:flex-row items-center m-3  xs:h-[200px] xxs:flex-col xxs:h-[320px] xxs:pt-3 xxs:pb-3 xs:pt-0 xs:pb-0
  bg-dark dark:bg-shadow-clr rounded-2xl text-dark-font relative
  ${index !== businessCard.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className={`${styles.flexStart} pr-5 pl-5`}>
      <img src={icon} alt='icon' className=' object-contain w-[80px] h-[80px]' />
    </div>

    <div className='max-w-[500px] p-[10px]'>
      <h3 className='text-[22px]'>
        {title}
      </h3>

      <p className='text-[18px] xs:pr-14 xxs:pr-0 '>
        {content}
      </p>
    </div>

    <div className='w-[70px] h-[70px] absolute right-[1px] top-[129px] rounded-tl-2xl rounded-br-2xl bg-shadow-clr dark:bg-dark p-[20px]
    xs:visible xxs:invisible'>
      <img src={plus} alt="plus" className=' object-contain' />
    </div>
  </div>
)

export const BusinessCards = () => {
  return (
    <section className={`${styles.flexCenter} `}  >
      <div className='grid  xl:grid-cols-2 xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 
       xxs:grid-cols-1 xxs:grid-rows-1'>
        {businessCard.map((card, index) =>(
          <FeatureCard key={card.id} {...card} index={index} />
        ))}
      </div>
    </section>
  )
}


export default BusinessCards

/**
 * This is a business card component.
 * The grid is used for layout.
 * Map method is used for content logic.
 * Javascript object values are located in /src/const/index.js
 */