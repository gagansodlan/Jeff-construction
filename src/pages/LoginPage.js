import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link, Container, Typography,  } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import useResponsive from '../hooks/useResponsive';

import Logo from '../components/logo';
import { LoginForm } from '../sections/auth/login';

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
    const user = useSelector((userValues) => userValues.auth.user)
    const mdUp = useResponsive('up', 'md');

    return (
        <>
            <Helmet>
                <title> Login  </title>
            </Helmet>

            <StyledRoot>
                <Logo
                    sx={{
                        position: 'fixed',
                        top: { xs: 16, sm: 24, md: 40 },
                        left: { xs: 16, sm: 24, md: 40 },
                    }}
                />

                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            {user ? (<h2>Welcome, {user.name}!</h2>) : (<h2>Please Login</h2>)}
                        </Typography>
                        <img src="/assets/illustrations/illustration_login.png" alt="login" />
                    </StyledSection>
                )}

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Sign in to Minimal
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Don’t have an account? {''}
                            <Link variant="subtitle2" component={RouterLink} to="/signup">
                                Sign Up
                            </Link>
                        </Typography>


                        <LoginForm />
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}