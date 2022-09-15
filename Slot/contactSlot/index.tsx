import React, { FC, useEffect, MouseEvent } from 'react'
import Image from 'next/image'
import { ImageBox, Wrapper, TextContainer, TextBox } from './style'
import { H3, H5, H6, H4 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FlexRow, FlexCol } from '../../component/commonStyle'
import Divider from '@mui/material/Divider';
import { IStyle } from '../../utility/type'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useRouter } from 'next/router'
const ContactSlot: FC<IStyle> = ({ height, width }) => {
  const router = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();


  }

  return (
    <Wrapper >
      <TextBox >
        {!router.pathname.includes("/zh") ?
          <H3 color={theme.palette.background.default} fontWeight={400}>Contact Us</H3>
          :
          <H3 color={theme.palette.background.default} fontWeight={400}>聯繫我們</H3>
        }
      </TextBox>
      {!router.pathname.includes("/zh") ?
        <TextContainer>
          <TextField required id="outlined-basic" label="Email" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField required id="filled-basic" label="Subline" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField id="filled-basic" label="Phone" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField required id="filled-basic" label="Name" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField multiline required id="standard-basic" label="Message" variant="outlined" sx={{
            backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800,
            marginBottom: 2, height: 200, overflow: "auto"
          }} />
          <FlexRow >
            <BasicButtons width="100px" text="Cancle" margin="0 2.5%" handleLinkClick={handleSubmit} />
            <BasicButtons width="100px" text="Submit" margin="0 2.5%" handleLinkClick={handleSubmit} />
          </FlexRow>
        </TextContainer>
        :
        <TextContainer>
          <TextField required id="outlined-basic" label="信箱" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField required id="filled-basic" label="主旨" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField id="filled-basic" label="電話" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField required id="filled-basic" label="姓名" variant="outlined" sx={{ backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800, marginBottom: 2 }} />
          <TextField multiline required id="standard-basic" label="訊息" variant="outlined" sx={{
            backgroundColor: theme.palette.background.default, width: "75%", maxWidth: 800,
            marginBottom: 2, height: 200, overflow: "auto"
          }} />
          <FlexRow >
            <BasicButtons width="100px" text="取消" margin="0 2.5%" handleLinkClick={handleSubmit} />
            <BasicButtons width="100px" text="送出" margin="0 2.5%" handleLinkClick={handleSubmit} />
          </FlexRow>
        </TextContainer>

      }
      <Divider variant="middle" sx={{ backgroundColor: theme.palette.background.default, width: "70%", maxWidth: 800, margin: 5 }} />
      <FlexCol borderRadius="0" alignItems='flex-start' justifyContent='space-evenly' >
       <FlexRow justifyContent='flex-start' ><PhoneIphoneIcon sx={{ fontSize: 20, marginRight:1 }} /> <H5 lineHeight={1.5}> (604) 558-3474</H5></FlexRow>
       <FlexRow justifyContent='flex-start'><EmailIcon sx={{ fontSize: 20, marginRight:1 }} /> <H5 lineHeight={1.5}>  info@1stlightfishing.com</H5></FlexRow>
       <FlexRow justifyContent='flex-start'><FmdGoodIcon sx={{ fontSize: 20, marginRight:1 }} /> <H5 lineHeight={1.5}> #3 - 5901 Broadway, Burnaby BC V5B 2Y1</H5></FlexRow>
      </FlexCol>


    </Wrapper>

  )
}

export default ContactSlot