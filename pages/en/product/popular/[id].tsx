import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6, H4 } from '../../../../component/commonStyle'
import { IProductIntro } from '../../../../utility/type'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LottieAnimation from '../../../../component/lottieAnimation'
import { IconButton } from '@mui/material'
import PreviousPage from"../../../../component/previousPage"
interface Props {
  data: IProductIntro[]
}
const Popular: FC<Props> = () => {
  const router = useRouter()
  const { id } = router.query;
  const [data, setData] = useState<IProductIntro[]>([]);

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
        const dataArray: any = (res.data).filter((product: any) => product.id == id)
        setData(dataArray)
        console.log("fetching data", res)

      }
    }
    GetArticle()
    return () => { canceled = true }
  }, [id])

  return <>
    <Layout title="First Light Fishing & Tackle/PopularItems"
  description="Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing." 
  >
      <>
        <VisionSlot src="/product-min.jpg" />
        <LottieAnimation src="/construction.json" />
        <PreviousPage hrefLink="/en/product" text="previous page"/>

      </>

    </Layout>
  </>
}


export default Popular