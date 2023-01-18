import { Link as RouterLink } from "react-router-dom";
import { Container, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50
    },
    {
        field: 'accountName',
        headerName: 'Account name',
        width: 200,
        editable: true,
    },
    {
        field: 'bankName',
        headerName: 'Bank name',
        width: 200,
        editable: true,
    },
    {
        field: 'availableBalance',
        headerName: 'Available balance',
        type: 'number',
        width: 200,
    }
];

const rows = [
    { id: 1, accountName: 'Main account', bankName: "Bank 1", availableBalance: 355.67 },
    { id: 2, accountName: 'Secondary  account', bankName: "Bank 2", availableBalance: 559.70 },
];


const BankAccounts = (props: any) => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h1" align="center" gutterBottom>
                Bank accounts
            </Typography>
            <Grid container>
                <Grid container item >
                    <Link
                        component={RouterLink}
                        to="add"
                        underline="none"
                    >
                        Add a bank account
                    </Link>
                </Grid>
                <Grid container item sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true, }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BankAccounts;