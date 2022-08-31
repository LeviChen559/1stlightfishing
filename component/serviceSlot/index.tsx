import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Style, ImageContainer, TextContainer, TextBox } from './serviceSlot.style'
import { H3, H5 } from "../commonStyle"
import BasicButtons from '../button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'

const ServiceSlot: FC<Style> = ({ height, width }) => {
  const H5_style = { color: theme.palette.background.default, 
                      background: "rgba(255, 255, 255, 0.8)",
                    padding:"2.5%" }

  return (
    <ImageContainer >
      <TextContainer>
        <TextBox>
          <H3>Service</H3>
          <H5 style={H5_style}>Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to develop their fishing skills further and ultimately share their mutual passion for fishing.</H5>
        </TextBox>
        <TextBox flex={.5} alignItems="center" justifyContent='center' >
          <BasicButtons text="JOIN US NOW" />
        </TextBox>
      </TextContainer>
      <ImageBox height={height} width={width}>
        <Image src="https://images.unsplash.com/photo-1501177205451-70e35058c1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
    </ImageContainer>

  )
}

export default ServiceSlot