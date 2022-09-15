import React, { FC,useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Wrapper} from "./style"
import Image from 'next/image'
import AOS from 'aos';
import useMediaQuery from '@mui/material/useMediaQuery';


interface Props {
  img:string,
  title:string,
}
const itemData = [
  {
    img: "/imageBank/image1.svg",
    title: 'Bed',
  },
  {
    img: "/imageBank/image3.svg",
    title: 'Books',
  },
  {
    img: "/imageBank/image2.svg",
    title: 'Sink',
  },
  {
    img: "/imageBank/image4.svg",
    title: 'Kitchen',
  },
  {
    img: "/imageBank/image5.svg",
    title: 'Blinds',
  },
  {
    img: "/imageBank/image6.svg",
    title: 'Chairs',
  },
  {
    img: "/imageBank/image7.svg",
    title: 'Laptop',
  },
  {
    img: "/imageBank/image8.svg",
    title: 'Doors',
  },
  {
    img: "/imageBank/image9.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image10.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image11.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image12.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image13.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image14.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image15.jpg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image16.jpg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image17.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image18.svg",
    title: 'Coffee',
  },
  {
    img: "/imageBank/image19.svg",
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





