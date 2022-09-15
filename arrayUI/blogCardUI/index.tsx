import React,{ FC,MouseEventHandler,useEffect} from 'react'
import BlogCard from '../../component/blogCard'
import {ICard} from '../../utility/type'
import {Wrapper} from"./style"
interface Props{
    blogList:Array<ICard>;
    justifyContent?:string;
    onClick?:MouseEventHandler<HTMLDivElement>
    }


const BlogCardUI:FC<Props> =({blogList,justifyContent,onClick})=> {
   
  return <Wrapper justifyContent={justifyContent}>
     {blogList.map((blogContent: ICard, key: number) => { 
            return  <BlogCard  onClick={onClick}
            key={key} blogContent={blogContent} blogList={blogList} 
           
            />
           
        })}
    
    
     </Wrapper>
  
}

export default BlogCardUI