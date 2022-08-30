import * as React from 'react';
import Button from '@mui/material/Button';

export const BasicButtons=({text}:{text:string,})=> {
  return (
    
      <Button variant="contained" sx={{background:'#F3BC2D'}}>{text}</Button>
     
   
  );
}


export default BasicButtons