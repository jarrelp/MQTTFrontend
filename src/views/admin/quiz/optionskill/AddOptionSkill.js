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
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Autocomplete,
    Box,
    CircularProgress
} from '@mui/material';

// third party
import * as yup from 'yup';
import { useFormik } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addOptionSkill } from 'store/slices/optionSkill';
import { getSkillsList, selectSkills } from 'store/slices/skills';
import { selectLoading } from 'store/slices/loading';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// validation
const validationSchema = yup.object({
    // description: yup.string().required('OptionSkill description is required')
});

// ==============================|| ADD DEPARTMENT DIALOG ||============================== //

const AddOptionSkill = ({ optionId, open, handleCloseDialog }) => {
    const dispatch = useDispatch();

    // autocomplete
    const skillState = useSelector(selectSkills);

    const [openAutoComplete, setOpenAutoComplete] = useState(false);

    useEffect(() => {
        if (openAutoComplete && skillState.length == 0) {
            dispatch(getSkillsList());
        }
    }, [dispatch, openAutoComplete]);

    const isLoading = useSelector(selectLoading);

    const formik = useFormik({
        initialValues: {
            optionId: parseInt(optionId),
            skill: '',
            skillLevel: ''
        },
        validationSchema,
        onSubmit: (values) => {
            let optionId = values.optionId;
            let skillId = values.skill.id;
            let skillLevel = parseInt(values.skillLevel);
            let request = { optionId, skillId, skillLevel };
            dispatch(addOptionSkill(request));
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
                    <DialogTitle variant="subtitle3">Add OptionSkill</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="subtitle1">Skill:</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <Autocomplete
                                            id="skill"
                                            open={openAutoComplete}
                                            onOpen={() => {
                                                setOpenAutoComplete(true);
                                            }}
                                            onClose={() => {
                                                setOpenAutoComplete(false);
                                            }}
                                            value={formik.values.skill}
                                            // onBlur={handleBlur}
                                            onChange={(event, value) => formik.setFieldValue('skill', value)}
                                            options={skillState}
                                            fullWidth
                                            autoHighlight
                                            getOptionLabel={(option) => option.name ?? ''}
                                            // isOptionEqualToValue={(option) => option === formik.values.skill}
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
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="subtitle1">Level:</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-label="color"
                                                value={formik.values.skillLevel}
                                                onChange={formik.handleChange}
                                                name="skillLevel"
                                                id="skillLevel"
                                            >
                                                <FormControlLabel
                                                    value={1}
                                                    control={<Radio color="primary" sx={{ color: 'primary.main' }} />}
                                                    label="Low"
                                                />
                                                <FormControlLabel
                                                    value={2}
                                                    control={<Radio color="warning" sx={{ color: 'warning.main' }} />}
                                                    label="Medium"
                                                />
                                                <FormControlLabel
                                                    value={3}
                                                    control={<Radio color="error" sx={{ color: 'error.main' }} />}
                                                    label="High"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
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

AddOptionSkill.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default AddOptionSkill;
