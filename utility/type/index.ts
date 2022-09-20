export interface ICard {
  id: string;
  title: string;
  locale: string;
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
  p6?: string;
  p7?: string;
  p8?: string;
  p9?: string;
  p10?: string;
  p11?: string;
  p12?: string;

}

export interface IStaff {
  name: string;
  img: string;
  intro: string;
  nickname: string;
  id: string
}
export interface IProductCard {
  id: string;
  locale: string;
  img: string;
  text: string;
  delay: string;
  href: string;
}
export interface IProductIntro {
  id: string;
  locale: string;
  img1: string;
  img2: string;
  img3: string;
  title: string;
  intro1: string;
  intro2: string;
  intro3: string;
  intro4: string;
  intro5: string;
}
export interface IStyle {
  width?: number | string,
  maxWidth?: number,
  height?: number | string,
  flex?: number,
  flexDirection?: "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined,
  justifyContent?: string,
  alignItems?: string,
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
  animationDelay?:string;
  position?: "relative" | "absolute" | "fixed" 

}

export interface ILocale{
  locale:string;
  locales :string[];
  asPath:string;

}