import React, { FC, useState } from 'react';;
import Image from 'next/image';
import { Wrapper, ImageContainer, PageContainer, PageItem, Languages, Hamberger, WrapperBackground } from './style';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { theme } from '../../utility/theme'
import { H6, H5 } from '../commonStyle';
import Logo from '../logo';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  Home_en: string,
  Home_zh: string,
  About_en: string,
  About_zh: string,
  Product_en: string,
  Product_zh: string,
  Blog_en: string,
  Blog_zh: string,
  Service_en: string,
  Service_zh: string,
  Contact_en: string,
  Contact_zh: string,
}

const menuText: Props = {
  Home_en: "HOME",
  Home_zh: "首頁",
  About_en: "ABOUT",
  About_zh: "關於我",
  Product_en: "PRODUCT",
  Product_zh: "商品",
  Blog_en: "BLOG",
  Blog_zh: "部落格",
  Service_en: "SERVICE",
  Service_zh: "服務",
  Contact_en: "CONTACT",
  Contact_zh: "聯繫我",
}
interface MenuBarProps {
  opacity?: number
}

const MenuBar: FC<MenuBarProps> = ({ opacity }) => {


  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { locale, locales, asPath } = useRouter()
  return (
    <>
      <WrapperBackground opacity={opacity} />
      <Wrapper>
        <ImageContainer onClick={() => router.push("/")}>
          <Logo />
        </ImageContainer>
        {!locale?.includes("zh") ?
          <PageContainer >
            {router.pathname === "/en" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en">{menuText.Home_en}</Link></PageItem> :
              <PageItem ><Link href="/en">{menuText.Home_en}</Link></PageItem>
            }
            {router.pathname === "/en/about" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/about">{menuText.About_en}</Link></PageItem>
              :
              <PageItem><Link href="/en/about">{menuText.About_en}</Link></PageItem>
            }
            {router.pathname === "/en/product" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/product">{menuText.Product_en}</Link></PageItem>
              :
              <PageItem><Link href="/en/product">{menuText.Product_en}</Link></PageItem>
            }
            {router.pathname === "/en/blog" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blog">{menuText.Blog_en}</Link></PageItem> :
              <PageItem ><Link href="/en/blog">{menuText.Blog_en}</Link></PageItem>
            }

            {router.pathname === "/en/service" ?
              <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/service">{menuText.Service_en}</Link></PageItem> :
              <PageItem> <Link href="/en/service">{menuText.Service_en}</Link></PageItem>}

            {router.pathname === "/en/contact" ?
              <PageItem borderBottom="2px solid #03a9f4"> <Link href="/en/contact">{menuText.Contact_en}</Link></PageItem> :
              <PageItem> <Link href="/en/contact">{menuText.Contact_en}</Link></PageItem>}
            <PageItem ><div onClick={() => { router.push("/en/cart") }}><ShoppingCartIcon /></div> </PageItem>
            <Languages>
              {locales?.map((language: string, i: number) => {
                return <>
              {language === locale  ?
                    <H5 color="orange" fontWeight={400}  ><Link key={i} locale={language} href={asPath}>
                       {language==="en"&&"EN"}
                    </Link></H5>
                    :
                      <H6 fontWeight={300} opacity={.25} ><Link key={i} locale={language} href={asPath}>
                        {language==="zh"&&"中文"}
                      </Link></H6>
                  }
                </>
              }
              )}
            </Languages>
          </PageContainer> :
          <PageContainer >
            {router.pathname === "/zh" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/zh">{menuText.Home_zh}</Link></PageItem> :
              <PageItem ><Link href="/zh">{menuText.Home_zh}</Link></PageItem>
            }
            {router.pathname === "/zh/about" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/about">{menuText.About_zh}</Link></PageItem>
              :
              <PageItem><Link href="/zh/about">{menuText.About_zh}</Link></PageItem>
            }
            {router.pathname === "/zh/product" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/zh/product">{menuText.Product_zh}</Link></PageItem>
              :
              <PageItem><Link href="/zh/product">{menuText.Product_zh}</Link></PageItem>
            }
            {router.pathname === "/zh/blog" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/blog">{menuText.Blog_zh}</Link></PageItem> :
              <PageItem ><Link href="/zh/blog">{menuText.Blog_zh}</Link></PageItem>
            }

            {router.pathname === "/zh/service" ?
              <PageItem borderBottom="2px solid #03a9f4"><Link href="/en/service">{menuText.Service_zh}</Link></PageItem> :
              <PageItem><Link href="/zh/service">{menuText.Service_zh}</Link></PageItem>}

            {router.pathname === "/zh/contact" ?
              <PageItem borderBottom="2px solid #03a9f4"> <Link href="/zh/contact">{menuText.Contact_zh}</Link></PageItem> :
              <PageItem> <Link href="/zh/contact">{menuText.Contact_zh}</Link></PageItem>}
            <PageItem ><div onClick={() => { router.push("/zh/cart") }}><ShoppingCartIcon /></div> </PageItem>
            <Languages>
              {locales?.map((language: string, i: number) => {
                return <>
                  {language === locale  ?
                    <H6 color="orange" fontWeight={400}  ><Link key={i} locale={language} href={asPath}>
                      {language==="zh"&&"中文"}
                    </Link></H6>
                    :
                      <H5 fontWeight={300} opacity={.25} ><Link key={i} locale={language} href={asPath}>
                        {language==="en"&&"EN"}
                      </Link></H5>
                  }
                </>
              }
              )}
            </Languages>
          </PageContainer>



        }
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
              <MenuIcon sx={{ width: 32, height: 32, color: "white" }} />
            </IconButton>
          </Tooltip>
          {!router.pathname.includes("/zh") ?
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
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/">
                  HOME
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/about">
                  ABOUT
                </Link>
              </MenuItem >
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/product">
                  PRODUCT
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/blog">
                  BLOG
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/service">
                  SERVICE
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/en/contact">
                  CONTACT
                </Link>
              </MenuItem>
            </Menu>
            :
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
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/">
                  首頁
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/about">
                  關於我
                </Link>
              </MenuItem >
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/product">
                  商品
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/blog">
                  部落格
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/service">
                  服務
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: 14 }}>
                <Link href="/zh/contact">
                  聯絡我
                </Link>
              </MenuItem>
            </Menu>

          }
        </Hamberger>

      </Wrapper>
    </>
  );
}

export default MenuBar