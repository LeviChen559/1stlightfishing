import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './guideSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'



const GuideSlot: FC<Style> = ({ height, width }) => {

  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return (
    <Wrapper >
      <TextBox padding="5%">
        <H3 color={theme.palette.common.white} fontWeight={400}>Guide</H3>
      </TextBox>
      <TextContainer>
        <ImageBox height={height} width={width}>
          <Image src="/rainbow.jpeg" alt="rainbow" layout='fill' objectFit='cover' />
        </ImageBox>
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-evenly' color={theme.palette.common.white} >
          <div>  Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to further develop their fishing skills and ultimately share their mutual passion in fishing.
          </div>
          <div>Come visit us in store and expand your knowledge on local fisheries, proper gear selection and tackle set up.
          </div>
          <div>Take a step even further and start your next fishing adventure with us. We could be targeting salmon, steelhead, or even coarse fish like carp!  You can enhance your water reading skills, learn productive fishing techniques & methods, connect with new friends and of course most importantly... have fun!
          </div>
        </TextBox>
      </TextContainer>
    </Wrapper>

  )
}

export default GuideSlot