import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import BlogCardUI from '../../../arrayUI/blogCardUI'
import { FlexRow } from '../../../component/commonStyle'
const blogList = [{
  title: "Hello to the Internet!",
  subheader: "May 12, 2017",
  image: "/blogs/blog1.png",
  description: "Well well well, after five years since our grand opening in 2012, we finally found some time away from manning",
  delay:100
}, {
  title: "Story Behind The Vision",
  subheader: "May 13, 2017",
  image: "/blogs/blog2.png",
  description: "Fishing sure can be an unpredictable activity, sometimes it is fast paced and exciting when your rod is fully bent",
  delay:300
}, {
  title: "CARP BEHAVIOUR 101",
  subheader: "May 14, 2017",
  image: "/blogs/blog3.png",
  description: "At First Light Fishing & Tackle, one of our most favourite fish species to target is carp. Intelligent, adaptable, and",
  delay:500
},


]



const  About:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/部落格">
    <>
    <VisionSlot src="/blogs/blogHero.png"/>
    <FlexRow margin="5%">

    <BlogCardUI justifyContent="flex-start" blogList={blogList}/>
    </FlexRow>
    </>

      </Layout>
}

export default About