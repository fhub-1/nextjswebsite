/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
    path="/"
    sx={{
      variant: 'links.logo1',
      display:'flex',
      cursor: 'pointer',
      mr: 15,
    }}
    {...rest}
    >
     <Image 
     src={src} alt="Flutter hub "
     />
    </Link>
  );
}
