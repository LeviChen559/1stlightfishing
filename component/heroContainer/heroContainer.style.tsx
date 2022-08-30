import styled from "@emotion/styled";
import {  keyframes } from '@emotion/react'
export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    height: 600,
    overflow: "hidden",
    '@media (min-width: 1440px)': {
        height: "100%",
    }
})


export const ImageBox = styled.div({
    width: 900,
    height: 1000,
    position: "relative",
    animation: "fade-in",
    animationTimingFunction:"ease-in",
    animationDuration: "1s",
    '@keyframes fade-in':{
        '0%': { opacity: 0 },  
            '100%': { opacity: 1 },                             
    }
})

export const TextContainer = styled.div({
    textAlign: 'right',
    // flex: 1.25
    width: "40%",
})
export const ButtonContainer = styled.div({
    marginTop:"10%"
})