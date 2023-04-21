import { FooterElement, FooterElement2, FooterSectionElement } from "../assets";
import styles from "../style";
import { useState } from "react";

export const FooterContact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          setMessage("Successfully subscribed!");
        } else if (!regEx.test(email) && email !== "") {
          setMessage("Email is Not Valid");
        } else {
          setMessage("");
        }
      };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
      };

  return (
    <section id="contactUs" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
         <div className="relative -top-52 -left-[52%] h-0">
            <img src={FooterElement} alt="footer-element-design" className="object-contain" />
        </div>
        <div className="relative top-52 left-1/3 h-0 lg:visible xxs:invisible">
            <img src={FooterElement2} alt="footer-element-design" className="object-contain" />
        </div> 

        <div className={`${styles.flexCenter} flex-col z-10 xl:pt-0 xxs:pt-20`}>
            <img src={FooterSectionElement} alt="letter" />
            <h3 className={`${styles.heading3} text-dark-font text-center`}>
            Like Our Service? Subscribe Us
            </h3>
            <p className={`${styles.paragraph} text-dark-font text-center`}>
            As a app web crawler expert, I help organizations adjust <br className='sm:block hidden'/>
            to the expanding significance of internet promoting.
            </p>

            <div className={`${styles.flexCenter} flex-col mt-10`}>
                <input className="min-w-[300px] sm:min-w-[600px] min-h-[60px] sm:min-h-[58px] bg-shadow-clr text-dark-font
                 placeholder:text-dark-font outline-none border-solid border-[#DCC7FF] border-[1px]
                 rounded-full pl-5"
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={handleOnChange} 
                />
                <button className="bg-light text-dark h-[42px] min-w-[90px] sm:min-w-[100px] rounded-full
                relative xl:-top-[50px] xl:-right-[242px] lg:-top-[50px] lg:-right-[242px] ss:top-[10px] ss:right-[0px] xs:top-[10px] xs:right-[0px]
                xxs:top-[10px] xxs:right-[0px]"
                onClick={emailValidation}>Subscribe</button>
                <p className="text-center flex justify-center items-center text-dark-font ss:mt-[20px] xs:mt-[20px]
                xxs:mt-[20px]">
                    {message}
                </p>
            </div>
        </div>

    </section>
  )
}


export default FooterContact

/**
 * This is Footer Contact component.
 * Using useState hook from React and JS regExp method with the test() method, create a 
 * subscription form that checks true or false email correctness.
 */