import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import GuideSlot from '../../../Slot/guideSlot'
import ZoomClassSlot from '../../../Slot/zoomClassSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Service"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
    <VisionSlot src="/service-min.jpg"/>
      <GuideSlot/>
      <ZoomClassSlot/>
    </>
      </Layout>
}

export default About