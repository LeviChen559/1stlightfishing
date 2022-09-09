import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Contact">
    <VisionSlot src="/contact.png"/>

      </Layout>
}

export default About