import React, { FC, useState } from 'react';;
import Image from 'next/image';
import { MenuContainer, ImageContainer, PageContainer, MenuItem,Languages } from './menu.style';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { theme } from '../../utility/theme'
import { H6 } from '../commonStyle';
import Logo from '../logo';
const Menu: FC = () => {

    const router = useRouter();

    return (
        <MenuContainer>
            <ImageContainer >
                <Logo/>
            </ImageContainer>
            <PageContainer >
                {router.pathname === "/en" ?
                        <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en">HOME</Link></MenuItem> :
                        <MenuItem ><Link href="/en">HOME</Link></MenuItem>
                }
                {router.pathname === "/en/about" ?
                    <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en/about"> ABOUT</Link></MenuItem> :
                    <MenuItem><Link href="/en/about"> ABOUT</Link></MenuItem>
                }
                {router.pathname === "/en/products" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/products"> PRODUCTS</Link> </MenuItem> :
                    <MenuItem><Link href="/en/products"> PRODUCTS</Link> </MenuItem>}
                {router.pathname === "/en/blogs" ?
                    <MenuItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs"> BLOGS</Link></MenuItem> :
                    <MenuItem ><Link href="/en/blogs"> BLOGS</Link></MenuItem>}
                {router.pathname === "/en/services" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/services"> SERVICES</Link></MenuItem> :
                    <MenuItem> <Link href="/en/services"> SERVICES</Link></MenuItem>}
                {router.pathname === "/en/contact" ?
                    <MenuItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact"> CONTACT</Link></MenuItem> :
                    <MenuItem> <Link href="/en/contact"> CONTACT</Link></MenuItem>}
                <MenuItem ><a href="/en/contact" onClick={() => { router.push("/en/contact") }}><ShoppingCartIcon /></a> </MenuItem>
                <Languages><H6>EN</H6> <H6>ZH</H6></Languages>
            </PageContainer>

        </MenuContainer>
    );
}

export default Menu