import React, { FC, useState } from 'react';;
import Image from 'next/image';
import { MenuContainer, ImageContainer, PageContainer, MenuItem,Languages } from './menu.style';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { theme } from '../../utility/theme'
import { H6 } from '../commonStyle';
import Logo from '../logo';
const MenuZH: FC = () => {

    const router = useRouter();
    return (
                
        <MenuContainer>
            <ImageContainer >
                <Logo/>
            </ImageContainer>
            
            <PageContainer >
                {router.pathname === "/zh" ?
                        <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en">首頁</Link></MenuItem> :
                        <MenuItem ><Link href="/zh">首頁</Link></MenuItem>
                }
                {router.pathname === "/zh/about" ?
                    <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en/about"> 關於我</Link></MenuItem> :
                    <MenuItem><Link href="/zh/about"> 關於我</Link></MenuItem>
                }
                {router.pathname === "/zh/products" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/products"> 商品</Link> </MenuItem> :
                    <MenuItem><Link href="/zh/products"> 商品</Link> </MenuItem>}
                {router.pathname === "/zh/blogs" ?
                    <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs"> 部落格</Link></MenuItem> :
                    <MenuItem ><Link href="/en/blogs"> 部落格</Link></MenuItem>}
                {router.pathname === "/zh/services" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/services"> 服務</Link></MenuItem> :
                    <MenuItem> <Link href="/zh/services"> 服務</Link></MenuItem>}
                {router.pathname === "/zh/contact" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact"> 聯絡我</Link></MenuItem> :
                    <MenuItem> <Link href="/zh/contact">聯絡我</Link></MenuItem>}
                <MenuItem ><a href="/en/contact" onClick={() => { router.push("/en/contact") }}><ShoppingCartIcon /></a> </MenuItem>
                <Languages><H6 opacity={.5} onClick={()=>router.push("/en")}>EN</H6> <H6 fontWeight={400}>ZH</H6></Languages>
            </PageContainer>
       
        </MenuContainer>
    );
}

export default MenuZH