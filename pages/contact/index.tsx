import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import ContactSlot from '../../Slot/contactSlot'
import { useRouter } from 'next/router'


const  About:NextPage=()=> {
  const { locale, locales, asPath } = useRouter();

  return <>
   {!locale?.includes("zh")?
   <Layout title="Contact | First Light Fishing & Tackle"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
    <VisionSlot src="/contact-min.png"/>
      <ContactSlot/>
      </>
      </Layout>
      :
      <Layout title="聯繫 | First Light Fishing & Tackle"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
    <VisionSlot src="/contact-min.png"/>
      <ContactSlot/>
      </>
      </Layout>

}
      </>
}

export default About