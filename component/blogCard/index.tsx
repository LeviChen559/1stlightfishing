import React, { FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ICard } from "../../utility/type"
import { theme, themePalette } from "../../utility/theme";
import Box from '@mui/material/Box';
import AOS from 'aos';
import { useMediaQuery } from '@mui/material';
import 'aos/dist/aos.css';

interface Props {
  blogContent: ICard;
  blogList: Array<ICard>
}

const BlogCard: FC<Props> = ({ blogContent, blogList }) => {
  useEffect(() => { AOS.init(); },)
  const matches = useMediaQuery('(min-width:1200px)');

  return <>
    {matches ?
      <Card
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay={blogContent.delay}
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        sx={{width:"30%", maxWidth: 330, borderRadius: 2, backgroundColor: themePalette.main,
         boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.25)",
         margin:"2%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], }} aria-label="recipe">
              S
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={blogContent.title}
          subheader={blogContent.subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={blogContent.image}
          alt={blogContent.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {blogContent.description.substring(0, 100) + "..."}
          </Typography>
        </CardContent>
      </Card>
      :
      <Card
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay={blogContent.delay}
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        sx={{ width:"90%",
          maxWidth: 375, borderRadius: 2, backgroundColor: themePalette.main, display: "flex",
          justifyContent: 'space-between', margin: 1, boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.25)"
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
          <CardContent sx={{ flex: '10 auto' }}>
            <Typography component="div" variant="h6">
              {blogContent.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {blogContent.subheader}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={blogContent.image}
          alt="Live from space album cover"
        />
      </Card>
    }
  </>;
}

export default BlogCard