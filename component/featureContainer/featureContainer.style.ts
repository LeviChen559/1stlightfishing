import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    height: 300,
    margin:"5%",
    '@media (min-width: 1440px)': {
    }
})

export const FeatureBoxs = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  
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
    margin: "5% 0%"
  
})
export const FeatureBox = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
    height: 200,
   textAlign:"center",
  
})