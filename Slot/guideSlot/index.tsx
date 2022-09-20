import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'
import { useRouter } from 'next/router'


const GuideSlot: FC<Style> = ({ height, width }) => {
  const {locale} = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return <>
    {!locale?.includes("zh")?
    <Wrapper >
      <TextBox padding="5%">
        <H3 color={theme.palette.common.white} fontWeight={400}>Guide</H3>
      </TextBox>
      <TextContainer>
        <ImageBox height={height} width={width}>
          <Image src="/service/rainbow.jpeg" alt="rainbow" layout='fill' objectFit='cover' />
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
    : 
    <Wrapper >
    <TextBox padding="5%">
      <H3 color={theme.palette.common.white} fontWeight={400}>主要服務</H3>
    </TextBox>
    <TextContainer>
      <ImageBox height={height} width={width}>
        <Image src="/service/rainbow.jpeg" alt="rainbow" layout='fill' objectFit='cover' 
       placeholder="blur" blurDataURL="/image-blur-placeholder.png"
        />
      </ImageBox>
      <TextBox
        flexDirection="column" alignItems="center"
        justifyContent='space-evenly' color={theme.palette.common.white} >
        <div>我們除了提供各式專業釣具外更提供了一些專業服務及知識。我們歡迎各位釣友資詢任何本地釣魚的相關問題，在我們的時間及人力資源許可下我們樂意回答任何問題。
        </div>
        <div>我們也提供繞線服務，專業上線機器，把你的捲線器帶到店裏來，我們會用最短的時間幫你舊線換新線，讓你為下一次的出釣做好準備。
        </div>
        <div>另外我們也提供竿子維修服務。我們更明白想把魚釣好，專業的知識與技巧是關鍵。我們將不定期的舉辦免費講座，想更進一步深入了解的釣友更可以考慮我們的一些釣魚專業培訓課程。倘若你的時間非常有限但又想一次體會釣魚的樂趣，我們也提供專業導釣服務。
        </div>
      </TextBox>
    </TextContainer>
  </Wrapper>
  
  }

  </>
}

export default GuideSlot