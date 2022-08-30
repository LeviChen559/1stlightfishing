import styled from "@emotion/styled"
export interface Props {
    width?: number,
    height?: number,
}
export const ImageContainer = styled.div({
    width: "100%",
    height: 600,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  })


export const ImageBox = styled.div<Props>({
    width: "90%",
    height: 800,
    position: "relative"
},
    props => ({ 
        width: props.width,
        height: props.height,
     }))


 export const TextContainer = styled.div({
    position: "absolute",
    zIndex: 100,
    width:"50%",
    height:300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "5%"
 })    