import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'

const  About:NextPage=()=> {
  return <Layout>
    <VisionSlot src="/aboutme.jpeg"/>

      </Layout>
}

export default About