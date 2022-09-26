import React,{FC,memo} from 'react'
import Image from 'next/image'
import { ImageBox,Props } from './style'

const Logo:FC = memo<Props>(({height,width})=> {
  console.log("Logo")
  return (
    <ImageBox height={height} width={width}>
    <Image src="/logo.svg" objectFit="contain" alt="logo" layout='fill'  />
</ImageBox>
  );
});

Logo.displayName = 'Logo';

export default Logo