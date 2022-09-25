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
    padding:"0 0 80px 0",
    "@media(max-width:768px)": {
        // height: 450,
    }
})


export const ImageBox = styled.div<IStyle>({
      width: 130,
    height: 50,
    position: "relative"
},
    props => ({
        width: props.width,
        height: props.height,
    }))




export const TextContainer = styled.div<IStyle>({
    label: "TextContainer",
    width: 1680,
    height:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (max-width: 1440px)": {
        width: "100%",
    },
   
    
},props=>({
    flexDirection: props.flexDirection,

}))
export const TextBox = styled.div<IStyle>({
    flex:1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    lineHeight:"30px",
    fontSize: "18px",
    color:themePalette.main,
    padding: " 2.5%",
    margin:"80px 0 0 0",
    "@media (max-width: 1440px)": {
        fontSize: "16px",
    },
    "@media (max-width: 768px)": {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: "5%",
        fontSize: "14px",
      
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
