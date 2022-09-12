import { Url, UrlObject } from "url";

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
    nickname: string;

  }
  export interface IStyle {
    width?: number,
    height?: number,
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
}