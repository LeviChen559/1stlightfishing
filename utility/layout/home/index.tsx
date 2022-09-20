import React, { FC, useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import MenuBar from '../../../component/menuBar'
import Footer from '../../../component/footer'
import { BackgroundContainer, Wrapper, Header, Content } from './style'
import Head from 'next/head'
import { useRouter } from 'next/router'
import StickyBox from "react-sticky-box";
import { theme } from "../../theme"
import { LocalBusinessJsonLd, NextSeo } from 'next-seo';

interface Props {
  children: JSX.Element,
  title: string
  description: string
};

const Layout: FC<Props> = ({ children, title,description }) => {
  const [bgcolor, setBgcolor] = useState<string>(theme.palette.background.default)
  const [opacity, setOpacity] = useState<number>(0)
  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setBgcolor(theme.palette.primary.light)
      setOpacity(.95)
    } else {
      setBgcolor(theme.palette.background.default)
      setOpacity(0)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  const { pathname } = useRouter()
  return <BackgroundContainer>
    <Wrapper>
      <NextSeo
        title={title}
        description={description}
        canonical='https://www.happy-cat.ca'
        openGraph={{
          type: 'website',
          url: 'https://www.happy-cat.ca',
          title: 'First Light Fishing & Tackle',
          description: "Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing.",
          images: [
            {
              url: '/siteIcon/apple-touch-icon.png',
              width: 180,
              height: 180,
              alt: 'site icon',
            },
            {
              url: '/siteIcon/favicon-32x32.png',
              width: 32,
              height: 32,
              alt: 'site icon',
            },
            {
              url: '/siteIcon/favicon-16x16.png',
              width: 16,
              height: 16,
              alt: 'site icon',
            },
          ],
        }}
      />
      <Head>
        <link rel="alternate" hrefLang="en-ca" href="https://1stlightfishing.vercel.app/en.html"></link>
        <link rel="alternate" hrefLang="zh-tw" href="https://1stlightfishing.vercel.app/zh.html"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/siteIcon/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/siteIcon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/siteIcon/favicon-16x16.png"></link>
        <link rel="shortcut icon" href="#"></link>
        <link rel="icon" href="data:;base64,="></link>
      </Head>
      <StickyBox style={{ width: '100vw', zIndex: 90, height: 100, }}>
        <Header>
          <MenuBar opacity={opacity} />
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
