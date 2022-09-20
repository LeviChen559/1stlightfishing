import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import ContactSlot from '../../Slot/contactSlot'

const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Contact"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
    <VisionSlot src="/contact-min.png"/>
      <ContactSlot/>
      </>
      </Layout>
}

export default About