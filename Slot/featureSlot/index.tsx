import React, { FC, useEffect } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Wrapper, FeatureBox, FeatureBoxs, FeatureImage } from './style'
import { H3, H4, H5, H6 } from "../../component/commonStyle"
import { themePalette } from '../../utility/theme';
import AOS from 'aos';
import { useRouter } from 'next/router'
const FeatureSlot: FC = () => {
    useEffect(() => { AOS.init(); },)
    const router = useRouter()
    const{locale}=useRouter()
    return <Wrapper>
          {!locale?.includes("zh") ?
        <H3 textShadow="3px 3px 5px gray" color={themePalette.main}> WHAT WE DO</H3>
        :
        <H3 textShadow="3px 3px 5px gray" color={themePalette.main}> 我們的服務</H3>
}
        <FeatureBoxs>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <AutoStoriesIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                {!locale?.includes("zh")  ?
                    <>
                        <H5  color={themePalette.main} style={{ marginBottom: "2.5%" }}>NEW STORIES!</H5>
                        <H6 color={themePalette.main}>What’s biting? Get updated about different fisheries and trending fishing news.</H6>
                    </> :
                    <>
                        <H5 color={themePalette.main} style={{ marginBottom: "2.5%" }}>大溫哥華</H5>
                        <H6 color={themePalette.main}>本地釣魚資訊，釣魚講座，課程，釣魚群等 提供您專業釣魚平台。</H6>
                    </>
                }
            </FeatureBox>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <StorefrontIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                {!locale?.includes("zh") ?
                    <>
                        <H5 color={themePalette.main} style={{ marginBottom: "2.5%" }}>WHAT’S IN STORE?</H5>
                        <H6 color={themePalette.main} >Come to check out our gears for all your fishing needs and wants!</H6>
                    </> :
                    <>
                        <H5  color={themePalette.main} style={{ marginBottom: "2.5%" }}>專業釣魚店</H5>
                        <H6 color={themePalette.main} >各式釣魚用具與裝備，專業裝備解說，漁證辦理，釣魚規則資訊。</H6>
                    </>}
            </FeatureBox>
            <FeatureBox data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="350"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <FeatureImage>
                    <PhishingIcon sx={{ fontSize: 40 }} />
                </FeatureImage>
                {!locale?.includes("zh") ?
                    <>
                        <H5  color={themePalette.main} style={{ marginBottom: "2.5%" }}>YOUR NEXT ADVENTURE!</H5>
                        <H6 color={themePalette.main} >Looking for an awesome fishing trip? We got you covered.</H6>
                    </> :
                    <>
                        <H5 color={themePalette.main} style={{ marginBottom: "2.5%" }}>獨一無二的釣魚體驗</H5>
                        <H6 color={themePalette.main} >不論您是釣魚新手或是已入門但無法突破，讓我們的1 對 1 專業導釣帶您一起創造釣魚神話。</H6>
                    </>
                }
            </FeatureBox>
        </FeatureBoxs>
    </Wrapper>

}


export default FeatureSlot