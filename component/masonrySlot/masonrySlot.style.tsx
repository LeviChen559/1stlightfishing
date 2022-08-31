import styled from "@emotion/styled"

export const Wrapper = styled.div({
    width: "90%", 
    height: 600, 
    overflowY: 'hidden',
    '@media (max-width: 768px)': {
        height: "100%",
        paddingBottom:"10%",
    }
})