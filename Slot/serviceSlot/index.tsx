import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Wrapper, TextContainer, TextBox } from './style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'
import { IStyle } from '../../utility/type'
import { useRouter } from 'next/router'
const ServiceSlot: FC<IStyle> = ({ height, width }) => {
  const router = useRouter()
  const {locale}= useRouter()
  const H5_style = { padding:"2.5%", lineHeight: "24px", textAlign: "center"}

  return (
    <Wrapper >
      {!locale?.includes("zh")?
      <TextContainer>
        <TextBox  data-active={true} alignItems="center" justifyContent='space-evenly' >
          <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)" >Service</H3>
          <H5 padding="2.5%" lineHeight= "28px"textAlign="center">Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to develop their fishing skills further and ultimately share their mutual passion for fishing.</H5>
          <BasicButtons text="JOIN US NOW" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
      <ImageBox height={height} width={width}>
        <Image src="/service/service-min.jpeg" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
      </TextContainer>
      :
      <TextContainer>
        <TextBox  data-active={true} alignItems="center" justifyContent='space-evenly' >
          <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)" >專業服務</H3>
          <H5 padding="2.5%" lineHeight= "30px"textAlign="center">無論您和您的朋友是釣魚新手還是經驗豐富的垂釣者......在 First Light Tackle，我們為每個人提供令人興奮和有益的機會，以進一步發展他們的釣魚技能並最終分享他們對釣魚的共同熱情。</H5>
          <BasicButtons text="JOIN US NOW" handleLinkClick={()=>router.push("/en/service")} color="warning"/>
        </TextBox>
      <ImageBox height={height} width={width}>
        <Image src="/service/service-min.jpeg" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
     
    </TextContainer>
    }
    </Wrapper>

  )
}

export default ServiceSlot