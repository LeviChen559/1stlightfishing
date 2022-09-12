import styled from "@emotion/styled";
import {theme} from "../../utility/theme"
import {IStyle} from "../../utility/type"


export const H1 = styled.h1({
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
})
export const H2 = styled.h2({
    margin: 0,
    fontSize: '48px',
    fontFamily: 'Philosopher',
    color: theme.palette.common.white,
})
export const H3 = styled.h3<IStyle>({
    margin: 0,
    fontSize: '36px',
    fontWeight: 300,
    fontFamily: 'Philosopher',
    color: theme.palette.common.white,

},props=>({
    color: props.color,
    fontWeight: props.fontWeight
}))
export const H4 = styled.h4({
    margin: 0,
    fontSize: '24px',
    fontWeight: 300,
    fontFamily: "Roboto",
    marginTop: '10px',
    // color: theme.palette.common.white,
    '@media (max-width: 1440px)': {
        fontSize: "18px",
   },
    '@media (max-width: 768px)': {
        fontSize: "12px",
   }

})
export const H5 = styled.h5({
    fontSize: '18px',
    fontWeight: 300,
    fontFamily: "Roboto",
    margin: 0,
    // color: theme.palette.common.white,
   
})

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
    width: 130,
    height: 50,
    position: "relative"
},
    props => ({
        width: props.width,
        height: props.height,
    }))
    export const TextBox = styled.div<IStyle>({
        width: "100%",
        height:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding:" 5%",
    
    })
export const FlexCol = styled.div<IStyle>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
},
    props => ({
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
    }))
    export const FlexRow = styled.div<IStyle>({
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
            width:props.width,
            height:props.height,
            margin: props.margin,
        }))