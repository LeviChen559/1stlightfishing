import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Wrapper, TextContainer, TextBox } from './serviceSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'
import { IStyle } from '../../utility/type'
import { useRouter } from 'next/router'
const ServiceSlot: FC<IStyle> = ({ height, width }) => {
  const router = useRouter()
  const H5_style = { color: theme.palette.background.default, 
                      background: "rgba(255, 255, 255, 0.8)",
                    padding:"2.5%" }

  return (
    <Wrapper >
      {!router.pathname.includes("/zh")?
      <TextContainer>
        <TextBox >
          <H3 style={{textShadow:"2px 2px 5px 2px gray"}} >Service</H3>
          <H5 style={H5_style}>Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to develop their fishing skills further and ultimately share their mutual passion for fishing.</H5>
        </TextBox>
        <TextBox  data-active={true} alignItems="center" justifyContent='flex-end' >
          <BasicButtons text="JOIN US NOW" handleLinkClick={()=>router.push("/en/service")}/>
        </TextBox>
      </TextContainer>
      :
      <TextContainer>
      <TextBox >
        <H3 style={{textShadow:"5px 5px 10px 5px gray"}} >專業服務</H3>
        <H5 style={H5_style}>無論您和您的朋友是釣魚新手還是經驗豐富的垂釣者......在 First Light Tackle，我們為每個人提供令人興奮和有益的機會，以進一步發展他們的釣魚技能並最終分享他們對釣魚的共同熱情。</H5>
      </TextBox>
      <TextBox  data-active={true} alignItems="center" justifyContent='flex-end' >
        <BasicButtons text="加入我們" handleLinkClick={()=>router.push("/zh/service")}/>
      </TextBox>
    </TextContainer>
    }
      <ImageBox height={height} width={width}>
        <Image src="/service/service-min.jpeg" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
    </Wrapper>

  )
}

export default ServiceSlot