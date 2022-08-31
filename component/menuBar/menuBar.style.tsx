import styled from "@emotion/styled";
import { theme } from "../../utility/theme"
type Props = {
  src?: string
  width?: number,
  borderBottom?: string
}

export const MenuContainer = styled.div({
  width: "100%",
  height: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#233D4D",
})

export const ImageContainer = styled.div({
  marginLeft: "5%",
  // flex:1,
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
    display: "none",
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
  }
},
  props => ({
    borderBottom: props.borderBottom
  })
)

export const Languages = styled.div({

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

})

export const Hamberger = styled.div({

  display: "none",
  "@media(max-width:768px)":{
    display: "flex",
    marginRight: "10%",
  }

})