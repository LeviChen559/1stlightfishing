import React,{FC} from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'

interface Props{
  Article:string;
  parentPage:string;
  href: string
}

const  BasicBreadcrumbs:FC <Props>=({Article,parentPage,href})=> {
    const router = useRouter()
    // function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //     event.preventDefault();
    //     console.info('You clicked a breadcrumb.');
    //     router.push("/en/blog")
    // }
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={href}>
          {parentPage}
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

export default BasicBreadcrumbs