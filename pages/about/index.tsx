import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import IntroSlot from '../../Slot/introSlot'
import MapSlot from '../../Slot/mapSlot'
import StaffSlot from '../../Slot/staffSlot'
const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/About" 
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
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