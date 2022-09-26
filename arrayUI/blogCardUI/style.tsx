import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const Wrapper = styled.div<IStyle>({
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:"0 5%",
    "@media(max-width:1200px)":{
        flexDirection: "column",
        alignItems: "center",
       
    },
    "@media(max-width:768px)":{
        height: 550,
        padding:"2.5%",
    }
  }, props=>({
    justifyContent:props.justifyContent
  }))