import styled from "@emotion/styled"

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    "@media(max-width:1440px)   ": {
        flexWrap: "wrap",
        width: 1125,
        justifyContent: "flex-start",
    },
    "@media(max-width:1200px)   ": {
        flexWrap: "wrap",
        justifyContent: "flex-start",
        width: 750,
    },
    "@media(max-width:768px)   ": {
        flexWrap: "wrap",
        justifyContent: "center",
        width: 660,
    },
    "@media(max-width:650px)   ": {
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
    }

})