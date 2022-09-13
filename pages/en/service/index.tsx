import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import GuideSlot from '../../../Slot/guideSlot'
import ZoomClassSlot from '../../../Slot/zoomClassSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Service">
    <>
    <VisionSlot src="/service/service-min.png"/>
      <GuideSlot/>
      <ZoomClassSlot/>
    </>
      </Layout>
}

export default About