import React, { FC, useEffect } from 'react';

import { Wrapper, Masonry, ImageBox } from "./style"
import Image from 'next/image'
import { useRouter } from 'next/router';
import { H3, FlexCol,H5 } from "../../component/commonStyle"
interface Props {
  img: string,
  title: string,
}
const itemData = [
  {
    id: "/imageBank/image1.svg",
    img: "/imageBank/image1.svg",
    title: 'Bed',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image3.svg",
    img: "/imageBank/image3.svg",
    title: 'Books',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image2.svg",
    img: "/imageBank/image2.svg",
    title: 'Sink',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image4.svg",
    img: "/imageBank/image4.svg",
    title: 'Kitchen',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image5.svg",
    img: "/imageBank/image5.svg",
    title: 'Blinds',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image6.svg",
    img: "/imageBank/image6.svg",
    title: 'Chairs',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image8.svg",
    img: "/imageBank/image8.svg",
    title: 'Doors',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image9.svg",
    img: "/imageBank/image9.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image10.svg",
    img: "/imageBank/image10.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image11.svg",
    img: "/imageBank/image11.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image12.svg",
    img: "/imageBank/image12.svg",
    title: 'Coffee',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image13.svg",
    img: "/imageBank/image13.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image14.svg",
    img: "/imageBank/image14.svg",
    title: 'Coffee',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image15.svg",
    img: "/imageBank/image15.jpg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image16.svg",
    img: "/imageBank/image16.jpg",
    title: 'Coffee',
    gridRow:"span 2"
  },
  {
    id: "/imageBank/image17.svg",
    img: "/imageBank/image17.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image18.svg",
    img: "/imageBank/image18.svg",
    title: 'Coffee',
    gridRow:"span 1"
  },
  {
    id: "/imageBank/image19.svg",
    img: "/imageBank/image19.svg",
    title: 'Coffee',
    gridRow:"span 1"
  }

];
const MasonrySlot: FC = () => {
  const {locale} =useRouter()
  return (
    <Wrapper>
        {!locale?.includes("zh")? 
      <FlexCol height="100px">
        <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)">Adventure</H3>
        <H5 margin='20px 0 0 0'>Nature is waiting for you to write your adventures.</H5>
      </FlexCol>
        :
        <FlexCol height="100px">
        <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)">旅程</H3>
        <H5 margin='20px 0 0 0'>大自然正等著你寫下自己的旅程</H5>
      </FlexCol>
        }
      <Masonry>

        {itemData.map((item) => (
          <ImageBox key={item.img} gridRow={item.gridRow}>
            <Image src={item.img} alt={item.title} objectFit="cover" layout="fill"
            />
          </ImageBox>


        ))}
      </Masonry>


    </Wrapper>
  );
}
export default MasonrySlot





