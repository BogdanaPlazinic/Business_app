import styles from "../style";
import { Logo } from "../assets";
import { footerLink, socialMedia } from "../const";

export const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=" flex-1 flex flex-col justify-start mr-10">
          <img src={Logo} alt="logo" className="w-[50px] h-[50px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[400px] text-dark-font`}>
          Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat 
          tincidunt. Nam sem lacus, ornare non ante sed.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLink.map((links) => (
            <div key={links.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className={`text-[22px] font-semibold text-dark-font`}>
                {links.title}
              </h4>

              <ul className="list-none mt-4">
                {links.links.map((link, index) => (

                  <li key={link.name}
                  className={`text-dark-font cursor-pointer
                  ${index !== links.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>

                ))}
              </ul>
            </div>

          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]
      border-t-[#DCC7FF]">

        <div className="flex flex-row mt-0 xxs:mt-3 ">
          {socialMedia.map((social, index) => (
            <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[40px] h-[40px] object-contain cursor-pointer ${index !== socialMedia.length
            - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>

        <p className="text-[20px] font-normal text-center text-dark-font mt-0 xxs:mt-3 ">
        © 2023 G Company — All Rights Reserved.
        </p>
      </div>
    </section>
)



export default Footer