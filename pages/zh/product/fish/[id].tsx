import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6,H4 } from '../../../../component/commonStyle'
import { IProductIntro } from '../../../../utility/type'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LottieAnimation from '../../../../component/lottieAnimation'
import PreviousPage from '../../../../component/previousPage'
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
        console.log("fetching data",res)
       
      }
    }
    GetArticle()
    return () => { canceled = true }
  }, [id])

  return <>
    <Layout title="First Light Fishing & Tackle/依據魚種選購"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
    >
      <>
        <VisionSlot src="/product-min.jpg" />
        <LottieAnimation src="/construction.json"/>
      <PreviousPage hrefLink='/zh/product'text="上一頁"/>
      </>
    </Layout>
  </>
}


export default Popular