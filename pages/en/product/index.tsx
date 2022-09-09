import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'

const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Product">
    <VisionSlot src="/product.avif"/>

      </Layout>
}

export default Products