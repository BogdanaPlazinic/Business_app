import styles from "../style"


export const BusinessCardText = () => {
  return (
    <section id='services' className={`${styles.flexCenter} flex-col mt-20`}>
        <div className={`${styles.padding}`}>
        <p className={`${styles.paragraph} text-font-light dark:text-dark-font text-center`}>
        We Are A Digital Agency</p>
        <h3 className={`${styles.heading3} text-font-light dark:text-dark-font text-center`}>
        Experts Services To Change Business</h3>
      </div>
    </section>
  )
}

export default BusinessCardText