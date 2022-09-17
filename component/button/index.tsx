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
  color?: "warning" | "error" | "inherit" | "primary" | "secondary" | "success" | "info" | undefined
}

const BasicButtons: FC<Props> = ({ text, background, width, margin,handleLinkClick,color}) => {
  const router = useRouter()
  // const handleLinkClick = () => router.push(href);
  return (

    <Button variant="contained" color={color} sx={{ background: background, width: width, margin: margin }}
      onClick={handleLinkClick}
    
    >{text}</Button>
  );
}


export default BasicButtons