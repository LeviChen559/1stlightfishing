import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ProductSlot from '../../../Slot/productSlot'
import { productList,targetProductList } from '../../../utility/data/staticList'
import { useRouter } from 'next/router'
const  Products:NextPage=()=> {
  const router =useRouter()
  return <Layout title="First Light Fishing & Tackle/Product">
    <>
    <VisionSlot src="/product-min.jpg" />
    <ProductSlot parentPage="popular" color='warning' productList={productList} title="POPULAR ITEMS"/>
    <ProductSlot parentPage="intro" color='error' productList={targetProductList} title="SHOPPING BY TARGET"/>
    <ProductSlot parentPage="fish" color='warning' productList={targetProductList} title="SHOPPING BY FISHING"/>

    </>
      </Layout>
}

export default Products