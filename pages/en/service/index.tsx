import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Service">
    <VisionSlot src="/service.avif"/>

      </Layout>
}

export default About