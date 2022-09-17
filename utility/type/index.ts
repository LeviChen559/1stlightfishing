export interface ICard {
    id:string;
    title: string;
    subheader: string;
    image: string;
    image2: string;
    image3: string;
    image4: string;
    description: string;
    delay: number;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;

  }

  export interface IStaff {
    name: string;
    img: string;
    intro: string;
    nickname: string;
    id:string
  }
  export interface IProductCard {
    id:string;
    img : string;
    text : string;
    delay: string
  }
  export interface IStyle {
    width?: number | string,
    maxWidth?: number,
    height?: number | string,
    flex?: number,
    flexDirection?: "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined,
    justifyContent?:string,
    alignItems?:string,
    opacity?: number;
    fontWeight?: number;
    color?: string;
    background?: string;
    margin?: string;
    padding?: string,
    text?: string;
    hrefLink?: string;
    border?: string;
    borderRadius?: string;
    lineHeight?: number | string,
    textShadow?: string;
}


