import styled from "@emotion/styled"
export interface Props {
    width?: number,
    height?: number,
}
export const ImageBox = styled.div<Props>({
    width: 130,
    height: 50,
    position: "relative"
},
    props => ({ 
        width: props.width,
        height: props.height,
     }))