import React, { FC } from 'react'
import Image from 'next/image'
import {  Wrapper, TextContainer, TextBox } from './style'
import { H3, H5,H4, FlexRow } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { themePalette } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'
import { IStyle } from '../../utility/type'
import { useRouter } from 'next/router'
const NewsSlot: FC<IStyle> = ({ height, width }) => {
  const router = useRouter()
  const {locale}= useRouter()
  const H5_style = { padding:"2.5%", lineHeight: "24px", textAlign: "center"}

  return (
    <Wrapper >
      {!locale?.includes("zh")?
      
      <TextContainer>
         <H3 textShadow="3px 3px 3px rgba(0, 0, 0,0.25)" margin="0 0 20px 0" >New Info</H3>
         <H5  margin="0 0 5% 0" >The lastest fising and store info</H5>
         <FlexRow justifyContent="space-around">
        <TextBox  data-active={true} alignItems="center" justifyContent='space-between' >
          <H4 textShadow="3px 3px 3px rgba(0, 0, 0,0.25)" color={themePalette.main}>Fishing Info</H4>
          <H5 padding="2.5%" lineHeight= "24px"textAlign="left" color={themePalette.main}>Capilano River - Coho -Apr 1 to Jun 3(2 hatchery marked per day)</H5>
          <BasicButtons text="More" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
        <TextBox  data-active={true} alignItems="center" justifyContent='space-between' >
          <H4 textShadow="3px 3px 3px rgba(0, 0, 0,0.25)" color={themePalette.main} >Store News</H4>
          <H5 padding="2.5%" lineHeight= "24px"textAlign="center"></H5>
          <BasicButtons text="More" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
        </FlexRow>
      </TextContainer>
      :
      <TextContainer>
        <TextBox  data-active={true} alignItems="center" justifyContent='space-between' >
          <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)" >魚點資訊</H3>
          <H5 padding="2.5%" lineHeight= "26px"textAlign="center"></H5>
          <BasicButtons text="更多" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
        <TextBox  data-active={true} alignItems="center" justifyContent='space-between' >
          <H3 textShadow="3px 3px 3px rgba(0, 0, 0,0.25)" color={themePalette.main} >店內新聞</H3>
          <H5 padding="2.5%" lineHeight= "26px"textAlign="center"></H5>
          <BasicButtons text="更多" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
     
    </TextContainer>
    }
    </Wrapper>

  )
}

export default NewsSlot