import { Link, Typography } from '@mui/material';

const Copyright = () => {
    return (
      <Typography variant="body2" color="white">
        {'Copyright © '}
        <Link color="inherit" href="#">
          DARF
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

  export default Copyright;