import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";

const AddBankAccount = (props: any) => {
    return (
        <Container maxWidth="md">
            <Typography variant="h1" align="center" gutterBottom>
                Add a bank account
            </Typography>
            <Box
                id="add-account-form"
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
                            id="account-name"
                            label="Account name"
                            placeholder="Set the account name"
                            type="text"
                            value={props.accountName}
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="bank-name"
                            label="Bank name"
                            placeholder="Set the bank name"
                            type="text"
                            value={props.bankName}
                            required
                        />
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="available-balance"
                            label="Initial balance"
                            placeholder="Set the initial balance"
                            type="number"
                            value={props.availableBalance}
                            required
                        />
                    </Grid>
                    <Grid container item lg={6} xl={6}>
                        <Link
                            component={RouterLink}
                            to="/bank-accounts"
                            underline="none"
                        >
                            Cancel
                        </Link>
                    </Grid>
                    <Grid container item lg={6} xl={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                        >
                            Add bank account
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AddBankAccount;
