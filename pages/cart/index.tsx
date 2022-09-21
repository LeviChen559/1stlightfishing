import React, { FC } from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import LottieAnimation from '../../component/lottieAnimation'
import { useRouter } from 'next/router'
const About: NextPage = () => {

  const { locale } = useRouter()

  return <>
    {!locale?.includes("zh") ?

      <Layout title={"Cart ｜ First Light Fishing & Tackle"}
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/cart.jpeg" />
          <LottieAnimation src="/noDataFound.json" />
        </>
      </Layout>
      :
      <Layout title={"購物車 ｜ First Light Fishing & Tackle"}
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/cart.jpeg" />
          <LottieAnimation src="/noDataFound.json" />
        </>
      </Layout>

    }
  </>


}

export default About