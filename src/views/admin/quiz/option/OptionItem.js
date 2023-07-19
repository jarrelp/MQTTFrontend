import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Checkbox, IconButton, Menu, MenuItem, TableCell, TableRow, Typography } from '@mui/material';

// project imports
import EditOption from './EditOption';
import AlertOptionDelete from './AlertOptionDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch } from 'store';
import { deleteOption } from 'store/slices/option';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const OptionItem = ({ questionId, option, isItemSelected, labelId, handleClick }) => {
    const dispatch = useDispatch();

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
            dispatch(deleteOption(option.id));
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
                <TableCell padding="checkbox" sx={{ pl: 3, pr: 3 }} onClick={(event) => handleClick(event, option.id)}>
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
                    onClick={(event) => handleClick(event, option.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {option.id}
                    </Typography>
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, option.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {option.description}
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
                        <MenuItem component={Link} to={`/admin/option/${option.id}`}>
                            {' '}
                            OptionSkills
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
                            <AlertOptionDelete title={option.name} open={openDeleteModal} handleClose={handleDeleteModalClose} />
                        )}
                    </Menu>
                </TableCell>
            </TableRow>
            <EditOption questionId={questionId} option={option} open={openEdit} handleCloseDialog={handleCloseEditDialog} />
        </>
    );
};

export default OptionItem;
