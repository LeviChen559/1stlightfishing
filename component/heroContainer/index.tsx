import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { Wrapper, ImageBox, TextContainer, ButtonContainer } from './heroContainer.style'
import { H1, H4, H5 } from '../commonStyle'
import BasicButtons from '../button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/home.module.scss'



const HeroContainer: FC = () => {
  useEffect(() => { AOS.init(); },)

  return <Wrapper>


    <ImageBox 
     data-aos="fade-up"
     data-aos-easing="ease-in"
     data-aos-duration="3000">
      <Image src="/hero-min.png" objectFit="cover" alt="hero image" layout="fill"
       
      />
    </ImageBox>
    <TextContainer>
      <H5>Come to meet us</H5>
      <H1 data-aos="slide-left"
        data-aos-offset="200"
        data-aos-delay="500"
        data-aos-duration="1250"
        data-aos-easing="ease-in-out">LIVE. LOVE. FISH.</H1>
      <H4 >First Light Tackle</H4>
      <H4>Best Fishing Store at Burnaby</H4>
      <ButtonContainer>
        <BasicButtons text="Explore Now" />
      </ButtonContainer>
    </TextContainer>
  </Wrapper>

}


export default HeroContainer