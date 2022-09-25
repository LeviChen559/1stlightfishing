import styled from "@emotion/styled";
import {IStyle} from"../../utility/type"

export const Wrapper = styled.div<IStyle>({
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: 1680,
    margin:"80px 0 0 0",
    padding:"0 5%",
    // backgroundColor: "#EEE5E9",
    "@media(max-width:1680px)":{
        padding:"2.5% 5%",
        width: "100%",
    },
    '@media (max-width: 768px)': {
        justifyContent: "center",
        margin:"0%",
        padding:"5%",
        // height: 250,
    }
},props=>({
    background: props.background,
}));


export const Masonry = styled.div({
    label: "Masonry",
    maxWidth: "100%",
    height: "100%",
    margin: "60px auto",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridAutoRows: "250px",
    gap: "20px",
    "@media (max-width:1680px)": {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        margin: "40px auto%"
    },
    "@media(max-width:1440px)": {
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "40px auto%"
    },
    "@media(max-width:900px)": {
        gridTemplateColumns: "1fr 1fr ",
        margin: "40px auto%"
    }
    
})

export const ImageBox = styled.div<IStyle>({
    width: "300px",
    height: "auto",
    gridRow: "span 1 ",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
    "@media(max-width:1680px)":{
        "&:last-child": { display:"none" },
    }
},
    props => ({
        gridRow:props.gridRow
    }))