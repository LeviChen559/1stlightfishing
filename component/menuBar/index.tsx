import React, { FC, useState } from 'react';;
import Image from 'next/image';
import { MenuContainer, ImageContainer, PageContainer, PageItem, Languages,Hamberger } from './menuBar.style';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { theme } from '../../utility/theme'
import { H6 } from '../commonStyle';
import Logo from '../logo';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
const MenuBar: FC = () => {

  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <MenuContainer>
      <ImageContainer >
        <Logo />
      </ImageContainer>

      <PageContainer >
        {router.pathname === "/en" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en">HOME</Link></PageItem> :
          <PageItem ><Link href="/en">HOME</Link></PageItem>
        }
        {router.pathname === "/en/about" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/about"> ABOUT</Link></PageItem> :
          <PageItem><Link href="/en/about"> ABOUT</Link></PageItem>
        }
        {router.pathname === "/en/products" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/products"> PRODUCTS</Link> </PageItem> :
          <PageItem><Link href="/en/products"> PRODUCTS</Link> </PageItem>}
        {router.pathname === "/en/blogs" ?
          <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blogs"> BLOGS</Link></PageItem> :
          <PageItem ><Link href="/en/blogs"> BLOGS</Link></PageItem>}
        {router.pathname === "/en/services" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/services"> SERVICES</Link></PageItem> :
          <PageItem> <Link href="/en/services"> SERVICES</Link></PageItem>}
        {router.pathname === "/en/contact" ?
          <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact"> CONTACT</Link></PageItem> :
          <PageItem> <Link href="/en/contact"> CONTACT</Link></PageItem>}
        <PageItem ><a href="/en/contact" onClick={() => { router.push("/en/contact") }}><ShoppingCartIcon /></a> </PageItem>
        <Languages ><H6 fontWeight={400}>EN</H6> <H6 fontWeight={300} opacity={.5} onClick={() => router.push("/zh")}>ZH</H6></Languages>
      </PageContainer>
      <Hamberger>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MenuIcon sx={{ width: 32, height: 32, color: "white"}}/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
           Profile
        </MenuItem>
        <MenuItem>
          My account
        </MenuItem>
        {/* <Divider /> */}
      </Menu>
    </Hamberger>
    </MenuContainer>
  );
}

export default MenuBar