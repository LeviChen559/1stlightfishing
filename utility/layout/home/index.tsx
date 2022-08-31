import React, { FC } from 'react'
import MenuBar from '../../../component/menuBar'
import MenuZH from '../../../component/menuZH'
import Footer from '../../../component/footer'
import { BackgroundContainer, Wrapper, Header, Content } from './home.style'
import Head from 'next/head'
import {useRouter} from 'next/router'
interface Props {
  children: JSX.Element,
};

const Layout: FC<Props> = ({ children }: Props) => {
  const router = useRouter()
  return <BackgroundContainer>
    <Wrapper>
      <Head>
        <title>First Light Fishing & Tackle</title>
        <meta charSet="utf-8" name="description" content="1stLightTackle is the best fishing store in Burnaby,BC." />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Merienda+One&family=Rock+Salt&display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          </Head>
          <Header>
            {router.pathname ==='/en'?
            <MenuBar />
            :
            <MenuZH/>
          }
          </Header>
          <Content>
            {children}
          </Content>
          <Footer />
        </Wrapper>
      </BackgroundContainer>
}


      export default Layout
