import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper } from './style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import StaffUI from '../../arrayUI/staffUI';
 import {theme} from '../../utility/theme' 
import {TextBox} from"../../component/commonStyle"
import { useRouter } from 'next/router';
const staffList=[{
    id:"1",
    name:"Steven",
    img:"/stuff/steven.jpeg",
    nickname:`"The Guru"`,
    intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
},
{   
    id:"2",
    name:"Jane",
    img:"/stuff/Jane.jpeg",
    nickname:`"The Brain"`,
    intro:"Autumn fog. Purple jig. Secret spot. Chicken garlic soup. Hugs. English & Korean",
},
// {   
//     id:"3",
//     name:"Steven",
//     img:"/stuff/steven.png",
//     nickname:`"The Guru"`,
//     intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
// },
// {   
//     id:"4",
//     name:"Steven",
//     img:"/stuff/steven.png",
//     nickname:`"The Guru"`,
//     intro:"Midnight. Tenkara Carp.Single single coffee.Strawberry Strudel.English & Mandarin",
// },
]

const StaffSlot: FC = () => {
    const router= useRouter()
    useEffect(() => { AOS.init(); },[])
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