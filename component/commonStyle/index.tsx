import styled from "@emotion/styled";
import { theme } from "../../utility/theme"
import { IStyle } from "../../utility/type"


export const H1 = styled.h1<IStyle>({
    margin: 0,
    fontFamily: 'Merienda One',
    fontSize: '60px',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    color: theme.palette.common.white,
    '@media (max-width: 1440px)': {
        fontSize: "36px",
    },
    '@media (max-width: 768px)': {
        fontSize: "28px",
    }
}, props => ({
    color: props.color,
    fontWeight: props.fontWeight
}))
export const H2 = styled.h2<IStyle>({
    margin: 0,
    fontSize: '48px',
    fontFamily: 'Philosopher',
    fontWeight: 500,
    color: theme.palette.common.white,
}, props => ({
    color: props.color,
    fontWeight: props.fontWeight
}))
export const H3 = styled.h3<IStyle>({
    margin: 0,
    fontSize: '36px',
    fontWeight: 400,
    fontFamily: 'Philosopher',
    color: theme.palette.common.white,

}, props => ({
    color: props.color,
    fontWeight: props.fontWeight,
    textShadow: props.textShadow
}))
export const H4 = styled.h4<IStyle>({
    margin: 0,
    fontSize: '24px',
    fontWeight: 300,
    fontFamily: "Roboto",
    marginTop: '10px',
    whiteSpace: "pre-wrap",
    color: theme.palette.common.white,
    '@media (max-width: 1440px)': {
        fontSize: "18px",
    },
    '@media (max-width: 768px)': {
        fontSize: "14px",
    }
}, props => ({
    color: props.color,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    margin: props.margin,
}))
export const H5 = styled.h5<IStyle>({
    fontSize: '18px',
    fontWeight: 300,
    fontFamily: "Roboto",
    margin: 0,
    whiteSpace: "pre-wrap",
    color: theme.palette.common.white,
    '@media (max-width: 1440px)': {
        fontSize: "16px",
    },
    '@media (max-width: 768px)': {
        fontSize: "12px",
    }
}, props => ({
    color: props.color,
    fontWeight: props.fontWeight,
    opacity: props.opacity,
    lineHeight: props.lineHeight,
    margin: props.margin
}))

export const H6 = styled.h6<IStyle>({
    fontSize: '14px',
    fontWeight: 300,
    fontFamily: "Roboto",
    margin: 0,
    color: theme.palette.common.white,
}, props => ({
    opacity: props.opacity,
    fontWeight: props.fontWeight,
}))

export const ImageBox = styled.div<IStyle>({
    width: 600,
    height: 350,
    position: "relative",
    // "@media(max-width:1200px)":{
    //     width: "90%",
    //     height: 300,
    // }
},
    props => ({
        width: props.width,
        height: props.height,
    }))
export const TextBox = styled.div<IStyle>({
    width: "100%",
    // height:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: " 2.5%",
    "@media (max-width: 768px)": {
        padding: " 5%",
    }

}, props => ({
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    width: props.width,
}))
export const FlexCol = styled.div<IStyle>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: " 1px solid grey",
    borderRadius: "10px",
    padding: " 2.5%",
    background: theme.palette.background.default,
    width: "100%",
    height: "100%",
},
    props => ({
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        maxWidth: props.maxWidth
    }))
export const FlexRow = styled.div<IStyle>({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: "0 0 0 0",
    "@media(max-width:960px)":{
        flexDirection: "column",
    }
},
    props => ({
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        width: props.width,
        height: props.height,
        margin: props.margin,
        flexDirection: props.flexDirection,
    }))

    export const FlexRowNoChange = styled.div<IStyle>({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        margin: "0 0 0 0",
    },
        props => ({
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            width: props.width,
            height: props.height,
            margin: props.margin,
            flexDirection: props.flexDirection,
        }))