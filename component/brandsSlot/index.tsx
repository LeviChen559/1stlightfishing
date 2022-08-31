import React, { FC, useEffect } from 'react'
import Image from 'next/image';
import { Wrapper, } from './brandsSlot.style'
import { H3, H4, H5, H6,ImageBox } from "../commonStyle"
import AOS from 'aos';
import 'aos/dist/aos.css';
const BrandSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    return <Wrapper>
        <ImageBox 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
       <Image src="/shimano.png" alt="shimano" layout='fill' objectFit='contain'/>
        </ImageBox>
        <ImageBox 
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="200"
         data-aos-duration="500"
         data-aos-easing="ease-in-out">
       <Image src="/brand.png" alt="shimano" layout='fill' objectFit='contain'/>
        </ImageBox>
        <ImageBox 
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="350"
         data-aos-duration="500"
         data-aos-easing="ease-in-out">
       <Image src="/brand3.png" alt="shimano" layout='fill' objectFit='contain'/>
        </ImageBox>
        <ImageBox 
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="500"
         data-aos-duration="500"
         data-aos-easing="ease-in-out">
       <Image src="/brand2.png" alt="shimano" layout='fill' objectFit='contain'/>
        </ImageBox>
    </Wrapper>

}


export default BrandSlot