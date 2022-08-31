import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'
export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    height: 600,
    overflow: "hidden",
    '@media (max-width: 1440px)': {
        height: "100%",
        justifyContent: "center",
    },
    '@media (max-width: 768px)': {
        flexDirection: "column",
    },
})


export const ImageBox = styled.div({
    width: 900,
    height: 1000,
    position: "relative",
    animation: "fade-in",
    animationTimingFunction: "ease-in",
    animationDuration: "2s",
    '@keyframes fade-in': {
        '0%': { opacity: 0 },
        '50%': { opacity: .3 },
        '100%': { opacity: 1 },
    },
    '@media (max-width: 1440px)': {
        width: 720,
        height: 800,
    },
    '@media (max-width: 1200px)': {
        width: 630,
        height: 700,
    },
    '@media (max-width: 400px)': {
        width: 270,
        height: 300,
    },
})

export const TextContainer = styled.div({
    textAlign: 'right',
    // flex: 1.25
    width: "40%",
    '@media (max-width: 1440px)': {
        width: "30%",
    },
    '@media (max-width: 768px)': {
        textAlign: 'center',
        marginTop: "5%",
        position: "absolute",
        width: "50%",
   }
})
export const ButtonContainer = styled.div({
    marginTop: "10%"
})