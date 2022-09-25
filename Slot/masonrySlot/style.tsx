import styled from "@emotion/styled"
import { IStyle } from "../../utility/type"
export const Wrapper = styled.div({
    label: "wrapper",
    width: 1680,
    height: "100%",
    margin: "80px 0 0 0",
    "@media(max-width:1680px)": {
        width: "100%"
    },
    '@media (max-width: 768px)': {
        // height: 300,
    }
})

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
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        margin: "40px auto"
    },
    "@media(max-width:900px)": {
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "20px auto",
        gap: "15px",
    },
    "@media(max-width:600px)": {
        gridTemplateColumns: "1fr 1fr ",
        margin: "20px auto",
        gap: "10px",
    }
    
})

export const ImageBox = styled.div<IStyle>({
    width: "100%",
    height: "100%",
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