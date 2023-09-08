import { useContext, useState } from 'react'
import { Box } from '@mui/material'
import { AuthContext } from '../../Contexts/AuthContext'
import { Player } from '@lottiefiles/react-lottie-player';
import { loadingAnimation } from '../../assets/Animations'
import FormLogin from './components/Form';

const AuthLogin = () => {

    const { setLogin, loading, setLoading } = useContext(AuthContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignIn = () => {
        setLoading(true)
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter a valid username and password.');
            setLoading(false)
            return;
        }

        setLogin({
            username: username,
            password: password
        });
    }

    return (
        <Box
            sx={{
                width: '250px',
                height: '250px',
                bgcolor: '#6b6b6b',
                borderRadius: '50px',
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '70px 50px'
            }}
        >
            {loading ? (
                <Player
                    autoplay
                    loop
                    src={loadingAnimation}
                    style={{ height: '250px', width: '250px' }}
                />
            ) : (
                <FormLogin
                    handleUsernameChange={handleUsernameChange}
                    handlePasswordChange={handlePasswordChange}
                    handleSignIn={handleSignIn}
                />
            )}
        </Box>
    )
}

export default AuthLogin