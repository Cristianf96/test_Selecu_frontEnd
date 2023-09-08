import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import moment from "moment";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const tokenExist = localStorage.getItem('token') ?? ''
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState(false)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/test_selecu_frontSelecu')
    }

    const authenticate = async (userData) => {
        try {
            const options = {
                method: 'POST',
                url: import.meta.env.VITE_URL_LOGIN,
                data: { username: userData.username, password: userData.password }
            };

            const response = await axios.request(options).then(function (response) {
                return response.data
            }).catch(function (error) {
                alert('Could not login successfully.');
                setLoading(false)
                console.error(error);
            });

            if (response) {
                localStorage.setItem('token', response.access_token)
                setLoading(false)
            }
        } catch (error) {
            console.error('Error al autenticar:', error);
        }
    }

    useEffect(() => {


        if (login) {
            authenticate(login);
        }
        if (tokenExist) {
            const decoded = jwt_decode(tokenExist);
            if (decoded) {
                const { expiresAt } = decoded
                const isValid = expiresAt > moment().format('YYYY-MM-DD HH:mm')
                if (!isValid) {
                    localStorage.clear()
                    setAuth(true)
                    navigate('/test_selecu_frontSelecu')
                } else {
                    navigate('/test_selecu_frontSelecu/Home')
                }
            }
        } else {
            localStorage.clear()
            navigate('/test_selecu_frontSelecu')
        }
    }, [login, navigate, tokenExist]);

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            setLogin,
            loading,
            setLoading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider