import React,{useEffect,FC,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import Logo from '../logo';
import {H6,ImageBox,H5,FlexRow} from "../commonStyle" 
import {Wrapper,FlexCol,SocialMedia,PageContainer,PageItem,LanguagesEN,LanguagesZH} from "./style"
import MenuBar from '../menuBar';
import { useRouter } from 'next/router';
import { socialList } from '../../utility/data/staticList';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

const Footer:FC=()=> {
  const [value, setValue] = useState('HOME');
  const router = useRouter()
  const{locale,asPath,locales}=useRouter()
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
      {!locale?.includes("zh")?
      <PageContainer >
        {asPath === "/" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en">HOME</Link></PageItem> :
          <PageItem ><Link href="/en">HOME</Link></PageItem>
        }
        {asPath === "/about" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/about"> ABOUT</Link></PageItem> :
          <PageItem><Link href="/about"> ABOUT</Link></PageItem>
        }
        {asPath === "/product" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/product"> PRODUCT</Link> </PageItem> :
          <PageItem><Link href="/product"> PRODUCT</Link> </PageItem>}
        {asPath === "/blog" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/blog"> BLOG</Link></PageItem> :
          <PageItem ><Link href="/blog"> BLOG</Link></PageItem>}
        {asPath === "/service" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/service"> SERVICE</Link></PageItem> :
          <PageItem> <Link href="/service"> SERVICE</Link></PageItem>}
        {asPath === "/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/contact"> CONTACT</Link></PageItem> :
          <PageItem> <Link href="/contact"> CONTACT</Link></PageItem>}
      </PageContainer>
      :
      <PageContainer >
        {asPath === "/zh" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/zh">首頁</Link></PageItem> :
          <PageItem ><Link href="/zh">首頁</Link></PageItem>
        }
        {asPath === "/en/about" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/zh/about"> 關於我</Link></PageItem> :
          <PageItem><Link href="/zh/about">關於我</Link></PageItem>
        }
        {asPath === "/zh/products" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/zh/product">商品</Link> </PageItem> :
          <PageItem><Link href="/zh/product">商品</Link> </PageItem>}
        {asPath === "/zh/blogs" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/zh/blog">部落格</Link></PageItem> :
          <PageItem ><Link href="/zh/blog">部落格</Link></PageItem>}
        {asPath === "/zh/services" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/zh/service">服務</Link></PageItem> :
          <PageItem> <Link href="/zh/service">服務</Link></PageItem>}
        {asPath === "/zh/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/zh/contact">聯絡我</Link></PageItem> :
          <PageItem> <Link href="/zh/contact">聯絡我</Link></PageItem>}
      </PageContainer>
}
        <SocialMedia>
        {socialList.map(social => {
          return <ImageBox width={30} height={30} key={social.id} 
           data-aos="fade-up"
           data-aos-offset="100"
           data-aos-delay={social.delay}
           data-aos-duration="500"
           data-aos-easing="ease-in-out">
          <Image src={social.src} alt={social.name} layout='fill'/>
          </ImageBox>
        }) }
        </SocialMedia>
          
          <LanguagesZH >
        {locales?.map((language:string,i:number) =>{
          return <div key={i}>
          {language===locale? 
          <H5  color="orange" fontWeight={400}  ><Link key={i} locale={language} href={asPath}>
            {language==="en"? "EN" : "中文" } 
            </Link></H5> 
            :
            <H5  fontWeight={300} opacity={.25} ><Link key={i} locale={language} href={asPath}>
            {language==="en"? "EN" : "中文" } 
            </Link></H5> 
            }
          </div>
        }
        )}
          </LanguagesZH>

          
      </FlexCol>
      <FlexRow margin='5%' style={{cursor: 'pointer'}} onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}><ChangeHistoryIcon sx={{color:'white'}}/><H5>Top</H5></FlexRow>
      <H6 >© Copyright by first light fishing & tackle 2022</H6>
    </Wrapper>
  );
}

export default Footer