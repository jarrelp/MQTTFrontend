// material-ui
import { useTheme } from '@mui/material/styles';

import LogoDevIcon from '@mui/icons-material/LogoDev';

// constants
import { borderRadius } from 'store/constant';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        <LogoDevIcon
            sx={{
                transition: 'all .2s ease-in-out',
                background: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                '&:hover': {
                    background: theme.palette.primary.dark,
                    color: theme.palette.primary.light
                },
                height: '48px',
                width: '48px',
                borderRadius: `${borderRadius}px`
            }}
        />
    );
};

export default Logo;
