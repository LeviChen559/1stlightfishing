import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'

const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/產品">
    <VisionSlot src="/product.avif"/>

      </Layout>
}

export default Products