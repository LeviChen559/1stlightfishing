import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageBox, Style, Wrapper, TextContainer, TextBox } from './style'
import { H3, H4, H5 } from "../../component/commonStyle"
import BasicButtons from '../../component/button'
import { theme } from "../../utility/theme"
import BlogCard from '../../component/blogCard'
import BlogCardUI from '../../arrayUI/blogCardUI'
import { ICard } from '../../utility/type'
import axios from 'axios'
import { useRouter } from 'next/router'

const blogList = [
  {
    id: "01",
    title: "Hello to the Internet!",
    subheader: "May 12, 2017",
    image: "/blogs/blog1.png",
    description: "Well well well, after five years since our grand opening in 2012, we finally found some time away from manning",
    delay: 100
  }, {
    id: "02",
    title: "Story Behind The Vision",
    subheader: "May 13, 2017",
    image: "/blogs/blog2.png",
    description: "Fishing sure can be an unpredictable activity, sometimes it is fast paced and exciting when your rod is fully bent",
    delay: 200
  }, {
    id: "03",
    title: "CARP BEHAVIOUR 101",
    subheader: "May 14, 2017",
    image: "/blogs/blog3.png",
    description: "At First Light Fishing & Tackle, one of our most favourite fish species to target is carp. Intelligent, adaptable, and",
    delay: 300
  },{
    id: "04",
    title: "故事的背後及店長簡介!",
    subheader: "五月 12, 2017",
    image: "/blogs/blog1.png",
    description: "Well well well, after five years since our grand opening in 2012, we finally found some time away from manning",
    delay: 100
  },
  {
    id: "05",
    title: "新手入門掃盲!",
    subheader: "五月 12, 2017",
    image: "/blogs/blog2.png",
    description: "Well well well, after five years since our grand opening in 2012, we finally found some time away from manning",
    delay: 200
  },
  {
    id: "06",
    title: "裝備論!",
    subheader: "五月 12, 2017",
    image: "/blogs/blog3.png",
    description: "Well well well, after five years since our grand opening in 2012, we finally found some time away from manning",
    delay: 300
  },
]
const blogListEN=blogList.filter((blog) => Number(blog.id)<4)
const blogListZH=blogList.filter((blog) => Number(blog.id)>3)


const BlogSnapSlot: FC<Style> = ({ height, width }) => {
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
        <TextBox>
            <H3 textShadow="3px 3px 5px gray">Blog</H3>
        </TextBox>
        <TextBox
          flexDirection="row" alignItems="center"
          justifyContent='center' backgroundColor="#EEE5E9" padding="0%">
          <BlogCardUI blogList={blogListEN} />
        </TextBox>
      </TextContainer>:
      <TextContainer>
      <TextBox>
          <H3 textShadow="3px 3px 5px gray">部落格</H3>
      </TextBox>
      <TextBox
        flexDirection="row" alignItems="center"
        justifyContent='center' backgroundColor="#EEE5E9" padding="0%">
        <BlogCardUI blogList={blogListZH} />
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