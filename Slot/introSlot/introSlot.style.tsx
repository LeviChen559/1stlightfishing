import styled from "@emotion/styled"
export interface Style {
    width?: number,
    height?: number,
    flex?: number,
    justifyContent?: string,
    flexDirection?: "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined,
    alignItems?: string,
    backgroundColor?: string,
    padding?: string,

}
export const Wrapper = styled.div({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2.5% 0",
    "@media(max-width:768px)": {
        // height: 450,
    }
})


export const ImageBox = styled.div<Style>({
    flex: 1,
    width: 400,
    height: 250,
    padding: "5%",
    position: "relative",
    "@media(max-width:1440px)": {
        // width: "90%"
    },
    "@media (max-width: 1000px)": {
        flex: .75,
        width: 240,
        height: 150,
    },
    "@media(max-width:768px)": {
        flex: 1,
        width: 500,
        height: 250,
        padding: "0%",

    }

},
    props => ({
        width: props.width,
        height: props.height,
    }))


export const TextContainer = styled.div({
    label: "TextContainer",
    width: 1680,
    height: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "2.5% 0 0 2.5%",
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
    flex: 1.5,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    lineHeight: "30px",
    fontSize: "18px",
    padding: " 3.5% 2.5% 3.5% 2.5%",
    "@media (max-width: 1220px)": {
        lineHeight: "24px",
        fontSize: "16px",

    },
    "@media (max-width: 1000px)": {
        flex: 1.5
    },
    "@media (max-width: 768px)": {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "90%",
        padding:"2.5%"

    }
}, props => ({
    flex: props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    backgroundColor: props.backgroundColor,
    flexDirection: props.flexDirection,
    padding: props.padding
}))  
