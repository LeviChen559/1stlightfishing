import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageBox, Wrapper, TextContainer, TextBox } from './style'
import { H3, H4, H5,FlexCol } from "../../component/commonStyle"
import BlogCardUI from '../../arrayUI/blogCardUI'
import { ICard,IStyle } from '../../utility/type'
import axios from 'axios'
import { useRouter } from 'next/router'



const BlogSnapSlot: FC<IStyle> = ({ height, width }) => {
  const [blogList,setBlogList] =useState <ICard[]>([])
  const {locale}=useRouter()
  useEffect(() => {
    let cancled =false;
    const GetArticle = async () => {
      const res = await axios.get("/api/getBlog");
      if (cancled) return;
        setBlogList(res.data)
        console.log("fetching article")
    }
    GetArticle()
   return ()=>{cancled = true;}
  }, [])
  
  const blogListLocale=blogList.filter((blog) => blog.locale==locale)
  return (
    <Wrapper >
          {!locale?.includes("zh") ? 
      <TextContainer>
      <ImageBox >
        <Image src="https://images.unsplash.com/photo-1501177205451-70e35058c1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-evenly' padding="0%">
            <FlexCol height="100px">
            <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)">Blog</H3>
            <H5  margin='20px 0 0 0'>Our stories, our adventures</H5>
            </FlexCol>
          <BlogCardUI blogList={blogListLocale} />
        </TextBox>
     
      </TextContainer>
      :
      <TextContainer>
     <ImageBox >
        <Image src="https://images.unsplash.com/photo-1501177205451-70e35058c1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
        <TextBox
          flexDirection="column" alignItems="center"
          justifyContent='space-evenly' padding="0%">
            <FlexCol height="100px">
            <H3 textShadow="3px 3px 5px rgba(0, 0, 0,0.5)">部落格</H3>
            <H5 margin='20px 0 0 0' >我們的故事, 我們的冒險</H5>
            </FlexCol>
          <BlogCardUI blogList={blogListLocale} />
        </TextBox>
    </TextContainer>

          }
    </Wrapper>

  )
}

export default BlogSnapSlot