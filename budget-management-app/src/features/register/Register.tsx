import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";

const Register = (props: any) => {
    return (
        <Container maxWidth="md">
            <Typography variant="h1" align="center" gutterBottom>
                Register
            </Typography>
            <Box
                id="register-form"
                component="form"
                sx={{
                    '& .MuiTextField-root': { marginBottom: '24px', width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <Grid container>
                    <Grid container item lg={6} xl={6}>
                        <TextField
                            id="first-name"
                            label="First name"
                            placeholder="Set your first name"
                            type="text"
                            value={props.firstName}
                            required
                        />
                    </Grid>
                    <Grid container item lg={6} xl={6}>
                        <TextField
                            id="last-name"
                            label="Last name"
                            placeholder="Set your last name"
                            type="text"
                            value={props.lastName}
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="username"
                            label="Username"
                            placeholder="Set your username"
                            type="text"
                            value={props.username}
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="email"
                            label="Email"
                            placeholder="Set your email: example@mail.com"
                            type="email"
                            value={props.email}
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
                        <Button type="submit" variant="contained" fullWidth>Register</Button>
                    </Grid>
                    <Grid container item>
                        <Typography>
                            Already have login and password?
                            &nbsp;
                            <Link
                                component={RouterLink}
                                to="/signin"
                                underline="none"
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;
