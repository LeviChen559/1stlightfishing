import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ProductSlot from '../../../Slot/productSlot'
import ConstructionAnim from '../../../component/construction'
import { productList,targetProductList } from '../../../utility/data/productList'
const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/Product">
    <>
    <VisionSlot src="/product-min.jpg" />
    {/* <ConstructionAnim/> */}
    <ProductSlot color='warning' productList={productList} title="POPULAR ITEMS"/>
    <ProductSlot color='error' productList={targetProductList} title="SHOPPING BY TARGET"/>
    <ProductSlot color='warning' productList={targetProductList} title="SHOPPING BY FISHING"/>

    </>
      </Layout>
}

export default Products