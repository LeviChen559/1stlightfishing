import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FlexCol, FlexRow, H3, ImageBox, TextBox, H5, H6,H4 } from '../../../../component/commonStyle'
import { ICard } from '../../../../utility/type'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../../../utility/layout/home'
import VisionSlot from '../../../../Slot/visionSlot'
import BasicBreadcrumbs from "../../../../component/breadcrumbs"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface Props {
  data: ICard[]
}
const Article: FC<Props> = () => {
  const router = useRouter()
  const { id } = router.query;
  const [data, setData] = useState<ICard[]>([]);

  console.log("id", typeof (id))
  useEffect(() => {
    let canceled = false
    const GetArticle = async () => {
      const res = await axios.get("/api/getBlog", {
        params: {
          id: id,
        }
      });
      if (res.data[0]) {
        if (canceled) return;
        const dataArray: any = (res.data).filter((blog: any) => blog.id == id)
        setData(dataArray)
        console.log("fetching data")

      }
    }
    GetArticle()
    return () => { canceled = true }
  }, [id])

  return <>
    <Layout title="First Light Fishing & Tackle/Blog">
      <>
        <VisionSlot src="/blogHero-min.jpg" />
        {data.map((blog) => {
          return <>
            <TextBox justifyContent='flex-start'>
              <BasicBreadcrumbs Article={blog.title} />
            </TextBox>
            <TextBox>
              <H3>{blog.title}</H3>
            </TextBox>
            <FlexRow alignItems='flex-start'>
              {(blog.image && blog.image2 && blog.image3 && blog.image4) &&
                <FlexCol>
                  <FlexCol>
                    <FlexRow>
                    <ImageBox  width="95%">
                      <Image src={blog.image} alt={blog.image} layout="fill" objectFit='cover' />
                    </ImageBox>
                    </FlexRow>
                <FlexRow width="95%">
                    <H4 margin="2.5% 0%" lineHeight={2}>{blog.p1}</H4>
                </FlexRow>
                  </FlexCol>
                  <FlexRow width="90%">
                    <ImageBox>
                      <Image src={blog.image2} alt={blog.image2} layout="fill" objectFit='cover' />
                    </ImageBox>
                  <FlexRow alignItems='flex-start' >
                    <H4 margin="0% 5%" lineHeight={2}>{blog.p2}</H4>
                  </FlexRow>
                  </FlexRow>
                  <FlexRow width="90%">
                    <H4 margin="2.5% 0" lineHeight={1.5}>{blog.p3}</H4>
                    </FlexRow>
                  <FlexRow width="90%">
                    <FlexRow margin="0 0">
                    <ImageBox >
                      <Image src={blog.image3} alt={blog.image3} layout="fill" objectFit='cover' />
                    </ImageBox>
                    </FlexRow>
                    <H4 margin="2.5% 5%" lineHeight={1.8}>{blog.p4}</H4>
                  </FlexRow>
                  <FlexRow width="90%">
                    <H4 margin="2.5% 0" lineHeight={1.5}>{blog.p5}</H4>
                  </FlexRow>

                </FlexCol>}
            </FlexRow>
          </>
        })
        }
        <TextBox justifyContent='flex-end' onClick={() => router.push("/en/blog")} style={{ cursor: "pointer" }}>
          <ArrowBackIosNewIcon sx={{ fontSize: "20px", margin: "0 5px" }} /><H5>Previous page</H5>
        </TextBox>
      </>

    </Layout>
  </>
}


export default Article


