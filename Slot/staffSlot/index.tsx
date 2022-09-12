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
import { useRouter } from 'next/router';
const staffList=[{
    name:"Steven",
    img:"/steven.png",
    nickname:`"The Guru"`,
    intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
},
{
    name:"Steven",
    img:"/steven.png",
    nickname:`"The Guru"`,
    intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
},
{
    name:"Steven",
    img:"/steven.png",
    nickname:`"The Guru"`,
    intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
},
]

const StaffSlot: FC = () => {
    const router= useRouter()
    useEffect(() => { AOS.init(); },)
    return <Wrapper>
       <TextBox>
       {router.pathname.includes("/en")?
       <H3>Meet out Awesome Staff</H3>:
       <H3>我們的專業團隊</H3>
    } 
       </TextBox>
      
        <StaffUI staffList={staffList}/>
    </Wrapper>

}


export default StaffSlot