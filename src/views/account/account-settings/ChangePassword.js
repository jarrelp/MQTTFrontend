// material-ui
import { Button, Grid, Stack, TextField } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| PROFILE - CHANGE PASSWORD ||============================== //

const ChangePassword = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
            <TextField type="password" fullWidth label="Current Password" defaultValue="123456" />
        </Grid>
        <Grid item xs={12} sm={6} />
        <Grid item xs={12} sm={6}>
            <TextField type="password" fullWidth label="New Password" defaultValue=" 111111" />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField type="password" fullWidth label="Confirm Password" defaultValue="111111" />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Stack direction="row">
                <AnimateButton>
                    <Button variant="outlined" size="large">
                        Change Password
                    </Button>
                </AnimateButton>
            </Stack>
        </Grid>
    </Grid>
);

export default ChangePassword;
