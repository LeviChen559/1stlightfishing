import styled from "@emotion/styled";
import {themePalette} from"../../utility/theme"
export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100vw",
    height: '100%',
    margin:"80px 0 0 0",
    padding:"2.5% 0",
    background:themePalette.light,
    "@media(max-width:768px)": {
        height: "100%",
        margin:"2.5% 0",
    }
})

export const FeatureBoxs = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 1680,
    height: "100%",
    margin:"5% 0",
    "@media(max-width:1680px)": {  width: "90%", },
    "@media(max-width:768px)": { flexDirection: "column", }
})
export const FeatureImage = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    border: `2px solid ${themePalette.main}`,
    borderRadius: "50%",
    margin: "5% 0%",
    boxShadow: "5px 5px 5px 1px rgba(0,0,0,0.10)",
    color:themePalette.main,
  
})
export const FeatureBox = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth:"350px",
    width: "30%",
    height: "100%",
   textAlign:"center",
   "@media(max-width:768px)": {
    margin:"5% 0%",
    width: "60%",
    height: "100%",
}
  
})