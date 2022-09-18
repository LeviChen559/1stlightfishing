import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { TextBox, H5 } from '../commonStyle';
import { useRouter } from 'next/router';
import { IStyle } from "../../utility/type"


const PreviousPage: FC<IStyle> = ({ hrefLink, text }) => {
    const router = useRouter()

    return <>

        <TextBox width="80%" justifyContent='flex-end' alignItems='center' >
            <IconButton onClick={() => router.push(`${hrefLink}`)} style={{ cursor: "pointer" }}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <H5 onClick={() => router.push(`${hrefLink}`)} style={{ cursor: "pointer" }}>{text}</H5>
        </TextBox>




    </>

}

export default PreviousPage