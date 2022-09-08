import React, { FC,useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Wrapper} from "./masonrySlot.style"
import Image from 'next/image'
import AOS from 'aos';
import useMediaQuery from '@mui/material/useMediaQuery';interface Props {
  img:string,
  title:string,
}
const itemData = [
  {
    img: "/imageBank/image1.png",
    title: 'Bed',
  },
  {
    img: "/imageBank/image3.png",
    title: 'Books',
  },
  {
    img: "/imageBank/image2.png",
    title: 'Sink',
  },
  {
    img: "/imageBank/image4.png",
    title: 'Kitchen',
  },
  {
    img: "/imageBank/image5.png",
    title: 'Blinds',
  },
  {
    img: "/imageBank/image6.png",
    title: 'Chairs',
  },
  {
    img: "/imageBank/image7.png",
    title: 'Laptop',
  },
  {
    img: "/imageBank/image8.png",
    title: 'Doors',
  },
  {
    img: "/imageBank/image9.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image10.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image11.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image12.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image13.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image14.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image15.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image16.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image17.png",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image18.png",
    title: 'Coffee',
  }

];
const MasonrySlot: FC = () => {
  useEffect(()=> { AOS.init();},)
  const matches= useMediaQuery("(max-width: 768px)")
  return (
    <Wrapper>
    {matches?  <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} 
          data-aos="flip-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>:
      <ImageList variant="masonry" cols={6} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} 
          data-aos="flip-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>}
    </Wrapper>
  );
}
export default MasonrySlot





