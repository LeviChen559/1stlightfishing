import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { ImageBox,  Wrapper, TextContainer, TextBox } from './contactSlot.style'
import { H3, H5, H6, H4 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FlexRow, FlexCol } from '../../component/commonStyle'
import Divider from '@mui/material/Divider';
import { IStyle } from '../../utility/type'

const ContactSlot: FC<IStyle> = ({ height, width }) => {

  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }

  return (
    <Wrapper >
      <TextBox >
        <H3 color={theme.palette.background.default} fontWeight={400}>Contact Us</H3>
      </TextBox>
      <TextContainer>
        <TextField required id="outlined-basic" label="Email" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
        <TextField required id="filled-basic" label="Name" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
        <TextField multiline required id="standard-basic" label="Message" variant="outlined" sx={{
          backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800,
          marginBottom: 2, height: 200, overflow: "auto"
        }} />
        <FlexRow >
          <BasicButtons width={100} text="Cancle" margin="0 2.5%" />
          <BasicButtons width={100} text="Submit" margin="0 2.5%" />
        </FlexRow>
      </TextContainer>
      <Divider variant="middle" sx={{ backgroundColor: theme.palette.background.default, width: "70%", maxWidth: 800, margin: 5 }} />
      <FlexRow flexDirection='row'>
        <FlexCol alignItems='flex-start' justifyContent='space-around'>
          <H5> Phone: (604) 558-3474</H5>
          <H5> Email: info@1stlightfishing.com</H5>
          <H5> Location:#3 - 5901 Broadway, Burnaby BC V5B 2Y1</H5>
        </FlexCol>
        <FlexRow alignItems='flex-start' justifyContent='space-evenly' width={400}>
          <ImageBox width={30} height={30}
           >
            <Image src="/socialMedia/line.png" alt="Line" layout='fill' />
          </ImageBox>
          <ImageBox width={30} height={30}
           >
            <Image src="/socialMedia/facebook.png" alt="Line" layout='fill' />
          </ImageBox>
          <ImageBox width={30} height={30}
           >
            <Image src="/socialMedia/whatsapp.png" alt="Line" layout='fill' />
          </ImageBox>
          <ImageBox width={30} height={30}
            >
            <Image src="/socialMedia/wechat.png" alt="Line" layout='fill' />
          </ImageBox>
          <ImageBox width={30} height={30}
           >
            <Image src="/socialMedia/email.png" alt="Line" layout='fill' />
          </ImageBox>
        </FlexRow>
      </FlexRow>
    </Wrapper>

  )
}

export default ContactSlot