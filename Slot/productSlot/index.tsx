import React, { FC, useEffect, memo, MouseEventHandler } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, ProductBox, ProductBoxs, FeatureImage } from './style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import BasicButtons from '../../component/button';
import { theme } from '../../utility/theme'
import { useRouter } from "next/router";
import { IProductCard } from '../../utility/type';


interface Props {
    parentPage: string
    productList: Array<IProductCard>
    title: string
    color?: "warning" | "error" | "inherit" | "primary" | "secondary" | "success" | "info" | undefined,
}

const ProductSlot: FC<Props> = ({ productList, title, color,  parentPage }) => {

    const productListEN = productList ? productList.filter((product: IProductCard) => Number(product.id) < 6) : []
    const productListZH = productList ? productList.filter((product: IProductCard) => Number(product.id) > 5) : []

    useEffect(() => { AOS.init(); },)
    const router = useRouter()
    return <Wrapper>
        {!router.pathname.includes('/zh') ?
            <>
                <H3>{title}</H3>
                <H4>Some of our most loved products.</H4>
                <ProductBoxs>
                    {productListEN.map((product) => {
                        return <ProductBox data-aos="fade-up" key={product.id} 
                            onClick={() => router.push(`/en/product/${parentPage}/${product.href}`)}
                            data-aos-offset="200"
                            data-aos-delay={product.delay}
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out">
                            <FeatureImage key={product.id}>
                                <Image key={product.img} src={product.img} alt="onsale" layout='fill'
                                    placeholder="blur" blurDataURL="/image-blur-placeholder.png" objectFit='cover' />
                            </FeatureImage >
                            <BasicButtons key={product.text} text={product.text} width="185px" color={color} />
                        </ProductBox>

                    })}

                </ProductBoxs>
            </>
            :
            <>
                <H3>{title}</H3>
                <H4>我們的熱門與話題商品</H4>
                <ProductBoxs>
                    {productListZH.map((product) => {
                        return <ProductBox data-aos="fade-up" key={product.id}
                            onClick={() => router.push(`/zh/product/${parentPage}/${product.href}`)}
                            data-aos-offset="200"
                            data-aos-delay={product.delay}
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out">
                            <FeatureImage key={product.id}>
                                <Image key={product.img} src={product.img} alt="onsale" layout='fill'
                                    placeholder="blur" blurDataURL="/image-blur-placeholder.png" objectFit='cover' />
                            </FeatureImage>
                            <BasicButtons key={product.text} text={product.text} width="185px" color={color} />
                        </ProductBox>

                    })}
                </ProductBoxs>


            </>
        }

    </Wrapper>

}


export default memo(ProductSlot)