// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="http://localhost:3000" target="_blank" underline="hover">
            http://localhost:3000
        </Typography>
        <Typography variant="subtitle2" component={Link} href="http://localhost:3000" target="_blank" underline="hover">
            &copy; http://localhost:3000
        </Typography>
    </Stack>
);

export default AuthFooter;
