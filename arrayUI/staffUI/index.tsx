import React,{ FC,useEffect} from 'react'
import Staff from '../../component/stuff'
import {IStaff} from '../../utility/type'
import {Wrapper} from"./staffUI.style"
interface Props{
    staffList:Array<IStaff>;
    }


const StaffUI:FC<Props> =({staffList})=> {
   
  return <Wrapper>
     {staffList.map((staffContent: IStaff, key: number) => { 
            return  <Staff 
            key={key} staffContent={staffContent} staffList={staffList} />
           
        })}
    
    
     </Wrapper>
  
}

export default StaffUI