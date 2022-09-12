import React,{ FC} from 'react';
import Button from '@mui/material/Button';
import {IStyle} from"../../utility/type"

const BasicButtons:FC<IStyle> =({text, background, width,margin})=> {
  return (
    
      <Button variant="contained" color='warning' sx={{background:background,width:width,margin:margin}}>{text}</Button>
     
  );
}


export default BasicButtons