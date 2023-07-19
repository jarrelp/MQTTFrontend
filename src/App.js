import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Snackbar from 'ui-component/extended/Snackbar';

import { JWTProvider as AuthProvider } from 'contexts/JWTContext';

// ==============================|| APP ||============================== //

const App = () => {
    const menu = useSelector((state) => state.menu);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(menu)}>
                <CssBaseline />
                <NavigationScroll>
                    <AuthProvider>
                        <Routes />
                        <Snackbar />
                    </AuthProvider>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
