import React, { FC, useEffect, useState,useMemo, useCallback,memo, MouseEventHandler } from 'react'
import Image from 'next/image'
import {  Wrapper, TextContainer } from './style'
import { H3, H4, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'
import axios from 'axios'
import { useRouter } from 'next/router'
import { IStyle,ICard} from '../../utility/type'

interface Props{
  onClick?:MouseEventHandler<HTMLDivElement>
}

const BlogSlot: FC<Props> = ({ onClick}) => {
  const [blogList,setBlogList] =useState <ICard[]>([])
  useEffect(() => {
    GetArticle()
  }, [])
  const GetArticle = async () => {
    const res = await axios.get("/api/getBlog");
      setBlogList(res.data)
  }
  console.log("blogList", blogList)

  const blogListEN=blogList.filter((blog) => Number(blog.id)<4)
  const blogListZH=blogList.filter((blog) => Number(blog.id)>3)
  const router = useRouter()
  const H5_style = {
    color: theme.palette.background.default,
    background: "rgba(255, 255, 255, 0.8)",
    padding: "2.5%"
  }
  return (
    <Wrapper >
          {!router.pathname.includes("/zh") ?
      <TextContainer>
          <BlogCardUI blogList={blogListEN}  justifyContent="flex-start" onClick={onClick}/>
     
      </TextContainer>:
      <TextContainer>
    
        <BlogCardUI blogList={blogListZH} justifyContent="flex-start" onClick={onClick}/>
     
    </TextContainer>

          }
    </Wrapper>

  )
}

export default BlogSlot