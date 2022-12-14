import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'
interface Props{
  src:string;
  height?:number;
  width?:number
  }

const VisionSlot: FC<Props> = ({ height, width ,src }) => {
 

  return (
    <Wrapper >
      <ImageBox height={height} width={width}>
        <Image src={src} objectFit="cover" alt="visionSlot" layout='fill'quality={80}
        priority={true} placeholder="blur" blurDataURL="/image-blur-placeholder.png"
        />
      </ImageBox>
    </Wrapper>

  )
}

export default VisionSlot