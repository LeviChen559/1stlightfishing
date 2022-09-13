import React,{useEffect,FC,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import Logo from '../logo';
import {H6,ImageBox,H5,FlexRow} from "../commonStyle" 
import {Wrapper,FlexCol,SocialMedia,PageContainer,PageItem,LanguagesEN,LanguagesZH} from "./footer.style"
import MenuBar from '../menuBar';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
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
      {router.pathname.includes("/en")?
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
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/products"> PRODUCT</Link> </PageItem> :
          <PageItem><Link href="/en/products"> PRODUCT</Link> </PageItem>}
        {router.pathname === "/en/blogs" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs"> BLOG</Link></PageItem> :
          <PageItem ><Link href="/en/blogs"> BLOG</Link></PageItem>}
        {router.pathname === "/en/services" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/services"> SERVICE</Link></PageItem> :
          <PageItem> <Link href="/en/services"> SERVICE</Link></PageItem>}
        {router.pathname === "/en/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact"> CONTACT</Link></PageItem> :
          <PageItem> <Link href="/en/contact"> CONTACT</Link></PageItem>}
      </PageContainer>
      :
      <PageContainer >
        {router.pathname === "/en" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en">首頁</Link></PageItem> :
          <PageItem ><Link href="/en">首頁</Link></PageItem>
        }
        {router.pathname === "/en/about" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/about"> 關於我</Link></PageItem> :
          <PageItem><Link href="/en/about">關於我</Link></PageItem>
        }
        {router.pathname === "/en/products" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/products">商品</Link> </PageItem> :
          <PageItem><Link href="/en/products">商品</Link> </PageItem>}
        {router.pathname === "/en/blogs" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs">部落格</Link></PageItem> :
          <PageItem ><Link href="/en/blogs">部落格</Link></PageItem>}
        {router.pathname === "/en/services" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/services">服務</Link></PageItem> :
          <PageItem> <Link href="/en/services">服務</Link></PageItem>}
        {router.pathname === "/en/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact">聯絡我</Link></PageItem> :
          <PageItem> <Link href="/en/contact">聯絡我</Link></PageItem>}
      </PageContainer>
}
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
        {router.pathname.includes("/en")?
        <LanguagesEN ><H6 data-comp="en" fontWeight={400}>EN</H6> <H6 data-comp="zh" fontWeight={300} opacity={.5} onClick={() => router.push("/zh")}>ZH</H6></LanguagesEN>
        :
        <LanguagesZH ><H6 data-comp="en" fontWeight={300} opacity={.5} onClick={() => router.push("/en")}>英文</H6> <H6 data-comp="zh" fontWeight={400}  >中文</H6></LanguagesZH>
      }
      </FlexCol>
      <FlexRow margin='5%' onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}><ChangeHistoryIcon/><H5>Top</H5></FlexRow>
      <H6 >© Copyright by first light fishing & tackle 2022</H6>
    </Wrapper>
  );
}

export default Footer