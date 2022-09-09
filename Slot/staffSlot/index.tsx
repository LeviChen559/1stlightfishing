import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, ProductBox, ProductBoxs, FeatureImage } from './staffSlot.style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import Image from 'next/image';
import BasicButtons from '../../component/button';
 import {theme} from '../../utility/theme' 
const StaffSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    return <Wrapper>
       
        <H3>Meet out Awesome Staff</H3>
        {/* <H4>Some of our most loved products.</H4> */}
    </Wrapper>

}


export default StaffSlot