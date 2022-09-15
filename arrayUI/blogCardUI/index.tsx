import React,{ FC,useEffect} from 'react'
import BlogCard from '../../component/blogCard'
import {ICard} from '../../utility/type'
import {Wrapper} from"./style"
interface Props{
    blogList:Array<ICard>;
    justifyContent?:string
    }


const BlogCardUI:FC<Props> =({blogList,justifyContent})=> {
   
  return <Wrapper justifyContent={justifyContent}>
     {blogList.map((blogContent: ICard, key: number) => { 
            return  <BlogCard 
            key={key} blogContent={blogContent} blogList={blogList} />
           
        })}
    
    
     </Wrapper>
  
}

export default BlogCardUI