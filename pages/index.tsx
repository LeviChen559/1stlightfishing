import type { NextPage } from 'next'
import HeroSlot from '../Slot/heroSlot'
import FeatureSlot from '../Slot/featureSlot'
import Layout from '../utility/layout/home'
import MasonrySlot from '../Slot/masonrySlot'
import ServiceSlot from '../Slot/serviceSlot'
import BlogSlot from '../Slot/blogSnapSlot'
import BrandSlot from '../Slot/brandsSlot'
import ProductSlot from '../Slot/productSlot'

import {productList} from '../utility/data/staticList'

const Home: NextPage = () => {
  return <Layout title="First Light Fishing & Tackle/Home">

    <>
      <HeroSlot />
      <FeatureSlot />
      <ProductSlot parentPage='popular' color='warning' title="POPULAR ITEMS" productList={productList}/>
      <BlogSlot />
      <ServiceSlot />
      <MasonrySlot />
      <BrandSlot />
    </>

  </Layout>

}

export default Home
