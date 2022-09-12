import styled from "@emotion/styled"
import {theme, themePalette} from"../../utility/theme"
export interface Style {
    width?: number,
    height?: number,
    flex?: number,
    justifyContent?: string,
    flexDirection?: "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined,
    alignItems?: string,
    backgroundColor?: string,
    padding?: string,
    color?: string,

}
export const Wrapper = styled.div({
    width: "100vw",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#EEE5E9",
    margin: "0",
    padding:"0 0 5% 0",
    "@media(max-width:768px)": {
        // height: 450,
    }
})


export const ImageBox = styled.div<Style>({
    flex:1,
    width: 600,
    height: 450,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin:"0 2.5%",
    "@media(max-width:1440px)": {
        // width: "90%"
    },
    "@media(max-width:768px)": {
        flex:1,
        width: "90%",
        margin:"0 5%",
    }

},
    props => ({
        width: props.width,
        height: props.height,
    }))


export const TextContainer = styled.div({
    label: "TextContainer",
    width: 1680,
    height:500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1440px)": {
        width: "100%",
    },
    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 700,
        // "&:first-child": {
        //     height: 200
        // },
        // "&:last-child": {
        //     height: 300
        // },

    }
})
export const TextBox = styled.div<Style>({
    flex:1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    lineHeight:"30px",
    fontSize: "18px",
    color:themePalette.main,
    padding: " 2.5%",
    "@media (max-width: 1440px)": {
        fontSize: "16px",
    },
    "@media (max-width: 768px)": {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: "5%",
        fontSize: "14px",
      
    }
}, props => ({
    flex: props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    backgroundColor: props.backgroundColor,
    flexDirection: props.flexDirection,
    padding: props.padding,
    color: props.color
}))  
