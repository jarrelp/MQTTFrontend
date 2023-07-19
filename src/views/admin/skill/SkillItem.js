import { useState } from 'react';

// material-ui
import { Checkbox, IconButton, Menu, MenuItem, TableCell, TableRow, Typography } from '@mui/material';

// project imports
import EditSkill from './EditSkill';
import AlertSkillDelete from './AlertSkillDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch } from 'store';
import { deleteSkill } from 'store/slices/skills';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const SkillItem = ({ skill, isItemSelected, labelId, handleClick }) => {
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
            dispatch(deleteSkill(skill.id));
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
                <TableCell padding="checkbox" sx={{ pl: 3, pr: 3 }} onClick={(event) => handleClick(event, skill.id)}>
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
                    onClick={(event) => handleClick(event, skill.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {skill.id}
                    </Typography>
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, skill.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {skill.name}
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
                            <AlertSkillDelete title={skill.name} open={openDeleteModal} handleClose={handleDeleteModalClose} />
                        )}
                    </Menu>
                </TableCell>
            </TableRow>
            <EditSkill skill={skill} open={openEdit} handleCloseDialog={handleCloseEditDialog} />
        </>
    );
};

export default SkillItem;
