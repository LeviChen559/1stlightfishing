import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, FeatureBox, FeatureBoxs, FeatureImage } from './featureSlot.style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeatureSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    return <Wrapper>
        <H3> WHAT WE DO</H3>
        <FeatureBoxs>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <AutoStoriesIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                <H5 style={{marginBottom:"2.5%"}}>NEW STORIES!</H5>
                <H6>What’s biting? Get updated about different fisheries and trending fishing news.</H6>
            </FeatureBox>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <StorefrontIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                <H5 style={{marginBottom:"2.5%"}}>WHAT’S IN STORE?</H5>
                <H6>Come to check out our gears for all your fishing needs and wants!</H6>
            </FeatureBox>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="350"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <PhishingIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                <H5 style={{marginBottom:"2.5%"}}>YOUR NEXT ADVENTURE!</H5>
                <H6>Looking for an awesome fishing trip? We got you covered.</H6>
            </FeatureBox>
        </FeatureBoxs>
    </Wrapper>

}


export default FeatureSlot