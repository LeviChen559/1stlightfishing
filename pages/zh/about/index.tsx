import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import IntroSlot from '../../../Slot/introSlot'
import MapSlot from '../../../Slot/mapSlot'
import StaffSlot from '../../../Slot/staffSlot'
const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/關於我">
    <>
    <VisionSlot src="/aboutme.jpeg"/>
    <IntroSlot />
    <MapSlot />
    <StaffSlot/>
    </>
      </Layout>
}

export default About