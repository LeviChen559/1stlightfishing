import styled from "@emotion/styled"
import {themePalette} from"../../utility/theme"
import { IStyle } from "../../utility/type"

export const Wrapper = styled.div({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin:"80px 0 0 0",
    "@media(max-width:768px)":{
        height: "100%",
    }
  })




 export const TextContainer = styled.div({
    label:"TextContainer",
    width:1680,
    height:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1440px)":{
        width:"95%",
    },
    "@media (max-width: 768px)":{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height:"100%",
    }
 })    
 export const TextBox = styled.div<IStyle>({
    width:"45%",
    height:"100%",
    minHeight:300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: "10px",
    padding: "2.5%" ,
    background:themePalette.light,
    H3:{
        fontWeight: 400
     },
    "@media (max-width: 960px)":{
        alignItems: "center",
        width: "100%",
        margin:"0 0 2.5% 0",
        
        
    }
 },props=>({
    flex:props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
 }))  
