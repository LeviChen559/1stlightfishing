import React,{FC} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import{IStaff} from"../../utility/type"
import Image from 'next/image'
interface Props{
    staffContent:IStaff;
    staffList:Array<IStaff>;
}


const Staff:FC<Props>=({staffContent,staffList})=> {
  return (
    <Card sx={{ maxWidth: 345,marginBottom:"2.5%" }}>
      <CardActionArea>
        <Image
          height={200}
          width={345}
          src={staffContent.img}
          alt={staffContent.name}
          objectFit="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {staffContent.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {staffContent.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Staff