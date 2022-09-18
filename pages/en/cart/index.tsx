import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ContactSlot from '../../../Slot/contactSlot'
import LottieAnimation from '../../../component/lottieAnimation'
const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Cart">
    <>
    <VisionSlot src="/cart.jpeg"/>
     <LottieAnimation src="/noDataFound.json"/>
      </>
      </Layout>
}

export default About