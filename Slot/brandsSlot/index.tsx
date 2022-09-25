import React, { FC, useEffect } from 'react'
import Image from 'next/image';
import { Wrapper, } from './style'
import { H3, H4, H5, H6, FlexRow } from "../../component/commonStyle"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Palette } from '@mui/icons-material';
import { theme } from '../../utility/theme';
import { Masonry, ImageBox } from "./style"

interface Props {
  img: string,
  title: string,
}
const itemData = [
  {
    img: "/brands/shimano.png",
    title: 'shimano',
  },
  {
    img: "/brands/daiwa2.png",
    title: 'daiwa',
  },
  {
    img: "/brands/gloomis2.png",
    title: 'gloomis',
  },
  {
    img: "/brands/raven.png",
    title: 'raven',
  },
  {
    img: "/brands/okuma.png",
    title: 'okuma',
  },
  {
    img: "/brands/stcroix.png",
    title: 'st.croix',
  },
  {
    img: "/brands/trophyxl.png",
    title: 'trophyxl',
  }, {
    img: "/brands/dragonfly2.png",
    title: 'dragonfly',
  }, {
    img: "/brands/islander.png",
    title: 'islander',
  }, {
    img: "/brands/gibbs.png",
    title: 'gibbs',
  }, {
    img: "/brands/maruto2.png",
    title: 'maruto',
  }, {
    img: "/brands/owner.png",
    title: 'owner',
  },
  {
    img: "/brands/powerpro.png",
    title: 'powerpro',
  },
  {
    img: "/brands/nanodax.png",
    title: 'nanodax',
  },
  {
    img: "/brands/amika.png",
    title: 'amika',
  },
  {
    img: "/brands/redington.png",
    title: 'redington',
  },
  {
    img: "/brands/scotty.png",
    title: 'scotty',
  },
  {
    img: "/brands/hareline.png",
    title: 'hareline',
  },

]


const BrandSlot: FC = () => {
  const matches = useMediaQuery('(max-width:768px)');
  useEffect(() => { AOS.init(); },)
  return <Wrapper >
    <FlexRow height="150px">
      <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)">Our Support Brands</H3>
    </FlexRow>

    {matches ?
        <ImageList variant="masonry" cols={5} gap={15}> 
          {itemData.map((item) => (
            <ImageListItem key={item.img}
            >
              <img
              data-aos="flip-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        :
        <ImageList variant="masonry" cols={14} gap={15}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}
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
    {/* <Masonry>
      {itemData.map((item) => (
        <ImageBox key={item.img} >
          <Image src={item.img} alt={item.title} objectFit="cover" layout="fill"
          />
        </ImageBox>
      ))}
    </Masonry> */}


  </Wrapper>

}


export default BrandSlot