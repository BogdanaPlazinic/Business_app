import styles from "../style"
import { BlogShape } from "../assets"

export const BlogCardsText = () => {
  return (
    <section id='blog' className={`${styles.flexCenter} flex-col mt-20`}>
        <div className={`${styles.padding} z-10`}>
        <p className={`${styles.paragraph} text-font-light dark:text-dark-font text-center`}>
        Our Blogs</p>
        <h3 className={`${styles.heading3} text-font-light dark:text-dark-font text-center`}>
        Our Blog & Article</h3>
      </div>

      <div className=" relative left-1/2 bottom-32 w-[300px] h-[300px]">
        <img src={BlogShape} alt="ring-design" className=" object-contain" />
      </div>
    </section>
  )
}


export default BlogCardsText