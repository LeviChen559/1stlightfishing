import React,{FC} from 'react'
import type { NextPage } from 'next'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import ProductSlot from '../../../Slot/productSlot'
import { productList,targetProductList } from '../../../utility/data/staticList'
const  Products:NextPage=()=> {
  return <Layout title="First Light Fishing & Tackle/產品"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  
  >
    <>
    <VisionSlot src="/product-min.jpg"/>
    <ProductSlot parentPage='popular' color='warning' productList={productList} title="熱銷商品"/>
    <ProductSlot parentPage='intro' color='error' productList={targetProductList} title="特定目標商品"/>
    <ProductSlot parentPage='fish' color='info' productList={targetProductList} title="根據魚種選購"/>
    </>
      </Layout>
}

export default Products