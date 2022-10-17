import React,{FC,memo,useMemo} from 'react'
import Image from 'next/image'
import { ImageBox } from './style'
import {IStyle} from"../../utility/type"

const Logo:FC<IStyle> =({height,width})=> {
  console.count("render logo")
  return (
    <ImageBox height={height} width={width}>
    <Image src="/logo.svg" objectFit="contain" alt="logo" layout='fill'  />
</ImageBox>
  );
};

// Logo.displayName = 'Logo';
const MemoizedLogo = memo(Logo);
export default MemoizedLogo