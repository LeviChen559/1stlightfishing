import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 600,
    padding:"5% 2.5%",
    // backgroundColor: "#D9D9D9",
    '@media (max-width: 1440px)': {
        height: "100%",
        padding:"10% 0%",
    }
})

export const ProductBoxs = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    "@media(max-width:1440px)   ":{
      flexWrap: "wrap",
      justifyContent: "flex-start",
  },
  "@media(max-width:768px)   ":{
    flexDirection: "column",
    flexWrap: "nowrap",
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
    width: "30%",
    height: 225,
   textAlign:"center",
   
   
  
})