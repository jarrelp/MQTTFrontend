import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef, Fragment } from 'react';

// material-ui
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Slide,
    TextField,
    Autocomplete,
    Box,
    CircularProgress
} from '@mui/material';

// third party
import * as yup from 'yup';
import { Chance } from 'chance';
import { useFormik } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addUser } from 'store/slices/user';
import { getDepartmentsList } from 'store/slices/departments';
import { selectLoading } from 'store/slices/loading';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// validation
const chance = new Chance();
const validationSchema = yup.object({
    name: yup.string().required('User name is required')
});

// ==============================|| ADD DEPARTMENT DIALOG ||============================== //

const AddUser = ({ open, handleCloseDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { users } = user;

    // autocomplete
    const [departments, setDepartments] = useState([]);
    const departmentState = useSelector((state) => state.department);

    const [openAutoComplete, setOpenAutoComplete] = useState(false);

    useEffect(() => {
        setDepartments(departmentState.departments);
    }, [departmentState]);

    useEffect(() => {
        if (openAutoComplete && departments.length == 0) {
            dispatch(getDepartmentsList());
        }
    }, [dispatch, openAutoComplete]);

    const isLoading = useSelector(selectLoading);

    const formik = useFormik({
        initialValues: {
            id: `${chance.integer({ min: 1000, max: 9999 })}`,
            name: '',
            department: ''
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(addUser(values, users));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Submit Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
            handleCloseDialog();
        }
    });

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            sx={{
                '&>div:nth-of-type(3)': {
                    '&>div': {
                        m: 0,
                        borderRadius: `${borderRadius}px`,
                        maxWidth: 450,
                        maxHeight: '100%'
                    }
                }
            }}
        >
            {open && (
                <form onSubmit={formik.handleSubmit}>
                    <DialogTitle variant="subtitle3">Add User</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="department"
                                    open={openAutoComplete}
                                    onOpen={() => {
                                        setOpenAutoComplete(true);
                                    }}
                                    onClose={() => {
                                        setOpenAutoComplete(false);
                                    }}
                                    value={formik.values.department}
                                    // onBlur={handleBlur}
                                    onChange={(event, value) => formik.setFieldValue('department', value)}
                                    options={departments}
                                    fullWidth
                                    autoHighlight
                                    getOptionLabel={(option) => option.name ?? ''}
                                    isOptionEqualToValue={(option) => option === formik.values.department}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            {option.name}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <Fragment>
                                                        {isLoading && openAutoComplete ? (
                                                            <CircularProgress color="inherit" size={20} />
                                                        ) : null}
                                                        {params.InputProps.endAdornment}
                                                    </Fragment>
                                                )
                                            }}
                                        />
                                    )}
                                    sx={{ marginTop: '5px', marginBottom: '5px' }}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained" type="submit">
                                Create
                            </Button>
                        </AnimateButton>
                        <Button variant="text" color="error" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </form>
            )}
        </Dialog>
    );
};

AddUser.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default AddUser;
