import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6, H4, ImageProjecter,FlexRowNoChange } from '../../../../component/commonStyle'
import { IProductIntro } from '../../../../utility/type'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material'
import PreviousPage from"../../../../component/previousPage"
interface Props {
  data: Array<IProductIntro>
}
const Intro: FC<Props> = () => {
  const router = useRouter()
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
      }
    }
    GetArticle()
    return () => { canceled = true }
  }, [id])
  const productListZH = data ? data.filter((product: IProductIntro) => Number(product.id) > 5) : []
  const changePage = (type: string): void => {
    if (type === "dec" && page > 1) {
      setPage(current => current - 1)
    } else if (type === "inc" && page < 3) {
      setPage(current => current + 1)
    }
    else if (type === "dec" && page === 1) {
      setPage(3)
    }
    else if (type === "inc" && page ===3) {
      setPage(1)
    }
  }
  // console.log("page",page)
  return <>
    <Layout title="First Light Fishing & Tackle/依據目標選購"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  >
      <>
        <VisionSlot src="/product-min.jpg" />
        {productListZH.map((product) => {
          return <div key="">
            <TextBox justifyContent='flex-start' key={product.title + "BasicBreadcrumbs"} >
              <BasicBreadcrumbs parentPage='商品' href="/zh/product" Article={product.title} />
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
                      <IconButton onClick={() => changePage("dec")}>  <ArrowBackIosNewIcon  /></IconButton>
                      <IconButton onClick={() => changePage("inc")}>  <ArrowForwardIosIcon  /></IconButton>
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
      <PreviousPage hrefLink='/zh/product' text="上一頁"/>
      </>

    </Layout>
  </>
}


export default Intro