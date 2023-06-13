import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../../../public/image/slider2.png'
import slider1 from '../../../public/image/slider1.png'


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
       

            <Slider {...settings}>
                <div className='relative'>
                    <img className='w-full' src={slider1} alt="" />
                    <div className='absolute top-1/2 right-52 -translate-y-1/2 text-white'>
                        <h3 className='text-7xl font-blod mb-6'>Yoga Studio</h3>
                        <p className='text-xl'>Sed sit amet arcu sit amet neque dapibus commodo. <br /> Integer faucibus, tortor eu efficitur gravida, <br /> nisi est egestas nulla, non porta dolor erat quis elit.</p>
                        <button className='btn bg-[#5ab337d6] text-white capitalize hover:bg-white hover:text-black border-[#5ab337d6] mt-5 text-xl'>Details Here</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full' src={slider2} alt="" />
                    <div className='absolute top-1/2 right-52 -translate-y-1/2 text-white'>
                        <h3 className='text-7xl font-blod mb-6'>Yoga Studio</h3>
                        <p className='text-xl'>Sed sit amet arcu sit amet neque dapibus commodo. <br /> Integer faucibus, tortor eu efficitur gravida, <br /> nisi est egestas nulla, non porta dolor erat quis elit.</p>
                        <button className='btn bg-[#5ab337d6] text-white capitalize hover:bg-white hover:text-black border-[#5ab337d6] mt-5 text-xl'>Details Here</button>
                    </div>
                </div>
                
            </Slider>
    
    );
};

export default Banner;