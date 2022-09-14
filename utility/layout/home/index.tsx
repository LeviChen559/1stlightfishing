import React, { FC, useState,useEffect } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import MenuBar from '../../../component/menuBar'
import Footer from '../../../component/footer'
import { BackgroundContainer, Wrapper, Header, Content } from './home.style'
import Head from 'next/head'
import {useRouter} from 'next/router'
import StickyBox from "react-sticky-box";
import {theme} from"../../theme"
import { LocalBusinessJsonLd,NextSeo } from 'next-seo';

interface Props {
  children: JSX.Element,
  title: string
};

const Layout: FC<Props> = ({ children,title }: Props) => {
  const [bgcolor,setBgcolor]=useState<string>(theme.palette.background.default)
  const [opacity,setOpacity]=useState<number>(0)
  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setBgcolor(theme.palette.primary.light)
      setOpacity(.95)
    } else {
      setBgcolor( theme.palette.background.default)
      setOpacity(0)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', listenScrollEvent)
  },[])
 
  const {pathname} = useRouter()
  return <BackgroundContainer>
    <Wrapper>
    <NextSeo
      openGraph={{
        type: 'website',
        url: 'https://www.happy-cat.ca',
        title: title,
        description: "Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing.",
        images: [
          {
            url:  '/apple-touch-icon.png',
            width: 180,
            height: 180,
            alt: 'site icon',
          },
          {
            url: '/favicon-32x32.png',
            width: 32,
            height: 32,
            alt: 'site icon',
          },
          {
            url: '/favicon-16x16.png',
            width: 16,
            height: 16,
            alt: 'site icon',
          },
        ],
      }}
    />
    <LocalBusinessJsonLd
     type="Store"
     id="http://happy-cat.ca"
     name={title}
     description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
     url="http://happy-cat.ca"
     telephone="(604) 558-3474"
     address={{
       streetAddress: '5901 Broadway #3',
       addressLocality: 'Burnaby',
       addressRegion: 'BC',
       postalCode: 'V5B 2Y1',
       addressCountry: 'CA',
     }}
     geo={{
       latitude: '49.26',
       longitude: '-122.97',
       
     }}
     images={[
       '/apple-touch-icon.png',
       '/favicon-32x32.png',
       '/favicon-16x16.png',
     ]}
     sameAs={[
       'www.company-website-url1.dev',
       'www.company-website-url2.dev',
       'www.company-website-url3.dev',
     ]}
     openingHours={[
       {
         opens: '10:00',
         closes: '18:00',
         dayOfWeek: [
           'Monday',
           'Tuesday',
           'Wednesday',
           'Thursday',
           'Friday',
           'Saturday',
         ],
         validFrom: '2019-12-23',
         validThrough: '2023-04-02',
       },
       {
         opens: '11:00',
         closes: '17:00',
         dayOfWeek: 'Sunday',
         validFrom: '2019-12-23',
         validThrough: '2023-04-02',
       },
     ]}
    //  rating={{
    //    ratingValue: '4.5',
    //    ratingCount: '2',
    //  }}
    //  review={[
    //    {
    //      author: 'John Doe',
    //      datePublished: '2006-05-04',
    //      name: 'A masterpiece of literature',
    //      reviewBody:
    //        'I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.',
    //      reviewRating: {
    //        bestRating: '5',
    //        worstRating: '1',
    //        reviewAspect: 'Ambiance',
    //        ratingValue: '4',
    //      },
    //    },
    //    {
    //      author: 'Bob Smith',
    //      datePublished: '2006-06-15',
    //      name: 'A good read.',
    //      reviewBody: "Catcher in the Rye is a fun book. It's a good book to read.",
    //      reviewRating: {
    //        ratingValue: '4',
    //      },
    //    },
    //  ]}
    //  makesOffer={[
    //    {
    //      priceSpecification: {
    //        type: 'UnitPriceSpecification',
    //        priceCurrency: 'EUR',
    //        price: '1000-10000',
    //      },
    //      itemOffered: {
    //        name: 'Motion Design Services',
    //        description:
    //          'We are the expert of animation and motion design productions.',
    //      },
    //    },
    //    {
    //      priceSpecification: {
    //        type: 'UnitPriceSpecification',
    //        priceCurrency: 'EUR',
    //        price: '2000-10000',
    //      },
    //      itemOffered: {
    //        name: 'Branding Services',
    //        description:
    //          'Real footage is a powerful tool when it comes to show what the business is about. Can be used to present your company, show your factory, promote a product packshot, or just tell any story. It can help create emotional links with your audience by showing punchy images.',
    //      },
    //    },
    //  ]}
    //  areaServed={[
    //    {
    //      geoMidpoint: {
    //        latitude: '41.108237',
    //        longitude: '-80.642982',
    //      },
    //      geoRadius: '1000',
    //    },
    //    {
    //      geoMidpoint: {
    //        latitude: '51.108237',
    //        longitude: '-80.642982',
    //      },
    //      geoRadius: '1000',
    //    },
    //  ]}
     action={{
       actionName: 'potentialAction',
       actionType: 'ReviewAction',
       target: 'https://www.example.com/review/this/business',
     }}
    />
      <Head>    
        <link rel="alternate" hrefLang="en-ca" href="https://1stlightfishing.vercel.app/en.html"></link>
        <link rel="alternate" hrefLang="zh-tw" href="https://1stlightfishing.vercel.app/zh.html"></link>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>       */}
          </Head>
          <StickyBox  style={{width: '100vw',zIndex: 90, height: 100, }}>
          <Header>
            <MenuBar  opacity={opacity}/>
          </Header>
          </StickyBox>
          <Content>
            {children}
          </Content>
          <Footer />
        </Wrapper>
      </BackgroundContainer>
     
}


      export default Layout
