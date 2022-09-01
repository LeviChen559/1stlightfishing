import React,{useEffect,FC,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import Logo from '../logo';
import {H6,ImageBox} from "../commonStyle" 
import {Wrapper,FlexCol,SocialMedia,PageContainer,PageItem} from "./footer.style"
import MenuBar from '../menuBar';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
const Footer:FC=()=> {
  const [value, setValue] = useState('HOME');
  const router = useRouter();
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
      <PageContainer >
        {router.pathname === "/en" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en">HOME</Link></PageItem> :
          <PageItem ><Link href="/en">HOME</Link></PageItem>
        }
        {router.pathname === "/en/about" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/about"> ABOUT</Link></PageItem> :
          <PageItem><Link href="/en/about"> ABOUT</Link></PageItem>
        }
        {router.pathname === "/en/products" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/products"> PRODUCTS</Link> </PageItem> :
          <PageItem><Link href="/en/products"> PRODUCTS</Link> </PageItem>}
        {router.pathname === "/en/blogs" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs"> BLOGS</Link></PageItem> :
          <PageItem ><Link href="/en/blogs"> BLOGS</Link></PageItem>}
        {router.pathname === "/en/services" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/services"> SERVICES</Link></PageItem> :
          <PageItem> <Link href="/en/services"> SERVICES</Link></PageItem>}
        {router.pathname === "/en/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact"> CONTACT</Link></PageItem> :
          <PageItem> <Link href="/en/contact"> CONTACT</Link></PageItem>}
      </PageContainer>
      {/* <Tabs sx={{width:400}}
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
      </Tabs> */}
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