import styled from "@emotion/styled"

export const Wrapper = styled.div({
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "@media(max-width:1200px)":{
        flexDirection: "column",
        alignItems: "center",  
    },
    "@media(max-width:768px)":{
    }
  })