import styled from "@emotion/styled"

export const Wrapper = styled.div({
    label:"wrapper",
    width: 1440,
    height: 700, 
    overflowY: 'hidden',
    margin:"5% 0",
    "@media(max-width:1440px)":{
        width: "100%"
    },
    '@media (max-width: 768px)': {
        height: 300,
        paddingBottom:"2.5%",
        marginBottom:"2.5%"
    }
})