import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    height: 400,
    margin:"5%",
    '@media (max-width: 768px)': {
        justifyContent: "center",
        margin:"0%",
    }
})