import styled from "@emotion/styled";

export const Wrapper = styled.div({
    label: "Wrapper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 1680,
    height: 500,
    margin:"80px 0 0 0",
    '@media (max-width: 1680px)': {
        height: "100%",
        width: "90%",
    }
})

export const ProductBoxs = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    "@media(max-width:1680px)   ":{
        marginTop: "2.5%",
        width: 1440,
    },
    "@media(max-width:1440px)   ":{
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: "2.5%",
        width: 1000,
    },
    "@media(max-width:1200px)   ":{
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: 750,
  },

"@media(max-width:750px)   ":{
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: 500,
},
  "@media(max-width:500px)   ":{
    flexDirection: "column",
    // flexWrap: "wrap",
    width: "100%",
}
})
export const FeatureImage = styled.div({
    width: 225,
    height: 175,
    margin: "5% 0%",
    position: "relative",
    borderRadius:10,
    boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.15)",
    cursor:"pointer",
    "&:hover":{
        opacity: 0.5,
    }
})
export const ProductBox = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
    height: 275,
   textAlign:"center",
   "@media(max-width: 768px)": {
    margin: "2.5% 0%",
   }
   
   
  
})