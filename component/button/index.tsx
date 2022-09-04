import React,{ FC} from 'react';
import Button from '@mui/material/Button';

interface Props{
  text?: string;
  background?:string;
  width?:number;
}
const BasicButtons:FC<Props> =({text, background, width})=> {
  return (
    
      <Button variant="contained" color='warning' sx={{background:background,width:width}}>{text}</Button>
     
   
  );
}


export default BasicButtons