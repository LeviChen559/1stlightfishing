import React, { FC, useEffect, MouseEvent,MouseEventHandler,useState,useRef } from 'react'
import { ImageBox, Wrapper, TextContainer, TextBox } from './style'
import { H3, H5, H6, H4 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import TextField from '@mui/material/TextField';
import { FlexCol, FlexRowNoChange } from '../../component/commonStyle'
import Divider from '@mui/material/Divider';
import { IStyle } from '../../utility/type'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useRouter } from 'next/router'

interface IContact{
  email?:string;
  subject?:string;
  name?:string;
  phone?:string;
  message?:string;
}


const ContactSlot: FC = ({}) => {
  
  const { locale } = useRouter()
  


  const [data,setData] = useState<IContact>( {
    email:"",
    subject:"",
    phone:"",
    name:"",
    message:""
  })


  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log('Sending');
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    
 
    
    setData(({...data,name:"",subject:"",phone:"",message:"",email:""}))
    console.log("data",data)
  }
  const handleCancle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setData(({...data,name:"",subject:"",phone:"",message:"",email:""}))
  }


  return (
    <Wrapper >
      <TextBox >
        {!locale?.includes("zh") ?
          <H3 color={theme.palette.background.default} fontWeight={400}>Contact Us</H3>
          :
          <H3 color={theme.palette.background.default} fontWeight={400}>聯繫我們</H3>
        }
      </TextBox>
      {!locale?.includes("zh") ?
      
        <TextContainer>
         
          <TextField required id="outlined-basic" label="E-mail" variant="outlined"
          value={data.email}
          onChange={(e)=>{setData({...data,email:e.target.value})}} 
         
          
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, },
          }} />
          <TextField required id="filled-basic" label="Subject" variant="outlined" type='email'
           value={data.subject}
           onChange={(e)=>{setData({...data,subject:e.target.value})}} 
          
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField id="filled-basic" label="Phone" type='number' variant="outlined" 
           value={data.phone}
           onChange={(e)=>{setData({...data,phone:e.target.value})}} 
         

          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField required id="filled-basic" label="Name" type='text' variant="outlined" 
           value={data.name}
           onChange={(e)=>{setData({...data,name:e.target.value})}} 
         
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField multiline required id="standard-basic" label="Message" variant="outlined" rows={3} 
           value={data.message}
           onChange={(e)=>{setData({...data,message:e.target.value})}} 
         
          sx={{
            backgroundColor: theme.palette.common.white, input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800,
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }}
            inputProps={{ style: { color: theme.palette.background.default } }}
          />
          <FlexRowNoChange margin="2.5% 0 0 0">
            <BasicButtons width="100px" text="Cancle" margin="0 2.5%" handleLinkClick={handleCancle} />
            <BasicButtons width="100px" text="Submit" margin="0 2.5%" handleLinkClick={handleSubmit} />
          </FlexRowNoChange>
        </TextContainer>
        :
        <TextContainer>
          <TextField required id="outlined-basic" label="信箱" variant="outlined" 
           value={data.email}
           onChange={(e)=>{setData({...data,email:e.target.value})}} 
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, },
          }} />
          <TextField required id="filled-basic" label="主旨" variant="outlined" type='email' 
           value={data.subject}
           onChange={(e)=>{setData({...data,subject:e.target.value})}} 
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField id="filled-basic" label="電話" type='number' variant="outlined" 
           value={data.phone}
           onChange={(e)=>{setData({...data,phone:e.target.value})}} 
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField required id="filled-basic" label="姓名" type='text' variant="outlined" 
           value={data.name}
           onChange={(e)=>{setData({...data,name:e.target.value})}} 
          sx={{
            backgroundColor: theme.palette.common.white,
            input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800, marginBottom: 2
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }} />
          <TextField multiline required id="standard-basic" label="訊息" variant="outlined" rows={3} 
           value={data.message}
           onChange={(e)=>{setData({...data,message:e.target.value})}} 
          sx={{
            backgroundColor: theme.palette.common.white, input: { color: theme.palette.background.default },
            width: "75%", maxWidth: 800,
          }} InputLabelProps={{
            style: { color: theme.palette.background.default, }
          }}
            inputProps={{ style: { color: theme.palette.background.default } }}
          />
          <FlexRowNoChange margin="2.5% 0 0 0">
            <BasicButtons width="100px" text="清除" margin="0 2.5%" handleLinkClick={handleCancle} />
            <BasicButtons width="100px" text="送出" margin="0 2.5%" handleLinkClick={handleSubmit} />
          </FlexRowNoChange>
        </TextContainer>
      }
      <Divider variant="middle" sx={{ backgroundColor: theme.palette.background.default, width: "70%", maxWidth: 800, margin: 5 }} />
      {!locale?.includes("zh")?
      <FlexCol borderRadius="0" alignItems='flex-start' justifyContent='space-evenly' width="75%" maxWidth={800} padding="2%">
        <FlexRowNoChange justifyContent='flex-start' >
          <PhoneIphoneIcon sx={{ fontSize: 20, marginRight: 1 }} />
          <H5 lineHeight={1.5}>TEL: (604) 558-3474</H5>
        </FlexRowNoChange>
        <FlexRowNoChange justifyContent='flex-start'><EmailIcon sx={{ fontSize: 20, marginRight: 1 }} />
          <H5 lineHeight={1.5}>Email:  info@1stlightfishing.com</H5>
        </FlexRowNoChange>
        <FlexRowNoChange justifyContent='flex-start'><FmdGoodIcon sx={{ fontSize: 20, marginRight: 1 }} />
          <H5 lineHeight={1.5}>Address: #3 - 5901 Broadway, Burnaby BC V5B 2Y1</H5>
        </FlexRowNoChange>
      </FlexCol>
      :
      <FlexCol borderRadius="0" alignItems='flex-start' justifyContent='space-evenly' width="75%" maxWidth={800} padding="2%">
      <FlexRowNoChange justifyContent='flex-start' >
        <PhoneIphoneIcon sx={{ fontSize: 20, marginRight: 1 }} />
        <H5 lineHeight={1.5}>電話: (604) 558-3474</H5>
      </FlexRowNoChange>
      <FlexRowNoChange justifyContent='flex-start'><EmailIcon sx={{ fontSize: 20, marginRight: 1 }} />
        <H5 lineHeight={1.5}>電郵:  info@1stlightfishing.com</H5>
      </FlexRowNoChange>
      <FlexRowNoChange justifyContent='flex-start'><FmdGoodIcon sx={{ fontSize: 20, marginRight: 1 }} />
        <H5 lineHeight={1.5}>地址: #3 - 5901 Broadway, Burnaby BC V5B 2Y1</H5>
      </FlexRowNoChange>
    </FlexCol>

}
    </Wrapper>

  )
}

export default ContactSlot