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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import hpherostudiobudsplus from '../Assets/hp-hero-studiobudsplus-le.jpg.large.2x.jpg'
const Section4 = () => {
  return ( 
    <Box
    sx={{
      mt: '3px',
      backgroundImage: `url(${hpherostudiobudsplus})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      minHeight : '850px', 
      width: '100%',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContents : 'center',
        alignItems : 'flexstart',
        ml : '5rem',
      }}
    >
    <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize : '28px',
          color : '#FFFFFF',
          fontWeight : '700',
          fontFamily : 'Roboto', 
          mt : '5rem',
          mb : '0px',
          padding : '0px',
        }}
      >
       NEW COLORS
      </Typography>
      <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize : '85px',
          color : '#FFFFFF',
          fontWeight : '700',
          fontFamily : 'Roboto', 
          margin: '0px'        
        }}
      >
        Beats Studio Buds +
      </Typography>
      <Typography variant="body2" component="p"
           sx={{
            color : '#FFFFFF',
            fontWeight: '700',
            fontSize : '26px',
            mt : '0px',
          }}
        >
           Powerful Sound. Perfect Fit.
        </Typography>
    </Box>
    <Box
      sx={{
          display : 'flex',
          justifyContent : 'flexstart',
          alignItems : 'center',
          gap : '1.2rem',
          marginLeft : '5rem',
          marginTop : '0.5rem',
      }}
    >
      <Button variant="contained"
        sx={{
          color : '#161616',
          fontSize : '15px',
          padding : '5px 37px 2px',
          borderRadius : '30px',
          backgroundColor: '#FFFFFF',
          width : '110px',
          height : '55px',
          fontWeight : '700',
          fontFamily : 'Roboto',
          '&:hover': {
            background: 'red', 
            color : '#fff',
            border : '2px solid',
            borderColor : '#FFFFFF',
          }
        }}
      >
        SHOP
        </Button>
      <Button variant="outlined"
        sx={{
          background : 'none',
          borderRadius : '30px',
          padding : '5px 10px  2px',
          fontSize : '12px',
          width : 'auto',
          minWidth: '168px', 
          height : '55px',
          color : '#FFFFFF', 
          borderColor : '#FFFFFF',
          borderWidth : '3px',
          fontWeight : '700',
          whiteSpace: 'nowrap',
          '&:hover': {
            background: 'red', 
            color : '#fff',
            borderColor : '#FFFFFF',
            borderWidth : '3px',
          }
        }}
      >
        WATCH THE VIDEO
        </Button>
    </Box>
  </Box>
   );
}
 
export default Section4;