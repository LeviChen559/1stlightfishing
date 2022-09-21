import React, { FC } from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import IntroSlot from '../../Slot/introSlot'
import MapSlot from '../../Slot/mapSlot'
import StaffSlot from '../../Slot/staffSlot'
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { locale, locales, asPath } = useRouter();
  return <>
    {!locale?.includes("zh") ?
      <Layout title="About | First Light Fishing & Tackle"
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/aboutme.jpeg" />
          <IntroSlot />
          <MapSlot />
          <StaffSlot />
        </>
      </Layout>

      : <Layout title="關於 | First Light Fishing & Tackle"
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/aboutme.jpeg" />
          <IntroSlot />
          <MapSlot />
          <StaffSlot />
        </>
      </Layout>
    }
  </>

}

export default About