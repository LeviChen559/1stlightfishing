import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { Wrapper, ImageBox, TextContainer, ButtonContainer } from './style'
import { H1, H4, H5 } from '../../component/commonStyle'
import BasicButtons from '../../component/button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/home.module.scss'
import { useRouter } from 'next/router'
import { theme } from '../../utility/theme'
import { ILocale } from '../../utility/type';
const HeroSlot: FC = () => {
  // useEffect(() => { AOS.init(); },[])
  const router = useRouter()
  const { locale, locales, asPath } = useRouter();

  return <Wrapper>
    <ImageBox >
      <Image src="/hero2-min.png" objectFit="cover" alt="hero image" layout="fill"
        priority={true} placeholder="blur" blurDataURL="/image-blur-placeholder.png"
      />
    </ImageBox>
    {!locale?.includes("zh") ?
      <TextContainer>
        <H5 >Come to meet us</H5>
        <H1 textShadow='5px 5px 5px rgba(0, 0, 0,0.5)'
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="1000"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out">LIVE. LOVE. FISH.</H1>
        <H4 >First Light Fishing & Tackle</H4>
        <H4 >Best Fishing Store in Burnaby</H4>
        <ButtonContainer>
          <BasicButtons text="Explore Now" handleLinkClick={()=>router.push("/en/about")} color="warning"/>
        </ButtonContainer>
      </TextContainer>
      :
      <TextContainer>
        <H5 >拜訪我們</H5>
        <H1 
        textShadow='5px 5px 5px rgba(0, 0, 0,0.5)'
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="1500"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out">有愛也有漁，這就是生活</H1>
        <H4 >First Light Fishing & Tackle</H4>
        <H4 >大溫地區最專業釣魚店</H4>
        <ButtonContainer>
          <BasicButtons text="開始探索" handleLinkClick={()=>router.push("/zh/about")} color="warning"/>
        </ButtonContainer>
      </TextContainer>

    }
  </Wrapper>

}


export default HeroSlot