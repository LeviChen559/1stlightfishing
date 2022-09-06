import React,{ FC,useEffect} from 'react'
import BlogCard from '../../component/card'
import {ICard} from '../../utility/type'
import {Wrapper} from"./blogCardUI.style"
interface Props{
    blogList:Array<ICard>;
    }


const BlogCardUI:FC<Props> =({blogList})=> {
   
  return <Wrapper>
     {blogList.map((blogContent: ICard, key: number) => { 
            return  <BlogCard 
            key={key} blogContent={blogContent} blogList={blogList} />
           
        })}
    
    
     </Wrapper>
  
}

export default BlogCardUI