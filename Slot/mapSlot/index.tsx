import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './mapSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'
import { useRouter } from 'next/router'


const MapSlot: FC<Style> = ({ height, width }) => {
  const router = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return (
    <Wrapper >
      <TextBox >
        {router.pathname.includes('/en') ?
      <H3 color={theme.palette.background.default} fontWeight={400}>Location</H3>:
      <H3 color={theme.palette.background.default} fontWeight={400}>我們的地址</H3>}
      </TextBox>
      <TextContainer>
        <ImageBox height={height} width={width}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10414.282751442921!2d-122.978617!3d49.2655826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e56a9e623721d24!2sFirst%20Light%20Fishing%20%26%20Tackle!5e0!3m2!1sen!2sca!4v1662699713814!5m2!1sen!2sca" width="100%" height="100%" style={{ border: 0, 
          boxShadow: "10px 10px 10px 5px rgba(0,0,0,0.2)",
          borderRadius: "15px" }} loading="lazy" ></iframe>
        </ImageBox>
        {router.pathname.includes('/en') ?
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-evenly' >
           <strong> Opening Hours</strong>
           <div>Monday : 10a.m.–6p.m.</div> 
           <div>Tuesday : 10a.m.–6p.m.</div> 
           <div>Wednesday : 10a.m.–6p.m.</div> 
           <div>Thursday : 10a.m.–6p.m.</div> 
           <div>Friday : 10a.m.–6p.m.</div> 
           <div>Satarday : 10a.m.–6p.m.</div>
           <div>Sunday : 11a.m.–5p.m.</div>
        </TextBox>
        :
         <TextBox
         flexDirection="column" alignItems="center"
         justifyContent='space-evenly' >
          <strong>營業時間</strong>
          <div>星期一 : 10a.m.–6p.m.</div> 
          <div>星期二 : 10a.m.–6p.m.</div> 
          <div>星期三 : 10a.m.–6p.m.</div> 
          <div>星期四 : 10a.m.–6p.m.</div> 
          <div>星期五 : 10a.m.–6p.m.</div> 
          <div>星期六 : 10a.m.–6p.m.</div>
          <div>星期天 : 11a.m.–5p.m.</div>
       </TextBox>  
        }
      </TextContainer>

    </Wrapper>

  )
}

export default MapSlot