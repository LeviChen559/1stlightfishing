import styled from "@emotion/styled"
export interface Props {
    width?: number,
    height?: number,
}
export const ImageBox = styled.div<Props>({
    width: 130,
    height: 50,
    position: "relative",
    "@media(max-width:768px)":{
        height: 30,
        width: 80,
      }
},
    props => ({ 
        width: props.width,
        height: props.height,
     }))