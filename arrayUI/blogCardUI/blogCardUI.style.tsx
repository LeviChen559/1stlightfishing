import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const Wrapper = styled.div<IStyle>({
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
        height: 600,
    }
  }, props=>({
    justifyContent:props.justifyContent
  }))