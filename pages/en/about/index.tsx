import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import IntroSlot from '../../../Slot/introSlot'
import MapSlot from '../../../Slot/mapSlot'
import StaffSlot from '../../../Slot/staffSlot'
const  About:NextPage=()=> {
  return <Layout>
    <>
    <VisionSlot src="/aboutme.jpeg"/>
    <IntroSlot />
    <MapSlot />
    <StaffSlot/>
    </>
      </Layout>
}

export default About