import React, { useEffect, useState, FC } from 'react'
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ICard } from '../../../../utility/type'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5 } from '../../../../component/commonStyle'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
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
        <TextBox>
          <H3>{data.title}</H3>
        </TextBox>
        <FlexRow alignItems='flex-start'>
          <FlexCol>
            <ImageBox >
              <Image src={data.image} alt={data.image} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image} alt={data.image2} layout="fill" objectFit='cover' />
            </ImageBox>
            <ImageBox >
              <Image src={data.image} alt={data.image3} layout="fill" objectFit='cover' />
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
      </>

    </Layout>
  </>
}


export default Article


