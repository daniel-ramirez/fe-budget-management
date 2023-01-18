import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material";

const Login = (props: any) => {
    return (
        <Container maxWidth="xs">
            <Paper sx={{ padding: '24px' }}>
                <Typography variant="h1" align="center" gutterBottom>
                    Login
                </Typography>
                <Box
                    id="login-form"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { marginBottom: '24px', width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container>
                        <Grid container item>
                            <TextField
                                id="username"
                                label="Username"
                                placeholder="Set your username or email"
                                type="email"
                                value={props.username}
                                required
                            />
                        </Grid>
                        <Grid container item>
                            <TextField
                                id="password"
                                label="Password"
                                placeholder="Set your password"
                                type="password"
                                value={props.password}
                                required
                            />
                        </Grid>
                        <Grid container item>
                            <Button type="submit" variant="contained" fullWidth>Login</Button>
                        </Grid>
                        <Grid container item>
                            <Typography>
                                Don't have an account yet?
                                &nbsp;
                                <Link
                                    component={RouterLink}
                                    to="/register"
                                    underline="none"
                                >
                                    Register now
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
