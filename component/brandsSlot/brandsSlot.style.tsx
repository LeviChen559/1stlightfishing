import styled from "@emotion/styled";

interface Style{
    backgroundColor?: string
}

export const Wrapper = styled.div<Style>({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: 1440,
    // height: 500,
    padding:"2.5%",
    marginTop: "2%",
    backgroundColor: "#EEE5E9",
    "@media(max-width:1440px)":{
        width: "90%"
    },
    '@media (max-width: 768px)': {
        justifyContent: "center",
        margin:"0%",
        padding:"5%",
        // height: 250,
    }
},props=>({
    backgroundColor: props.backgroundColor,
}));