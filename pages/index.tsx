import React,{useEffect, useState} from 'react';
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
import { useRouter } from 'next/router'; 
import { ILocale } from '../utility/type';

const Home: NextPage <ILocale> = () => {
  const { locale, locales, asPath } = useRouter();
  const [language,setLanguage] =useState<string>("")
  useEffect(() => {
    let conceled = false
    const getLanguages = () => {
      if (conceled) return;
      const { language } = window.navigator
      setLanguage(language)
  }
  getLanguages()
  return () => { conceled = true }
  },[])
  console.log(asPath)
  return <Layout title="First Light Fishing & Tackle/Home"
                 description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
    <>
      <HeroSlot />
      <FeatureSlot />
      <div> {locale} </div>
      <ProductSlot parentPage='popular' color='warning' title="POPULAR ITEMS" productList={productList}/>
      <BlogSlot />
      <ServiceSlot />
      <MasonrySlot />
      <BrandSlot />
      
    </>

  </Layout>

}

export default Home
