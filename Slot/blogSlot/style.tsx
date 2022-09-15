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





export const TextContainer = styled.div({
    position: "relative",
    width: 1680,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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

