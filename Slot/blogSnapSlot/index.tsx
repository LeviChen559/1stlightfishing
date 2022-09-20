import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageBox, Wrapper, TextContainer, TextBox } from './style'
import { H3, H4, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
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


  const router = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }
  
  const blogListLocale=blogList.filter((blog) => blog.locale==locale)
  // const blogListZH=blogList.filter((blog) => Number(blog.id)>3)
  return (
    <Wrapper >
          {!locale?.includes("zh") ? 
      <TextContainer>
        <TextBox>
            <H3 textShadow="3px 3px 5px gray">Blog</H3>
        </TextBox>
        <TextBox
          flexDirection="row" alignItems="center"
          justifyContent='center' background="#EEE5E9" padding="0%">
          <BlogCardUI blogList={blogListLocale} />
        </TextBox>
      </TextContainer>:
      <TextContainer>
      <TextBox>
          <H3 textShadow="3px 3px 5px gray">部落格</H3>
      </TextBox>
      <TextBox
        flexDirection="row" alignItems="center"
        justifyContent='center' background="#EEE5E9" padding="0%">
        <BlogCardUI blogList={blogListLocale} />
      </TextBox>
    </TextContainer>

          }
      <ImageBox height={height} width={width}>
        <Image src="https://images.unsplash.com/photo-1501177205451-70e35058c1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" objectFit="cover" alt="logo" layout='fill' />
      </ImageBox>
    </Wrapper>

  )
}

export default BlogSnapSlot