import React, { FC,MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import { IStyle } from "../../utility/type"
import { useRouter } from "next/router"

interface Props{
  text?: string;
  background?: string;
  width?: string;
  margin?: string;
  handleLinkClick?:MouseEventHandler<HTMLButtonElement>
}

const BasicButtons: FC<Props> = ({ text, background, width, margin,handleLinkClick}) => {
  const router = useRouter()
  // const handleLinkClick = () => router.push(href);
  return (

    <Button variant="contained" color='warning' sx={{ background: background, width: width, margin: margin }}
      onClick={handleLinkClick}
    
    >{text}</Button>
  );
}


export default BasicButtons