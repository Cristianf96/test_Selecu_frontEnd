import { Box, Button, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types';

const FormLogin = ({
    handleUsernameChange,
    handlePasswordChange,
    handleSignIn
}) => {
    return (
        <>
            <Box>
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Welcome
                </Typography>
            </Box>
            <Box>
                <TextField
                    fullWidth
                    placeholder='Username'
                    sx={{
                        bgcolor: '#FFF',
                        borderRadius: '15px',
                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)',
                    }}
                    InputProps={{ sx: { borderRadius: '15px' } }}
                    onChange={handleUsernameChange}
                />
            </Box>
            <Box>
                <TextField
                    fullWidth
                    placeholder='Password'
                    sx={{
                        bgcolor: '#FFF',
                        borderRadius: '15px',
                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)',
                    }}
                    InputProps={{ sx: { borderRadius: '15px' } }}
                    onChange={handlePasswordChange}
                    type='password'
                />
            </Box>
            <Box>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: '#FFF',
                        color: '#000',
                        '&:hover': {
                            bgcolor: '#000',
                            color: '#FFF'
                        },
                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)',
                    }}
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
            </Box>
        </>
    )
}

FormLogin.propTypes = {
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleSignIn: PropTypes.func
};

export default FormLogin