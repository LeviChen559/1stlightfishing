import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './zoomClassSlot.style'
import { H3, H5,H6,H4} from "../../component/commonStyle"
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
        <H3 color={theme.palette.background.default} fontWeight={400}>Zoom Classes</H3>
      </TextBox>
      <TextContainer>
        <ImageBox height={height} width={width}>
          <Image src="/zoom.avif" alt="rainbow" layout='fill' objectFit='cover' />
        </ImageBox>
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-between' color={theme.palette.background.default} >
          <H5>  Our lectures/professional courses are in small classes, with limited places. Due to factors such as fishing season, climate, and fishing conditions, it is not suitable to decide the time in advance, but it will definitely be selected during the lecture/course time period. Location uncertain. Interested anglers please contact us in advance for information.
          </H5>
          <div>
            <H4>Free Lectures</H4>
            <H5>1 Great Vancouver Fishing (3/20-3/30)</H5>
            <H5>2 Great Vancouver Fishing (4/20-4/30)</H5>
            <H5>3 Stream Salmon (9/1-9/10)</H5> 
            <H5>4 Stream Salmon (10/1-10/10)</H5>
          </div>
        </TextBox>
      </TextContainer>
    </Wrapper>

  )
}

export default GuideSlot