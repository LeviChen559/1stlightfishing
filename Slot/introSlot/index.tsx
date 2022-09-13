import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './introSlot.style'
import { H3, H4, H5,H6 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'

import { useRouter } from 'next/router'

const IntroSlot: FC<Style> = ({ height, width }) => {
  const router = useRouter()
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
       {!router.pathname.includes('/zh') ?
        <TextBox alignItems="center"
          justifyContent='space-evenly' >
          <H4>
          Our doors opened on June 2012 in Burnaby, serving the central fishing community in the Lower Mainland.
          </H4>
          <H4>
          First Light Tackle is devotedly operated by Steven Su - an avid sports angler of three decades who is well studied in our pacific west coast geography and ecology. His passion for the sport has no limits and knows no boundaries. From saltwater to freshwater fishing, from gear to fly fishing, on the dock or off the grid, under the sun or in the snow, around the clock from January to December - you will see Steven out there, casting his line and connecting with fish of all kinds.
          </H4>
          <H4>
          We are not just another retail stop. We are a hub for conversations and stories, and a platform for education on responsible and sustainable fishing. Our vision is to foster a close knit community of nature enthusiasts in beautiful British Columbia, living, loving and… fishing.
          Join us!
          </H4>
        </TextBox>
        :
        <TextBox
           alignItems="flex-start"
          justifyContent='space-between' >
             <H5>
         First Light 漁具店創立於2012年 ，店長 Steven Su 來自台灣 ,從小就熱愛釣魚 ，1995年移民溫哥華後，接觸了這裡的釣魚文化，經過了二十多年對本地釣魚活動的熱情參與及投入了數不清的小時數讓店長累積了非常豐富的釣魚經驗，不論是淡水或海水，各式釣法，各種不同的魚種，一年四季 從未間斷過。 
         </H5>
         <H5>
          我們清楚知道身為大溫哥華地區第一也是唯一的華人漁具店，我們提供的釣魚信息與釣友間的互動平台對我們的華人釣友是極其重要，在幫助釣友選擇正確的釣魚裝備的同時我們也非常樂意幫助任何想學習釣魚的新手如何上路以及協助各位了解這裡的釣魚相關規則以免觸法。除了釣魚，在過去幾年裡我們也凝聚了大溫哥華地區不少華人釣友來積極參與我們發起的一些清掃活動，教育大家如何成為一個愛漁也懂得愛護這片美麗土地的好釣者，讓我們的下一代也能享受釣魚。
          </H5>
          <H5>
          有愛也有漁，這就是生活。Live. Love. Fish. 
          </H5>
          <H6>
          我們的團隊
          </H6>
          <H6>
          Steven ( 店長） 
  </H6>
        </TextBox>}
      </TextContainer>

    </Wrapper>

  )
}

export default IntroSlot