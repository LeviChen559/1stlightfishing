import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6 } from '../../../../component/commonStyle'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ICard } from '../../../../utility/type'
import PreviousPage from '../../../../component/previousPage'
interface Props {
  data: ICard[]
}
const Article: FC<Props> = () => {
  const router = useRouter()
  const { id } = router.query;
  const [data, setData] = useState<ICard>(Object);

  useEffect(() => {
    let canceled =false
    const GetArticle = async () => {
      const res = await axios.get("/api/getBlog", {
        params: {
          id: id,
        }
      });
      if (res.data[0]) {
        if(canceled) return;
        setData(res.data[0])
        console.log("fetching data")
      }
    }
    GetArticle()
    return ()=>{canceled=true}
  }, [id])

  return <>
    <Layout title="First Light Fishing & Tackle/Blog"
  description="大溫地區華人首選專業釣魚店 - 釣魚是我們的生活！ 在 First Light Tackle，我們為您提供不列顛哥倫比亞省當地捕魚的所有必需品和知識。" 
  >
      <>
        <VisionSlot src="/blogHero-min.jpg" />
        <TextBox justifyContent='flex-start'>
          <BasicBreadcrumbs parentPage='Blog' href="/zh/blog"  Article={data.title} />
        </TextBox>
        <TextBox>
          <H3>{data.title}</H3>
        </TextBox>
        <FlexRow alignItems='flex-start'>
         {(data.image&& data.image2&& data.image3&& data.image4)&& <FlexCol>
            <ImageBox >
              <Image src={data.image} alt={data.image} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image2} alt={data.image2} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image3} alt={data.image3} layout="fill" objectFit='cover' />
            </ImageBox>
          </FlexCol>}
          <FlexCol justifyContent='flex-start'>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p1}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p2}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p3}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p4}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p5}</H5>
          </FlexCol>
        </FlexRow>
        <PreviousPage hrefLink='/zh/blog' text="上一頁"/>

      </>

    </Layout>
  </>
}


export default Article


