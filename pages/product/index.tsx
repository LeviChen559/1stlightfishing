import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../utility/layout/home'
import VisionSlot from '../../Slot/visionSlot'
import ProductSlot from '../../Slot/productSlot'
import { productList,targetProductList } from '../../utility/data/staticList'
import { useRouter } from 'next/router'
const  Products:NextPage=()=> {
  const router =useRouter()
  const{locale}= useRouter()
  return <>
  {!locale?.includes("zh")?
  <Layout title="First Light Fishing & Tackle/Product"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
    <VisionSlot src="/product-min.jpg" />
    <ProductSlot parentPage="popular" color='warning' productList={productList} title="POPULAR ITEMS"/>
    <ProductSlot parentPage="intro" color='error' productList={targetProductList} title="SHOPPING BY TARGET"/>
    <ProductSlot parentPage="fish" color='warning' productList={targetProductList} title="SHOPPING BY FISHING"/>
    </>
      </Layout>
:

<Layout title="First Light Fishing & Tackle/Product"
description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
>
  <>
  <VisionSlot src="/product-min.jpg" />
  <ProductSlot parentPage="popular" color='warning' productList={productList} title="熱門商品"/>
  <ProductSlot parentPage="intro" color='error' productList={targetProductList} title="特定目標選購"/>
  <ProductSlot parentPage="fish" color='warning' productList={targetProductList} title="根據魚種選購"/>
  </>
    </Layout>
}
      </>
}

export default Products