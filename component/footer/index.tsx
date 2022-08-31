import React,{useEffect,FC,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import Logo from '../logo';
import {H6,ImageBox} from "../commonStyle" 
import {Wrapper,FlexCol,SocialMedia} from "./footer.style"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer:FC=()=> {
  const [value, setValue] = useState('HOME');
  useEffect(()=>{

    AOS.init()
  },[])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Wrapper >
      <FlexCol>
      <Logo height={45} width={95}/>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="HOME" label="HOME"  sx={{color: "white"}}/>
        <Tab value="ABOUT" label="ABOUT"  sx={{color: "white"}}/>
        <Tab value="PRODUCTS" label="PRODUCTS" sx={{color: "white"}}/>
        <Tab value="BLOGS" label="BLOGS" sx={{color: "white"}}/>
        <Tab value="SERVICES" label="SERVICES" sx={{color: "white"}}/>
        <Tab value="CONTACT" label="CONTACT"sx={{color: "white"}} />
      </Tabs>
        <SocialMedia>
          <ImageBox width={30} height={30}
           data-aos="fade-up"
           data-aos-offset="100"
           data-aos-delay="50"
           data-aos-duration="500"
           data-aos-easing="ease-in-out">
          <Image src="/socialMedia/line.png" alt="Line" layout='fill'/>
          </ImageBox>
          <ImageBox width={30} height={30}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
          <Image src="/socialMedia/facebook.png" alt="Line" layout='fill'/>
          </ImageBox>
          <ImageBox width={30} height={30}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
          <Image src="/socialMedia/whatsapp.png" alt="Line" layout='fill'/>
          </ImageBox>
          <ImageBox width={30} height={30}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
          <Image src="/socialMedia/wechat.png" alt="Line" layout='fill'/>
          </ImageBox>
          <ImageBox width={30} height={30}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
          <Image src="/socialMedia/email.png" alt="Line" layout='fill'/>
          </ImageBox>

        </SocialMedia>
      </FlexCol>
      <H6>© Copyright by first light fishing & tackle 2022</H6>
    </Wrapper>
  );
}

export default Footer