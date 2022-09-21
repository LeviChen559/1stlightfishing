import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6, H4 } from '../../../component/commonStyle'
import { IProductIntro, IHead } from '../../../utility/type'
import axios from 'axios'
import Layout from '../../../utility/layout/home'
import VisionSlot from '../../../Slot/visionSlot'
import LottieAnimation from '../../../component/lottieAnimation'
import PreviousPage from "../../../component/previousPage"
import type { NextPage } from 'next'

interface Props {
  data: IProductIntro[]
}
const Popular: NextPage<Props> = () => {
  const router = useRouter()
  const {locale}=useRouter()
  const { id } = router.query;
  const [data, setData] = useState<IProductIntro[]>([]);
  const [headData, setHeadData] = useState<IHead>({
    title: "",
    description: ""
  })

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
  {!locale?.includes("zh")?
  
      <Layout title="PopularItems | First Light Fishing & Tackle"
        description= "Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
      >
        <>
          <VisionSlot src="/product-min.jpg" />
          <LottieAnimation src="/construction.json" />
          <PreviousPage />
        </>
      </Layout>
      :
      <Layout title="熱銷產品 | First Light Fishing & Tackle"
      description= "Burnaby Fishing Store - Fishing Is Our Life! Here at First Light Tackle, we provide all your essentials and knowledge for local BC fishing."
    >
      <>
        <VisionSlot src="/product-min.jpg" />
        <LottieAnimation src="/construction.json" />
        <PreviousPage />
      </>
    </Layout>
}
  </>
}


export default Popular