import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6, H4, ImageProjecter, FlexRowNoChange } from '../../../component/commonStyle'
import { IProductIntro, IHead } from '../../../utility/type'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material'
import PreviousPage from "../../../component/previousPage"
import type { NextPage } from 'next'
interface Props {
  data: IProductIntro[];
  locale: string;
}

const Intro: NextPage<Props> = () => {
  const router = useRouter()
  const { locale,locales } = useRouter()
  const { id } = router.query;
  const [data, setData] = useState<IProductIntro[]>([]);
  const [page, setPage] = useState<number>(1)
 

  useEffect(() => {
    let canceled = false
    const GetArticle = async () => {
      const res = await axios.get("/api/getProductIntro", {
        params: {
          id: id,
        }
      });
      if (res.data[0]) {
        if (canceled) return;
        const dataArray: any = (res.data).filter((product: any) => product.href == id)
        setData(dataArray)
        console.log("fetchProduct")
      }
    }
    GetArticle()
    return () => { canceled = true }
  }, [id])
  const productListLocale = data ? data.filter((product: IProductIntro) => product.locale == locale) : []
  const changePage = (type: string): void => {
    if (type === "dec" && page > 1) {
      setPage(current => current - 1)
    } else if (type === "inc" && page < 3) {
      setPage(current => current + 1)
    }
    else if (type === "dec" && page === 1) {
      setPage(3)
    }
    else if (type === "inc" && page === 3) {
      setPage(1)
    }
  }
  
  return <>
    <Layout title="First Light Fishing & Tackle | ProductIntro"
      description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
    >
      <>
        <VisionSlot src="/product-min.jpg" />
        {productListLocale.map((product) => {
          return <div key="">
            <TextBox justifyContent='flex-start' key={product.title + "BasicBreadcrumbs"} >
            {!locale?.includes("zh")?
              <BasicBreadcrumbs parentPage='Product' href="/en/product" Article={product.title} />:
              <BasicBreadcrumbs parentPage='產品' href="/zh/product" Article={product.title} />}
            </TextBox>
            <TextBox key={product.title + 1}>
              <H3 >{product.title}</H3>
            </TextBox>
            <FlexRow alignItems='flex-start' >
              {(product.img1 && product.img2 && product.img3) &&
                <FlexCol >
                  <FlexCol >
                    <FlexRow margin="0 0 2.5% 0">
                      <ImageProjecter width="95%" data-comp="productImg1">
                        {page === 1 &&
                          <Image id="productImg1" key="productImg1" src={product.img1} alt={product.img1} layout="fill" objectFit='cover' priority
                            placeholder="blur" blurDataURL="/image-blur-placeholder.png"
                          />}
                        {page === 2 &&
                          <Image id="productImg2" key="productImg2" src={product.img2} alt={product.img2} layout="fill" objectFit='cover' priority
                            placeholder="blur" blurDataURL="/image-blur-placeholder.png"
                          />}
                        {page === 3 &&
                          <Image id="productImg3" key="productImg3" src={product.img3} alt={product.img3} layout="fill" objectFit='cover' priority
                            placeholder="blur" blurDataURL="/image-blur-placeholder.png"
                          />}
                      </ImageProjecter>
                    </FlexRow>
                    <FlexRowNoChange maxWidth={300} width="70%" justifyContent="space-between" >
                      <IconButton onClick={() => changePage("dec")}>  <ArrowBackIosNewIcon /></IconButton>
                      <IconButton onClick={() => changePage("inc")}>  <ArrowForwardIosIcon /></IconButton>
                    </FlexRowNoChange>
                    <FlexCol width="95%" >
                      <H4 margin="1% 0%" lineHeight={1.5} key="productIntro1">{product.intro1}</H4>
                      <H4 margin="1% 0%" lineHeight={1.5} key="productIntro2">{product.intro2}</H4>
                      <H4 margin="1% 0%" lineHeight={1.5} key="productIntro3">{product.intro3}</H4>
                      <H4 margin="1% 0%" lineHeight={1.5} key="productIntro4">{product.intro4}</H4>
                      <H4 margin="1% 0%" lineHeight={1.5} key="productIntro5">{product.intro5}</H4>
                    </FlexCol>
                  </FlexCol>

                </FlexCol>
              }

            </FlexRow>
          </div>
        })
        }
        <PreviousPage />
      </>

    </Layout>
  </>
}


export default Intro