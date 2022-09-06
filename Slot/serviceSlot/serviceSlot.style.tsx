import styled from "@emotion/styled"
import {themePalette} from"../../utility/theme"
export interface Style {
    width?: number,
    height?: number,
    flex?: number,
    justifyContent?:string,
    alignItems?:string,
}
export const Wrapper = styled.div({
    width: "100%",
    height: 600,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin:"5% 0",
    "@media(max-width:768px)":{
        height: 450,
    }
  })


export const ImageBox = styled.div<Style>({
    width: 1440,
    height: 700,
    position: "relative",
    "@media(max-width:1440px)":{
        // width: "90%"
    },
    "@media(max-width:768px)":{
        height: 450,
    }
    
},
    props => ({ 
        width: props.width,
        height: props.height,
     }))


 export const TextContainer = styled.div({
    label:"TextContainer",
    position: "absolute",
    zIndex: 100,
    width:1440,
    height:600,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: "2.5% 0 0 2.5%",
    "@media (max-width: 1440px)":{
        width:"90%",
    },
    "@media (max-width: 768px)":{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height:450,
    }
 })    
 export const TextBox = styled.div<Style>({
    width: "100%",
    height:500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding:" 5% 0 0 5%",
    H3:{
        color:themePalette.main,
        fontWeight: 400
     },
    '&[data-active="true"]':{
        width:600,
        padding:0,
    },
    "@media (max-width: 768px)":{
        justifyContent: "space-around",
        alignItems: "center",
        padding: 0 ,
        height:350,
        '&[data-active="true"]':{
            height:125
        },
        
    }
 },props=>({
    flex:props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
 }))  
