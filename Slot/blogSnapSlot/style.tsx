import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const Wrapper = styled.div({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // margin: "5% 0",
    "@media(max-width:768px)": {
       
    }
})


export const ImageBox = styled.div<IStyle>({
    width: 1680,
    height: 600,
    position: "relative",
    "@media(max-width:1440px)": {
        // width: "90%"
    },
    "@media(max-width:768px)": {
        // height: 450,
    }

},
    props => ({
        width: props.width,
        height: props.height,
    }))


export const TextContainer = styled.div({
    position: "absolute",
    zIndex: 50,
    width: 1680,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // padding: "2.5% 0 0 2.5%",
   
    "@media (max-width: 1680px)": {
        width: "100%",
    },
    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 700,

    }
})
export const TextBox = styled.div<IStyle>({
    "&:last-child": { flex: 3.5 },
    flex: 1,
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: " 5% 0 0 5%",
    "@media (max-width: 768px)": {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: 0 ,
        height: 550,
      
    }
}, props => ({
    flex: props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    background: props.background,
    flexDirection: props.flexDirection,
    padding: props.padding
}))  
