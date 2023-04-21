import { blog } from "../const"
import { Swiper, SwiperSlide } from "swiper/react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { plus } from '../assets';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from "swiper";


export const BlogCards = () => {
  return (
    <>
    <div className="mt-[-250px] pb-[250px]">
      <Swiper
      effect={ 'coverflow' }
      grabCursor={ true }
      centeredSlides={ true }
      loop={ false }
      slidesPerView={ 'auto' }
      coverflowEffect={ {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        } }
        
         breakpoints={ {
          50:{ 
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480:{
            slidesPerView: 1,
            spaceBetween: 5,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 25,
            
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 50,
            
          },
        } } 

        navigation={{
          nextEl:'.blog-next',
          prevEl:'.blog-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper-container swiper"
      >
        {blog.map((slide) => (
          <SwiperSlide key={slide.id} className="max-w-[380px]">
            <div key={slide.id}>
              <div className="flex justify-center items-center z-10">
                <img src={slide.img} alt={slide.title} />
              </div>

              <div className="flex flex-col justify-center items-start pl-5 h-[150px] w-full dark:bg-shadow-clr
               bg-[#fff] bg mt-[-27px] rounded-bl-3xl rounded-br-3xl">

                <p className="text-font-light dark:text-dark-font">
                  {slide.date}
                </p>

                <h4 className="font-semibold text-font-light dark:text-dark-font">
                  {slide.title}
                </h4>
              </div>

              <div className='w-[50px] h-[50px] absolute right-[0px] bottom-[0px] rounded-tl-2xl rounded-br-3xl bg-shadow-clr dark:bg-dark p-[17px]'>
                <img src={plus} alt="plus" className=' object-contain'/>
              </div>
            </div>
          </SwiperSlide>
        ))}

          <div className=" flex justify-center items-center mt-5 ">
            <div className="blog-prev prev bg-shadow-clr mr-1">
              <MdKeyboardArrowLeft className="text-[40px] text-white"/>
            </div>
            <div className="blog-next next bg-shadow-clr ml-1">
              <MdKeyboardArrowRight className="text-[40px] text-white"/>
            </div>
          </div>

      </Swiper>
    </div>
    </>
  )
}


export default BlogCards

/**
 * This is Blog Cards carousel component.
 * Two components from Swiper.js are used: Swiper and SwiperSlide.
 * Within the Swiper component, the navigation and slider logic is set.
 * Within the SwiperSlide component, the contents of the slider cards are created using the map method.
 * Javascript object values for SwiperSlide content are located in /src/const/index.js
 */