import React,{FC} from 'react'
import Image from 'next/image'
import { ImageBox,Props,ImageContainer,TextContainer} from './service.style'
import {H3,H6} from"../commonStyle"
const Service:FC<Props> =({height,width})=> {
  return (
    <ImageContainer >
    <TextContainer>
     <H3>Service</H3>   
     <H6>Whether you and your friends are new to fishing or are experienced anglers... here at First Light Tackle, we provide exciting and rewarding opportunities for everyone to develop their fishing skills further and ultimately share their mutual passion for fishing.</H6>
    </TextContainer>
    <ImageBox height={height} width={width}>
    <Image src="https://images.unsplash.com/photo-1501177205451-70e35058c1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" objectFit="fill" alt="logo" layout='fill'  />
</ImageBox>
</ImageContainer>
  
  )
}

export default Service