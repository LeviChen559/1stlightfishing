import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'


export default function BasicBreadcrumbs({Article}:{Article:string}) {
    const router = useRouter()
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        router.push("/en/blog")
    }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/en/blog">
          Blog
        </Link>
            {/* <Link
            underline="hover"
            color="inherit"
            href="/en/blog"
            >
            Article
            </Link> */}
        <Typography color="text.primary">{Article}</Typography>
      </Breadcrumbs>
    </div>
  );
}