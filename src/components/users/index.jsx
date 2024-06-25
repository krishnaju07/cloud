import React, { useEffect, useState } from 'react';
import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewuserModal from './NewUserModal';
import { useDispatch, useSelector } from 'react-redux';
import { userListAction } from '../../redux/actions/action';

const Users = () => {
    const dispatch = useDispatch();
    const { userList } = useSelector(state => state.UserReducer); 
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(userListAction());
    }, [dispatch]);

    useEffect(() => {
        setData(userList);
    }, [userList]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddUser = () => {
        setOpen(true);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h5" gutterBottom>User List</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" onClick={handleAddUser}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <TableCell>Name</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Website</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>{user.website}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            {open && <NewuserModal open={open} handleClose={handleClose} />}
        </Grid>
    );
};

export default Users;
