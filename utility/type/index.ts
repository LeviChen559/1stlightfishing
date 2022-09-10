export interface ICard {
    title: string;
    subheader: string;
    image: string;
    description: string;
    delay: number;
  }

  export interface IStaff {
    name: string;
    img: string;
    intro: string;

  }
  export interface IStyle {
    width?: number,
    height?: number,
    flex?: number,
    justifyContent?:string,
    alignItems?:string,
    opacity?: number;
    fontWeight?: number;
    color?: string;
}