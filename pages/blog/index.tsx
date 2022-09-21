import React, { FC,useEffect,useState } from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import BlogCardUI from '../../arrayUI/blogCardUI'
import { FlexRow } from '../../component/commonStyle'
import BlogSlot from "../../Slot/blogSlot"
import { useRouter } from 'next/router'
import { IHead } from '../../utility/type'

const About: NextPage = () => {
  const { locale } = useRouter()

  return <>
   {!locale?.includes("zh")? 
      <Layout
        title="Blog | First Light Fishing & Tackle"
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/blogHero-min.jpg" />
          <BlogSlot />
        </>
      </Layout>
   :
   <Layout
   title="部落格 | First Light Fishing & Tackle"
   description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
 >
   <>
     <VisionSlot src="/blogHero-min.jpg" />
     <BlogSlot />
   </>
 </Layout>
  }
  </>
}

export default About