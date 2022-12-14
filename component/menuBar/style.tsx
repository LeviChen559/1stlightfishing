import styled from "@emotion/styled";
import { theme } from "../../utility/theme"
type Props = {
  src?: string
  width?: number,
  borderBottom?: string
  opacity?:number
}

export const Wrapper = styled.div({
  label:"Wrapper",
  position: "absolute",
  marginTop: 100,
  zIndex: 100,
  width: "95%",
  height: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "@media(max-width:768px)":{
    height: 50,
    marginTop: 50,
  }
})

export const ImageContainer = styled.div({
  // marginLeft: "5%",
  cursor: "pointer",
})

export const PageContainer = styled.div({
  height: 50,
  display: "flex",
  width: 600,
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  // marginRight: "5%",
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
  cursor: 'pointer',
  '&:hover' :{
    color: "orange"
  },
  
})
export const LanguagesZH = styled.div({

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  cursor: 'pointer',
  '&:hover [data-comp="en"]' :{
    color: "orange"
  }
})

export const Hamberger = styled.div({

  display: "none",
  "@media(max-width:768px)":{
    display: "flex",
    // marginRight: "10%",
  }

})

export const WrapperBackground = styled.div<Props>({
width: "100%",
position:"absolute",
marginTop: 100,
zIndex:1,
height:100, opacity:1,
backgroundColor:theme.palette.background.default
// backgroundColor:"black"

},props=>({
  opacity:props.opacity
}))