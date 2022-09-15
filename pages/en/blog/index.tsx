import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import BlogCardUI from '../../../arrayUI/blogCardUI'
import { FlexRow } from '../../../component/commonStyle'
import BlogSlot from"../../../Slot/blogSlot"
import { useRouter } from 'next/router'


const  About:NextPage=()=> {
  const router=useRouter()
  return <Layout title="First Light Fishing & Tackle/Blog">
    <>
    <VisionSlot src="/blogHero-min.jpg"/>
  <BlogSlot />
  </>
      </Layout>
}

export default About