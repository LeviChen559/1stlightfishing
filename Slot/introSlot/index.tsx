import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './introSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/card'
import BlogCardUI from '../../arrayUI/blogCardUI'



const IntroSlot: FC<Style> = ({ height, width }) => {

  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return (
    <Wrapper >
      <TextContainer>
        <ImageBox height={height} width={width}>
          <Image src="/introImage.png" objectFit="contain" alt="logo" layout='fill' />
        </ImageBox>
        <TextBox
          flexDirection="row" alignItems="center"
          justifyContent='space-evenly' >
          Our doors opened on June 2012 in Burnaby, serving the central fishing community in the Lower Mainland.
          <br/>
          <br/>
          First Light Tackle is devotedly operated by Steven Su - an avid sports angler of three decades who is well studied in our pacific west coast geography and ecology. His passion for the sport has no limits and knows no boundaries. From saltwater to freshwater fishing, from gear to fly fishing, on the dock or off the grid, under the sun or in the snow, around the clock from January to December - you will see Steven out there, casting his line and connecting with fish of all kinds.
          <br/>
          <br/>
          We are not just another retail stop. We are a hub for conversations and stories, and a platform for education on responsible and sustainable fishing. Our vision is to foster a close knit community of nature enthusiasts in beautiful British Columbia, living, loving and… fishing.
          Join us!
        </TextBox>
      </TextContainer>

    </Wrapper>

  )
}

export default IntroSlot