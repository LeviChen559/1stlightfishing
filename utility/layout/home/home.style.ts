import styled from "@emotion/styled";
import {theme} from "../../theme"
export const BackgroundContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100vw",
})

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    "@media(min-width: 2000px)": { width: 1920 }
})


export const Header = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
})

export const Content = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "@media(min-width: 1500px)": { width: 1440 }
})

export const Footer = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 1920
})