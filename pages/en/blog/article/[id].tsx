import React, { useEffect, useState, FC } from 'react'
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
// import { ICard } from '../../../../utility/type'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6 } from '../../../../component/commonStyle'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export interface ICard {
  id: string;
  title: string;
  subheader: string;
  image: string;
  image2: string;
  image3: string;
  // image4: string;
  description: string;
  delay: number;
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;

}
interface Props {
  data: ICard[]
}
const Article: FC<Props> = () => {
  const router = useRouter()
  const { id } = router.query;
  const [data, setData] = useState<ICard>(Object);

  useEffect(() => {
    const GetArticle = async () => {
      const res = await axios.get("/api/getBlog", {
        params: {
          id: id,
        }
      });
      if (res.data[0]) {
        setData(res.data[0])
      }
    }
    GetArticle()
  }, [id])
  console.log("data", data)

  return <>
    <Layout title="First Light Fishing & Tackle/Blog">
      <>
        <VisionSlot src="/blogHero-min.jpg" />
        <TextBox justifyContent='flex-start'>
          <BasicBreadcrumbs Article={data.title} />
        </TextBox>
        <TextBox>
          <H3>{data.title}</H3>
        </TextBox>
        <FlexRow alignItems='flex-start'>
          <FlexCol>
            <ImageBox >
              <Image src={data.image} alt={data.image} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image2} alt={data.image2} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image3} alt={data.image3} layout="fill" objectFit='cover' />
            </ImageBox>
          </FlexCol>
          <FlexCol justifyContent='flex-start'>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p1}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p2}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p3}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p4}</H5>
            <H5 margin="2.5% 0" lineHeight={1.5}>{data.p5}</H5>
          </FlexCol>
        </FlexRow>
        <TextBox justifyContent='flex-end' onClick={() => router.push("/en/blog")} style={{ cursor: "pointer" }}>
          <ArrowBackIosNewIcon sx={{ fontSize: "20px", margin: "0 5px" }} /><H5>Previous page</H5>
        </TextBox>
      </>

    </Layout>
  </>
}


export default Article


