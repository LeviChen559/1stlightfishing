import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, ProductBox, ProductBoxs, FeatureImage } from './productSlot.style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import BasicButtons from '../../component/button';
 import {theme} from '../../utility/theme' 
 import {useRouter} from "next/router";
const ProductSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    const router=useRouter()
    return <Wrapper>
       {!router.pathname.includes('/zh')?
       <>
       <H3>POPULAR ITEMS</H3>
       <H4>Some of our most loved products.</H4>
        <ProductBoxs>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/onsale.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="ON SALE" width={185} background="warning"/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/bestsale.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="BEST SALE" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease-in-out" >
                <FeatureImage>
                    <Image src="/newitems.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="NEW ITEMS" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-out" >
                <FeatureImage>
                    <Image src="/seasonal.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="SEASONAL" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/clearance.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="CLEARANCE" width={185}/>
            </ProductBox>
            
        </ProductBoxs>
        </>
        :
        <>
 <H3>熱門商品</H3>
       <H4>我們的熱門與話題商品</H4>
        <ProductBoxs>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/onsale.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="特價商品" width={185} background="warning"/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/bestsale.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="熱銷商品" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease-in-out" >
                <FeatureImage>
                    <Image src="/newitems.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="新鮮貨" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-out" >
                <FeatureImage>
                    <Image src="/seasonal.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="季節商品" width={185}/>
            </ProductBox>
            <ProductBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <Image src="/clearance.png" alt="onsale" layout='fill' />
                </FeatureImage>
                <BasicButtons text="清倉商品" width={185}/>
            </ProductBox>
            
        </ProductBoxs>


        </>
}

    </Wrapper>

}


export default ProductSlot