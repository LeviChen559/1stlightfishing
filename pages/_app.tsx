import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../utility/theme"
import { useRouter, } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return  <ThemeProvider theme={theme}>

    <Component {...pageProps} />

  </ThemeProvider> 
}

export default MyApp
