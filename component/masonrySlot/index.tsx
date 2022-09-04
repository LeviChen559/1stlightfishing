import React, { FC,useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Wrapper} from "./masonrySlot.style"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from '@mui/material/useMediaQuery';interface Props {
  img:string,
  title:string,
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1592275080939-9ee1757ae0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1634540391897-f7929a7674ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1592918746966-5ba08b5e2ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1550504473-08c751f3349f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1559202541-ce1818fa6684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmaXNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1584910705249-ee4dc2751c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxmaXNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1604959967168-a24e6069f58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxmaXNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
  //   title: 'Storage',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
  //   title: 'Candle',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  //   title: 'Coffee table',
  // },
];
const MasonrySlot: FC = () => {
  useEffect(()=> { AOS.init();},)
  const matches= useMediaQuery("(max-width: 768px)")
  return (
    <Wrapper>
    {matches?  <ImageList variant="masonry" cols={3} gap={8}>
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
      <ImageList variant="masonry" cols={4} gap={8}>
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





