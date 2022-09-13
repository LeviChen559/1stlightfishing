import React,{FC} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import{IStaff} from"../../utility/type"
import Image from 'next/image'
import {Box} from"@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
interface Props{
    staffContent:IStaff;
    staffList:Array<IStaff>;
}


const Staff:FC<Props>=({staffContent,staffList})=> {
  const matches = useMediaQuery('(min-width:768px)');

  return <>
    {matches ?
    <Card id={staffContent.id}sx={{ maxWidth: 345,margin:"15px" }}>
      <CardActionArea>
        <Image
          height={200}
          width={345}
          src={staffContent.img}
          alt={staffContent.name}
          objectFit="cover"
        />
        <CardContent>
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"flex-end",}}>
          <Typography gutterBottom variant="h5" component="div">
            {staffContent.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="p" sx={{marginLeft:2,color:"gray"}}>
            {staffContent.nickname}
          </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
           {staffContent.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    :
    <Card id={staffContent.id}sx={{ maxWidth: 300,margin:"15px" }}>
    <CardActionArea>
      <Image
        height={200}
        width={300}
        src={staffContent.img}
        alt={staffContent.name}
        objectFit="cover"
      />
      <CardContent>
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"flex-end",}}>
        <Typography gutterBottom variant="h5" component="div">
          {staffContent.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="p" sx={{marginLeft:2,color:"gray"}}>
          {staffContent.nickname}
        </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
         {staffContent.intro}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  }
  </>;
}

export default Staff