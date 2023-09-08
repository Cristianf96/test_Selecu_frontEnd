// import React from 'react'

import NavComponent from "../../components/Nav"
import { Player } from '@lottiefiles/react-lottie-player';
import { helloHomePage } from '../../assets/Animations'
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Home = () => {

  const { auth } = useContext(AuthContext)

  return auth && (
    <div>
      <NavComponent />
      <Box>
        <Box>
          <Player
            autoplay
            loop
            src={helloHomePage}
            style={{ height: '400px', width: '400px' }}
          />
        </Box>
        <Box>
          <Typography variant="h4" >
            Bienvenidos a tu libreria
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Home