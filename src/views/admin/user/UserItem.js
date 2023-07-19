import { useState } from 'react';

// material-ui
import { Checkbox, IconButton, Menu, MenuItem, TableCell, TableRow, Typography } from '@mui/material';

// project imports
import EditUser from './EditUser';
import AlertUserDelete from './AlertUserDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { deleteUser } from 'store/slices/user';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const UserItem = ({ user, isItemSelected, labelId, handleClick }) => {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);
    const { users } = userSelector;

    const [openEdit, setOpenEdit] = useState(false);
    const handleClickOpenEditDialog = () => {
        setOpenEdit(true);
    };
    const handleCloseEditDialog = () => {
        setOpenEdit(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDeleteModalClose = (status) => {
        setOpenDeleteModal(false);
        if (status) {
            dispatch(deleteUser(user.id, users));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Task Deleted successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    };

    return (
        <>
            <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected}>
                <TableCell padding="checkbox" sx={{ pl: 3, pr: 3 }} onClick={(event) => handleClick(event, user.id)}>
                    <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                            'aria-labelledby': labelId
                        }}
                    />
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, user.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {user.id}
                    </Typography>
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, user.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {user.name}
                    </Typography>
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, user.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {user.department}
                    </Typography>
                </TableCell>

                <TableCell align="right" sx={{ pl: 3, pr: 3, width: 0 }}>
                    <IconButton onClick={handleMenuClick} size="large">
                        <MoreHorizOutlinedIcon aria-controls="menu-popular-card-1" aria-haspopup="true" sx={{ fontSize: '1.3rem' }} />
                    </IconButton>
                    <Menu
                        id="menu-popular-card-1"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        sx={{
                            '& .MuiMenu-paper': {
                                boxShadow: 1
                            }
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                handleClickOpenEditDialog();
                            }}
                        >
                            {' '}
                            Edit
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setOpenDeleteModal(true);
                            }}
                        >
                            {' '}
                            Delete
                        </MenuItem>
                        {openDeleteModal && (
                            <AlertUserDelete title={user.name} open={openDeleteModal} handleClose={handleDeleteModalClose} />
                        )}
                    </Menu>
                </TableCell>
            </TableRow>
            <EditUser user={user} open={openEdit} handleCloseDialog={handleCloseEditDialog} />
        </>
    );
};

export default UserItem;
