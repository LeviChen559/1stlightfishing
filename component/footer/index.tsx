import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Logo from '../logo';
import {H6} from "../commonStyle" 
const Footer=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',height:300,display: 'flex', flexDirection:"column",justifyContent: 'space-evenly',alignItems: 'center',}}>
      <Logo height={45} width={95}/>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="HOME" label="HOME"  sx={{color: "white"}}/>
        <Tab value="ABOUT" label="ABOUT"  sx={{color: "white"}}/>
        <Tab value="PRODUCTS" label="PRODUCTS" sx={{color: "white"}}/>
        <Tab value="BLOGS" label="BLOGS" sx={{color: "white"}}/>
        <Tab value="CONTACT" label="CONTACT"sx={{color: "white"}} />
      </Tabs>
      <H6>© Copyright by first light fishing & tackle 2022</H6>
    </Box>
  );
}

export default Footer