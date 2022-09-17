import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ConstructionAnim from '../../../component/construction'
import ProductSlot from '../../../Slot/productSlot'
import { productList,targetProductList } from '../../../utility/data/productList'
const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/產品">
    <>
    <VisionSlot src="/product-min.jpg"/>
    {/* <ConstructionAnim/> */}
    <ProductSlot color='warning' productList={productList} title="熱銷商品"/>
    <ProductSlot color='error' productList={targetProductList} title="特定目標商品"/>
    <ProductSlot color='info' productList={targetProductList} title="根據魚種選購"/>
    </>
      </Layout>
}

export default Products