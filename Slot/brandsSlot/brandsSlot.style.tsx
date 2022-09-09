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
    width: "100vw",
    padding:"5% 27.5%",
    margin:"5% 0",
    backgroundColor: "#EEE5E9",
    "@media(max-width:1960px)":{
        padding:"2.5% 5%",
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