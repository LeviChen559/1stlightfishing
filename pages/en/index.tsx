import type { NextPage } from 'next'
import HeroSlot from '../../component/heroSlot'
import FeatureSlot from '../../component/featureSlot'
import Layout from '../../utility/layout/home'
import MasonrySlot from '../../component/masonrySlot'
import ServiceSlot from '../../component/serviceSlot'
import BlogSlot from '../../component/blogSlot'
import BrandSlot from '../../component/brandsSlot'
import ProductSlot from '../../component/productSlot'
const Home: NextPage = () => {
  return <Layout>

    <>
      <HeroSlot />
      <FeatureSlot />
      <ProductSlot/>
      <BlogSlot />
      <ServiceSlot />
      <MasonrySlot />
      <BrandSlot />
    </>

  </Layout>

}

export default Home
