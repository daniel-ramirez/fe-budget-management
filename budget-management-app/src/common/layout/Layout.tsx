import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, CssBaseline, Link, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Copyright from './Copyright';

const Layout = (props: any) => {
    return (
        <Container
            component="main"
            style={{
                margin: '0px',
                padding: '0px',
                maxWidth: '100%'
            }}>
            <AppBar position="sticky">
                <Toolbar component="nav">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Budget Management
                    </Typography>
                    <Link component={RouterLink} to="signin" underline="none" color="white">
                        Sign in
                    </Link>
                </Toolbar>
            </AppBar>
            <CssBaseline />

            <Container
                component="section"
                maxWidth='xl'
                style={{ padding: '64px' }}
            >
                {props.children}
            </Container>

            <AppBar
                position="fixed"
                component="footer"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar>
                    <Copyright />
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Layout;
