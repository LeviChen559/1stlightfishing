import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    height: 300,
    margin:"7.5% 0",
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
    width: "100%",
    height: "100%",
    "@media(max-width:768px)": { flexDirection: "column", }
})
export const FeatureImage = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    border: "2px solid white",
    borderRadius: "50%",
    margin: "5% 0%",
    boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.15)",
    color: "white",
  
})
export const FeatureBox = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
    height: "100%",
   textAlign:"center",
   "@media(max-width:768px)": {
    margin:"5% 0%",
    width: "60%",
    height: "100%",
}
  
})