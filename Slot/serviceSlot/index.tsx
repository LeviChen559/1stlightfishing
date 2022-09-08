import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './serviceSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'

const ServiceSlot: FC<Style> = ({ height, width }) => {
  const H5_style = { color: theme.palette.background.default, 
                      background: "rgba(255, 255, 255, 0.8)",
                    padding:"2.5%" }

  return (
    <Wrapper >
      <TextContainer>
        <TextBox >
          <H3 >Service</H3>
          <H5 style={H5_style}>Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to develop their fishing skills further and ultimately share their mutual passion for fishing.</H5>
        </TextBox>
        <TextBox  data-active={true} alignItems="center" justifyContent='flex-end' >
          <BasicButtons text="JOIN US NOW" />
        </TextBox>
      </TextContainer>
      <ImageBox height={height} width={width}>
        <Image src="/service/service1.jpeg" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
    </Wrapper>

  )
}

export default ServiceSlot