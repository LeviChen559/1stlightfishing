import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const Wrapper = styled.div({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "80px 0 0 0",
    //  padding: "0 2.5%",
    "@media(max-width:1440px)": {
        width: "95%",

    }
})


export const ImageBox = styled.div<IStyle>({
    label: "ImageBox",
    borderRadius: "10px",
    overflow: "hidden",
    flex: .5,
    height: 700,
    position: "relative",
    "@media(max-width:1440px)": {
        flex: .75,
    },
    "@media(max-width:768px)": {
        // height: 100,
        flex: .4,
        width: "100%",

    }

},
    props => ({
        // width: props.width,
        // height: props.height,
    }))


export const TextContainer = styled.div({
    width: 1680,
    display: "flex",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media (max-width: 1680px)": {
        width: "100%",
    },
    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 900,

    }
})
export const TextBox = styled.div<IStyle>({
    // "&:last-child": { flex: 1.5 },
    flex: 1,
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "0 0 0 0",
    "@media (max-width: 768px)": {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
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
