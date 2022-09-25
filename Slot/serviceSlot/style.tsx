import styled from "@emotion/styled"
import {themePalette} from"../../utility/theme"
import { IStyle } from "../../utility/type"

export const Wrapper = styled.div({
    width: "100%",
    height: 700,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin:"80px 0 0 0",
    "@media(max-width:768px)":{
        height: "100%",
    }
  })


export const ImageBox = styled.div<IStyle>({
    // width: 1680,
    flex:1.75,
    height: 700,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    "@media(max-width:1440px)":{
        flex:1,
    },
    "@media(max-width:768px)":{
        height: 350,
        width:"100%"
    }
    
},
    props => ({ 
        width: props.width,
        height: props.height,
     }))


 export const TextContainer = styled.div({
    label:"TextContainer",
    width:1680,
    height:600,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media (max-width: 1440px)":{
        width:"95%",
    },
    "@media (max-width: 768px)":{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height:600,
    }
 })    
 export const TextBox = styled.div<IStyle>({
    flex:1,
    // width: "100%",
    height:700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    
    H3:{
        fontWeight: 400
     },
    '&[data-active="true"]':{
        // width:600,
        padding:"2.5%",
    },
    "@media (max-width: 768px)":{
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 0 ,
        height:250,
        
    }
 },props=>({
    flex:props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
 }))  
