import React, { FC } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './visionSlot.style'
import { H3, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import { SportsRugbySharp } from '@mui/icons-material'

const VisionSlot: FC<Style> = ({ height, width }) => {
  const H5_style = { color: theme.palette.background.default, 
                      background: "rgba(255, 255, 255, 0.8)",
                    padding:"2.5%" }

  return (
    <Wrapper >
      <ImageBox height={height} width={width}>
        <Image src="/aboutme.avif" objectFit="cover" alt="visionSlot" layout='fill'quality={80} />
      </ImageBox>
    </Wrapper>

  )
}

export default VisionSlot