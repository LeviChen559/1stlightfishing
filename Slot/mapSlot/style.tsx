import styled from "@emotion/styled"
import {theme, themePalette} from"../../utility/theme"
import { IStyle } from "../../utility/type"

export const Wrapper = styled.div({
    width: "100vw",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEE5E9",
    margin:"80px 0 0 0",
    "@media(max-width:768px)": {
        // height: 450,
    }
})


export const ImageBox = styled.div<IStyle>({
    flex:1.5,
    width: 600,
    height: 450,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin:"2.5% 2.5%",
    "@media(max-width:1440px)": {
        // width: "90%"
    },
    "@media(max-width:768px)": {
        flex:1,
        width: "90%",
        margin:"5% 5%",
        // height: "100%",
    }

},
    props => ({
        width: props.width,
        height: props.height,
    }))


export const TextContainer = styled.div({
    label: "TextContainer",
    width: 1680,
    height:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1680px)": {
        width: "100%",
    },
    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 900,
        // "&:first-child": {
        //     height: 200
        // },
        // "&:last-child": {
        //     height: 300
        // },

    }
})
export const TextBox = styled.div<IStyle>({
    flex:1,
    height: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    lineHeight:"30px",
    fontSize: "18px",
    color:themePalette.main,
    padding: "2.5%",
    "@media (max-width: 768px)": {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: "5%" ,
      
    }
}, props => ({
    flex: props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    background: props.background,
    flexDirection: props.flexDirection,
    padding: props.padding,
    color: props.color
}))  
