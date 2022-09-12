import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper } from './staffSlot.style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import StaffUI from '../../arrayUI/staffUI';
 import {theme} from '../../utility/theme' 
import {TextBox} from"../../component/commonStyle"
const staffList=[{
    name:"Steven",
    img:"/steven.png",
    intro:`"The Guru"
    Midnight. Tenkara Carp. 
    Single single coffee. 
    Strawberry Strudel.
    English & Mandarin`,
},
{
    name:"Steven",
    img:"/steven.png",
    intro:`"The Guru"
    Midnight. Tenkara Carp. 
    Single single coffee. 
    Strawberry Strudel.
    English & Mandarin`,
},
{
    name:"Steven",
    img:"/steven.png",
    intro:`"The Guru"
    Midnight. Tenkara Carp. 
    Single single coffee. 
    Strawberry Strudel.
    English & Mandarin`,
},
]

const StaffSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    return <Wrapper>
       <TextBox>
        <H3>Meet out Awesome Staff</H3>
       </TextBox>
      
        <StaffUI staffList={staffList}/>
    </Wrapper>

}


export default StaffSlot