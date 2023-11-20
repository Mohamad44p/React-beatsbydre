import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import beatsLogo from '../Assets/beats-logo-161616.png'; 
import hpHeroImage from '../Assets/hp-hero-studiopro.jpg.large.2x.jpg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import beatsstudiobudsplus from '../Assets/beatsstudiobudsplus-transparent.jpg'
import beatsstudiopro from '../Assets/beats-studio-pro-sandstone.jpg'
import solo3pink from '../Assets/solo3-pink-2.png'
const backgroundImagePath = `url(${hpHeroImage})`; // Ensure hpHeroImage is imported

const Section1 = () => {
  return ( 
    <Box
    sx={{
      width : '100%',
      height : '850px',
      backgroundImage: backgroundImagePath,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    p: 2 
  }}>
    <Typography variant="body2" component="p" gutterBottom mb={0}  mt={43} mr={210} sx={{
      color : '#E31837',
      fontWeight: 'bold',
      fontSize : '22px',
      }} >
        New
    </Typography>
    <Typography variant="h3" component="h3" gutterBottom mb={0} mt={0} mr={195}
    sx={{
      color : '#161616',
      fontWeight: 'bold',
      fontSize : '67px',
      }} 
    >
        Beats
    </Typography>
    <Typography variant="h2" component="h2" gutterBottom mb={0} mt={0} mr={179}
    sx={{
        color : '#161616',
        fontWeight: 'bold',
        fontSize : '67px',
      }}
    >
      Studio Pro
    </Typography>
    <Typography variant="body2" component="p"  mt={0} mr={195}
       sx={{
        color : '#161616',
        fontWeight: 'bold',
        fontSize : '29px',
      }}
    >
        Iconic Sound
    </Typography>
    <Box sx={{
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'flex-start', 
       width: '100%', 
       mt: 2, 
       ml: 18,
   }}>
  <Button variant="contained" sx={{ 
      background : '#161616',
      borderRadius : '30px',
      padding : '5px 37px  2px',
      fontSize : '17px',
      width : '106px',
      height : '50px',
      mr : '20px',
      fontWeight : 'bold',
      '&:hover': {
        background: 'red', 
        color : '#fff',
        border : '2px solid',
        borderColor : '#161616',
      }
    }}>  
      Shop
      </Button>
  <Button variant="outlined"
    sx={{
      background : 'none',
      borderRadius : '30px',
      padding : '5px 37px  2px',
      fontSize : '17px',
      width : 'auto',
      minWidth: '168px', 
      height : '46px',
      color : '#161616',
      borderColor : '#161616',
      borderWidth : '3px',
      fontWeight : 'bold',
      whiteSpace: 'nowrap',
      '&:hover': {
        background: '#161616', 
        color : '#fff',
        borderColor : '#161616',
      }
    }}
  >
    WATCH THE VIDEO
  </Button>
</Box>  
  </Box>
  </Box>
   );
}
 
export default Section1;