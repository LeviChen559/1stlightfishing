import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import HeroSlot from '../Slot/heroSlot'
import FeatureSlot from '../Slot/featureSlot'
import Layout from '../utility/layout/home'
import MasonrySlot from '../Slot/masonrySlot'
import ServiceSlot from '../Slot/serviceSlot'
import BlogSlot from '../Slot/blogSnapSlot'
import BrandSlot from '../Slot/brandsSlot'
import ProductSlot from '../Slot/productSlot'
import { productList } from '../utility/data/staticList'
import { useRouter } from 'next/router';
import { ILocale,IHead} from '../utility/type';
import NewsSlot from '../Slot/newsSlot';

const Home: NextPage<ILocale> = () => {
  const { locale, locales, asPath } = useRouter();
 
  return <>
    {!locale?.includes("zh") ?
      <Layout
        title="First Light Fishing & Tackle | Home"
        description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, 
  we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <HeroSlot />
          <FeatureSlot />
          <NewsSlot/>
          <ProductSlot parentPage='popular' color='warning' title="POPULAR ITEMS" productList={productList} />
          <BlogSlot />
          <ServiceSlot />
          <MasonrySlot />
          <BrandSlot />
        </>
      </Layout>
      :
      <Layout
        title="First Light Fishing & Tackle | 首頁"
        description="大溫地區華人首選釣魚店 - 釣魚是我們的生活！ 在First Light Tackle，
        我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。"
      >
        <>
          <HeroSlot />
          <FeatureSlot />
          <ProductSlot parentPage='popular' color='warning' title="熱銷商品" productList={productList} />
          <BlogSlot />
          <ServiceSlot />
          <MasonrySlot />
          <BrandSlot />

        </>

      </Layout>

    }
  </>

}

export default Home
