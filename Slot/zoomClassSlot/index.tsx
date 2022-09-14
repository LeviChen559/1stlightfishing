import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox,  Wrapper, TextContainer, TextBox } from './zoomClass.style'
import { H3, H5,H6,H4} from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'
import {useRouter} from "next/router"
import { IStyle } from '../../utility/type'

const ContactSlot: FC<IStyle> = ({ height, width }) => {
  const router = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return <>
  {!router.pathname.includes("/zh")?
    <Wrapper >
      <TextBox padding="5%">
        <H3 color={theme.palette.background.default} fontWeight={400}>Zoom Classes</H3>
      </TextBox>
      <TextContainer>
        <ImageBox height={height} width={width}>
          <Image src="/service/zoom-min.jpg" alt="rainbow" layout='fill' objectFit='cover' 
          placeholder="blur" blurDataURL="/image-blur-placeholder.png"/>
        </ImageBox>
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-around' color={theme.palette.background.default} >
          <H5 color={theme.palette.background.default}>  Our lectures/professional courses are in small classes, with limited places. Due to factors such as fishing season, climate, and fishing conditions, it is not suitable to decide the time in advance, but it will definitely be selected during the lecture/course time period. Location uncertain. Interested anglers please contact us in advance for information.
          </H5>
          <TextBox justifyContent='space-evenly' >
            <H4 color={theme.palette.background.default}>Free Lectures</H4>
            <H5 color={theme.palette.background.default}>1. Great Vancouver Fishing (3/20-3/30)</H5>
            <H5 color={theme.palette.background.default}>2. Great Vancouver Fishing (4/20-4/30)</H5>
            <H5 color={theme.palette.background.default}>3. Stream Salmon (9/1-9/10)</H5> 
            <H5 color={theme.palette.background.default}>4. Stream Salmon (10/1-10/10)</H5>
          </TextBox>
        </TextBox>
      </TextContainer>
    </Wrapper>
    :
    <Wrapper >
    <TextBox padding="5%">
      <H3 color={theme.palette.background.default} fontWeight={400}>免費講座</H3>
    </TextBox>
    <TextContainer>
      <ImageBox height={height} width={width}>
        <Image src="/zoom.avif" alt="rainbow" layout='fill' objectFit='cover' />
      </ImageBox>
      <TextBox
        flexDirection="column" alignItems="center"
        justifyContent='space-between' color={theme.palette.background.default} >
        <H5 color={theme.palette.background.default}>  我們的講座/專業課程採小班制，名額有限，受漁季，氣候，漁況等因素影響下，時間不適合提早決定，但一定會選在講座/課程時間段裡。地點不定。請有興趣的釣友提早聯繫我們取得資訊。

        </H5>
        <div>
          <H4 color={theme.palette.background.default}>講座/專業課程</H4>
          <H5 color={theme.palette.background.default}>1. 大溫釣魚 (3/20-3/30)</H5>
          <H5 color={theme.palette.background.default}>2. 大溫釣魚 (4/20-4/30)</H5>
          <H5 color={theme.palette.background.default}>3. 溪流三文魚 (9/1-9/10)</H5> 
          <H5 color={theme.palette.background.default}>4. 溪流三文魚 (10/1-10/10)</H5>
        </div>
      </TextBox>
    </TextContainer>
  </Wrapper>
}
    </>
}

export default ContactSlot