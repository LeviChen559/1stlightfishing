import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ProductSlot from '../../../Slot/productSlot'
import { productList,targetProductList } from '../../../utility/data/staticList'
const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/產品">
    <>
    <VisionSlot src="/product-min.jpg"/>
    <ProductSlot parentPage='popular' color='warning' productList={productList} title="熱銷商品"/>
    <ProductSlot parentPage='intro' color='error' productList={targetProductList} title="特定目標商品"/>
    <ProductSlot parentPage='fish' color='info' productList={targetProductList} title="根據魚種選購"/>
    </>
      </Layout>
}

export default Products