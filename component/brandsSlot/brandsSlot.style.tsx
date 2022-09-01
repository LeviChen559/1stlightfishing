import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 400,
    padding:"2.5%",
    marginTop: "2%",
    backgroundColor: "#EEE5E9",
    '@media (max-width: 768px)': {
        justifyContent: "center",
        margin:"0%",
    }
})