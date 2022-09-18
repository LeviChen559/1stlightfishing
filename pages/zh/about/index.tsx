import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import IntroSlot from '../../../Slot/introSlot'
import MapSlot from '../../../Slot/mapSlot'
import StaffSlot from '../../../Slot/staffSlot'
const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/關於我" 
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  >
    <>
    <VisionSlot src="/aboutme.jpeg"/>
    <IntroSlot />
    <MapSlot />
    <StaffSlot/>
    </>
      </Layout>
}

export default About