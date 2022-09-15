import React, { FC, useEffect,memo } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, ProductBox, ProductBoxs, FeatureImage } from './style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import BasicButtons from '../../component/button';
 import {theme} from '../../utility/theme' 
 import {useRouter} from "next/router";

const productList=[
{id:"01",
 img:"/product/onsale.png",
 text:"ON SALE",
 delay:"0",
},
{id:"02",
 img:"/product/bestsale.png",
 text:"BEST SALE",
 delay:"100",   
},
{id:"03",
 img:"/product/newitems.png",
 text:"NEW ITEMS" ,
 delay:"200",   
},
{id:"04",
 img:"/product/seasonal.png",
 text:"SEASONAL",
 delay:"300",   
},
{id:"05",
 img:"/product/clearance.png",
 text:"CLEARANCE",
 delay:"400",    
},
{id:"06",
 img:"/product/onsale.png",
 text:"特價商品",
 delay:"0",   
},
{id:"07",
 img:"/product/bestsale.png",
 text:"熱賣商品",
 delay:"100",   
},
{id:"08",
 img:"/product/newitems.png",
 text:"新鮮貨",
 delay:"200",    
},
{id:"09",
 img:"/product/seasonal.png",
 text:"季節商品",
 delay:"300",   
},
{id:"10",
 img:"/product/clearance.png",
 text:"清倉貨",
 delay:"400",    
},
]
const productListEN =productList.filter((product) => Number(product.id)<6)
const productListZH =productList.filter((product) => Number(product.id)>5)
const ProductSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    const router=useRouter()
    return <Wrapper>
       {!router.pathname.includes('/zh')?
       <>
       <H3>POPULAR ITEMS</H3>
       <H4>Some of our most loved products.</H4>
        <ProductBoxs>
        {productListEN.map((product)=>{
            return  <ProductBox data-aos="fade-up" key={product.id}
                data-aos-offset="200"
                data-aos-delay={product.delay}
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage key={product.id}>
                    <Image key={product.img} src={product.img} alt="onsale" layout='fill'
                    placeholder="blur" blurDataURL="/image-blur-placeholder.png" />
                </FeatureImage >
                <BasicButtons key={product.text} text={product.text} width="185px" background="warning"/>
            </ProductBox>
            
        })}
            
        </ProductBoxs>
        </>
        :
        <>
 <H3>熱門商品</H3>
       <H4>我們的熱門與話題商品</H4>
        <ProductBoxs>
        {productListZH.map((product)=>{
            return <ProductBox data-aos="fade-up" key={product.id}
                data-aos-offset="200"
                data-aos-delay={product.delay}
                data-aos-duration="500"
                data-aos-easing="ease-in-out">
                <FeatureImage key={product.id}>
                    <Image key={product.img} src={product.img} alt="onsale" layout='fill' 
                    placeholder="blur" blurDataURL="/image-blur-placeholder.png" />
                </FeatureImage>
                <BasicButtons key={product.text} text={product.text} width="185px" background="warning"/>
            </ProductBox>
            
        })}
        </ProductBoxs>


        </>
}

    </Wrapper>

}


export default memo(ProductSlot)