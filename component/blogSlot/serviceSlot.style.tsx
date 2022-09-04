import styled from "@emotion/styled"
export interface Style {
    width?: number,
    height?: number,
    flex?: number,
    justifyContent?:string,
    alignItems?:string,
    backgroundColor?:string,
}
export const Wrapper = styled.div({
    width: "100%",
    height: 600,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media(max-width:768px)":{
        height: 450,
    }
  })


export const ImageBox = styled.div<Style>({
    width: 1440,
    height: 700,
    position: "relative",
    "@media(max-width:1440px)":{
        width: "90%"
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
    position: "absolute",
    zIndex: 100,
    width:1000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "2.5%",
    "@media (max-width: 1200px)":{
        width:"75%",
    },
    "@media (max-width: 768px)":{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height:450,

    }
 })    
 export const TextBox = styled.div<Style>({
    flex:1,
    height:500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media (max-width: 768px)":{
        justifyContent: "space-evenly",
        height:100,
    }
 },props=>({
    flex:props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    backgroundColor: props.backgroundColor
 }))  
