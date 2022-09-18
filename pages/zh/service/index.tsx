import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import GuideSlot from '../../../Slot/guideSlot'
import ZoomClassSlot from '../../../Slot/zoomClassSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/服務"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  
  >
    <>
    <VisionSlot src="/service-min.jpg"/>
      <GuideSlot/>
      <ZoomClassSlot/>
    </>
      </Layout>
}

export default About