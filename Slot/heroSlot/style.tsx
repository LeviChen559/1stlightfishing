import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

export const Wrapper = styled.div({
    label:"Wrapper",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 700,
    overflow: "hidden",
    marginTop: -100,
    '@media (max-width: 1920px)': {
        justifyContent: "center",
    },
    '@media (max-width: 1440px)': {
        height: "100%",
        width: "90%",
        marginTop: -80,
    },
    '@media (max-width: 768px)': {
        flexDirection: "column",
        marginTop: -70,
        width: "100%",
    },
})


export const ImageBox = styled.div({
    width: 990,
    height: 1100,
    position: "relative",
    animation: "fade-in",
    animationTimingFunction: "ease-in",
    animationDuration: "1.5s",
    '@keyframes fade-in': {
        '0%': { opacity: 0 },
        '50%': { opacity: .3 },
        '100%': { opacity: 1 },
    },
    '@media (max-width: 1680px)': {
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
    width: "40%",
    marginTop: "7.5%",
    '@media (max-width: 1680px)': {
        width: "35%",
    },
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