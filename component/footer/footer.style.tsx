import styled from "@emotion/styled";

type Props = {
    src?: string
    width?: number,
    borderBottom?: string
  }
export const Wrapper = styled.div({
    width: '100%',
    height:300,
    display: 'flex', 
    flexDirection:"column",
    justifyContent: 'space-evenly',
    alignItems: 'center'

})

export const FlexCol = styled.div({
    display: 'flex', 
    flexDirection:"column",
    justifyContent: 'space-evenly',
    alignItems: 'center'

})

export const SocialMedia = styled.div({
    display: 'flex', 
    flexDirection:"row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width:300,
    height:100

})
export const PageContainer = styled.div({
    height: 50,
    display: "flex",
    width: 600,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: "5%",
    '@media(min-width: 960px)': {
      color: 'orange'
    },
    "@media(max-width:768px)":{
        width: "90%",
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
    "@media(max-width:768px)":{
        fontSize: "14px",
    }
  },
    props => ({
      borderBottom: props.borderBottom
    })
  )