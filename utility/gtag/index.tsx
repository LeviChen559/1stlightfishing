// log the pageview with their URL

export const pageview = (url:URL) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }

  declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
    params: string;
  };
  // log specific events happening.
  export const event = ({ action, params }:GTagEvent) => {
    window.gtag('event', action, params)
  }


  