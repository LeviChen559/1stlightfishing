import React,{ FC} from 'react'
import Menu from '../../../component/menu'
import Footer from '../../../component/footer'
import {BackgroundContainer, Wrapper, Header, Content } from './home.style'
import Head from 'next/head'
interface Props  {
  children: JSX.Element,
};

const Layout:FC<Props> = ({ children }:Props) => {
  return <BackgroundContainer>
  <Wrapper>
     <Head>
      <title>1stLightTackle</title>
      <meta charSet="utf-8" name="description" content="1stLightTackle is the best fishing store in Burnaby,BC." />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Merienda+One&family=Rock+Salt&display=swap" rel="stylesheet"></link>
     </Head>
    <Header>
      <Menu />
    </Header>
    <Content>
      {children}
    </Content>
    <Footer/>

  </Wrapper>
  </BackgroundContainer>
}


export default Layout
