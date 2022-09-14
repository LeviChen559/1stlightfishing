import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const ImageBox = styled.div<IStyle>({
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