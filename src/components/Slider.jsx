import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';

// import { EffectFade } from 'swiper/modules';




const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
    spaceBetween={50}
    effect="flip"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide className='animate__flash animate__animated animate__bounce'>
      <img src="https://i.ibb.co/MR7W9VM/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt="" className='w-full' />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i.ibb.co/0BddKTx/christian-koch-D-4-R9-Cc-YZOk-unsplash.jpg" alt="" className='w-full'  />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i.ibb.co/YPHv6yg/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg" alt="" className='w-full'   />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i.ibb.co/YPHv6yg/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg" alt="" className='w-full'   />
    </SwiperSlide>
  </Swiper>
    // <div className="w-full carousel">
    //   <div id="slide1" className="relative w-full carousel-item h-96">
    //     <img
    //       src="https://i.ibb.co/MR7W9VM/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide4" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide2" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide2" className="relative w-full carousel-item h-96">
    //     <img
    //       src="https://i.ibb.co/0BddKTx/christian-koch-D-4-R9-Cc-YZOk-unsplash.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide3" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="relative w-full carousel-item h-96">
    //     <img
    //       src="https://i.ibb.co/YPHv6yg/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide4" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="relative w-full carousel-item h-96">
    //     <img
    //       src="https://i.ibb.co/YPHv6yg/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide3" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide1" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;
