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
  { id:"/imageBank/image1.svg",
    img: "/imageBank/image1.svg",
    title: 'Bed',
  },
  { id:"/imageBank/image3.svg",
    img: "/imageBank/image3.svg",
    title: 'Books',
  },
  { id:"/imageBank/image2.svg",
    img: "/imageBank/image2.svg",
    title: 'Sink',
  },
  { id:"/imageBank/image4.svg",
    img: "/imageBank/image4.svg",
    title: 'Kitchen',
  },
  { id:"/imageBank/image5.svg",
    img: "/imageBank/image5.svg",
    title: 'Blinds',
  },
  { id:"/imageBank/image6.svg",
    img: "/imageBank/image6.svg",
    title: 'Chairs',
  },
  { id:"/imageBank/image7.svg",
    img: "/imageBank/image7.svg",
    title: 'Laptop',
  },
  { id:"/imageBank/image8.svg",
    img: "/imageBank/image8.svg",
    title: 'Doors',
  },
  { id:"/imageBank/image9.svg",
    img: "/imageBank/image9.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image10.svg",
    img: "/imageBank/image10.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image11.svg",
    img: "/imageBank/image11.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image12.svg",
    img: "/imageBank/image12.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image13.svg",
    img: "/imageBank/image13.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image14.svg",
    img: "/imageBank/image14.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image15.svg",
    img: "/imageBank/image15.jpg",
    title: 'Coffee',
  },
  { id:"/imageBank/image16.svg",
    img: "/imageBank/image16.jpg",
    title: 'Coffee',
  },
  { id:"/imageBank/image17.svg",
    img: "/imageBank/image17.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image18.svg",
    img: "/imageBank/image18.svg",
    title: 'Coffee',
  },
  { id:"/imageBank/image19.svg",
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





