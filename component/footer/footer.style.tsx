import styled from "@emotion/styled";

type Props = {
  src?: string
  width?: number,
  borderBottom?: string
}
export const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding:'5%'

})

export const FlexCol = styled.div({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'space-evenly',
  alignItems: 'center'

})

export const SocialMedia = styled.div({
  display: 'flex',
  flexDirection: "row",
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 300,
  height: 75

})
export const PageContainer = styled.div({
  height: 75,
  display: "flex",
  width: 600,
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  '@media(min-width: 960px)': {
    color: 'orange'
  },
  "@media(max-width:768px)": {
    justifyContent: "center",
    width: "95%",
  }
})

export const PageItem = styled.div<Props>({
  color: "white",
  fontSize: "16px",
  fontWeight: 400,
  padding: "12px 5px",
  borderBottom: "0px",
  '&:hover': {
    borderBottom: "1px solid white"
  },
  "@media(max-width:768px)": {
    fontSize: "14px",
    padding: "12px 1%",
  }
},
  props => ({
    borderBottom: props.borderBottom
  })
)

export const LanguagesEN = styled.div({

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  cursor: 'pointer',
  width:100,
  height:50,
  '&:hover [data-comp="zh"]' :{
    color: "orange"
  },
  
})
export const LanguagesZH = styled.div({

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  cursor: 'pointer',
  width:100,
  height:50,
  '&:hover [data-comp="en"]' :{
    color: "orange"
  }
})