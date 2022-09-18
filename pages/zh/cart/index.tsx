import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ContactSlot from '../../../Slot/contactSlot'
import LottieAnimation from '../../../component/lottieAnimation'
const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Cart"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  >
    <>
    <VisionSlot src="/cart.jpeg"/>
     <LottieAnimation src="/noDataFound.json"/>
      </>
      </Layout>
}

export default About