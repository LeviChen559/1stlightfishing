import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import BlogSlot from '../../../Slot/blogSlot'


const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/部落格"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  
  >
    <>
    <VisionSlot src="/blogHero-min.jpg"/>
    <BlogSlot/>
    </>

      </Layout>
}

export default About