import styled from "@emotion/styled";

interface Style {
    opacity?: number;
    fontWeight?: number;
    width?: number;
    height?: number;
    alignItems?: string;
    justifyContent?: string;
}

export const H1 = styled.h1({
    margin: 0,
    fontFamily: 'Merienda One',
    fontSize: '60px',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    '@media (max-width: 1440px)': {
        fontSize: "36px",
   },
    '@media (max-width: 768px)': {
        fontSize: "28px",
   }
})
export const H2 = styled.h2({
    margin: 0,
    fontSize: '48px',
    fontFamily: 'Baloo Bhai 2'

})
export const H3 = styled.h3({
    margin: 0,
    fontSize: '36px',
    fontWeight: 300,
    fontFamily: 'Baloo Bhai 2'

})
export const H4 = styled.h4({
    margin: 0,
    fontSize: '24px',
    fontWeight: 300,
    fontFamily: 'Baloo Bhai 2',
    marginTop: '10px',
    '@media (max-width: 1440px)': {
        fontSize: "18px",
   },
    '@media (max-width: 768px)': {
        fontSize: "12px",
   }

})
export const H5 = styled.h5({
    fontSize: '18px',
    fontWeight: 300,
    fontFamily: 'Baloo Bhai 2',
    margin: 0,
   
   
})

export const H6 = styled.h6<Style>({
    fontSize: '14px',
    fontWeight: 300,
    fontFamily: 'Baloo Bhai 2',
    margin: 0,

}, props => ({
    opacity: props.opacity,
    fontWeight: props.fontWeight,
}))

export const ImageBox = styled.div<Style>({
    width: 130,
    height: 50,
    position: "relative"
},
    props => ({
        width: props.width,
        height: props.height,
    }))

export const FlexCol = styled.div<Style>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
},
    props => ({
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
    }))
    export const FlexRow = styled.div<Style>({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
        props => ({
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
        }))