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
    // margin: "5% 0",
    "@media(max-width:768px)": {
       
    }
})


export const ImageBox = styled.div<Style>({
    width: "100%",
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
export const TextBox = styled.div<Style>({
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
    backgroundColor: props.backgroundColor,
    flexDirection: props.flexDirection,
    padding: props.padding
}))  
