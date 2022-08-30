import React,{FC} from 'react'
import Image from 'next/image'
import { ImageBox,Props } from './logo.style'

const Logo:FC<Props> =({height,width})=> {
  return (
    <ImageBox height={height} width={width}>
    <Image src="/logo.svg" objectFit="contain" alt="logo" layout='fill'  />
</ImageBox>
  )
}

export default Logo