import styled from "@emotion/styled"

export const Wrapper = styled.div({
    label:"wrapper",
    width: 1680,
    height: 500, 
    overflowY: 'auto',
    // margin:"5% 0",
    "@media(max-width:1440px)":{
        width: "100%"
    },
    '@media (max-width: 768px)': {
        height: 300,
    }
})