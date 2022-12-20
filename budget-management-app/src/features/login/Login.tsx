import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Login = (props: any) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
                Login
            </Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <Grid container>
                    <Grid container item>
                        <TextField
                            id="username"
                            label="Username"
                            placeholder="example@mail.com"
                            type="email"
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="password"
                            label="Password"
                            placeholder="Set a password"
                            type="password"
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <Button type="submit" variant="contained">Login</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Login;
