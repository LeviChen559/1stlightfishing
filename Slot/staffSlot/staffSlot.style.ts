import styled from "@emotion/styled";

export const Wrapper = styled.div({
    label: "Wrapper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 1440,
    height: 600,
    '@media (max-width: 1440px)': {
        height: "100%",
        width: "90%",
    }
})


export const FeatureImage = styled.div({
    width: 185,
    height: 150,
    margin: "5% 0%",
    position: "relative",
    boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.15)",
  
})
export const ProductBox = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
    height: 225,
   textAlign:"center",
   "@media(max-width: 768px)": {
    margin: "2.5% 0%",
   }
   
   
  
})