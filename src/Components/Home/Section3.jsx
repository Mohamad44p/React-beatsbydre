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
import freeshippingicon from '../Assets/free-shipping-icon-hp-vp.png.large.2x.png'
import easyreturnsicon from '../Assets/easy-returns-icon-hp-vp.png.large.2x.png'
import instorepickupicon from '../Assets/in-store-pickup-icon-hp-vp.png.large.2x.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Section3 = () => {
  const boxContent = [
    {
      imgSrc: freeshippingicon,
      title: "Fast and free delivery",
      description: "Enjoy free two-day delivery on most in-stock items."
    },
    {
      imgSrc: instorepickupicon,
      title: "In-Store Pickup",
      description: "Pick up your online order at an Apple Store near you."
    },
    {
      imgSrc: easyreturnsicon,
      title: "Extended Holiday Returns",
      description: "Free returns on eligible Beats until 1/8/24."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        py: 4, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        mt: '30px', 
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize: '32px',
          color: '#161616',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          mb: 5, 
          textAlign: 'center',
        }}
      >
        Holiday Shopping Through Apple
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap : '2rem', 
          width: '80%', 
          maxWidth: '100%',
        }}
      >
        {boxContent.map((content, index) => (
          <Box 
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '10px',
              p: 2,
              maxWidth: '300px',
              mt: '10px',
            }}
          >
            <img
              src={content.imgSrc}
              alt={content.title}
              style={{
                width: '72',
                height: '74px',
                marginBottom: '16px', 
              }}
            />
            <Typography variant="h6" component="h2"
              sx={{
                fontSize: '24px',
                color: '#161616',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                mb: 1,
                textAlign: 'center',
              }}
            >
              {content.title}
            </Typography>
            <Typography variant="body2" component="p"
              sx={{
                color: '#161616',
                fontSize: '20px',
                textAlign: 'center',
                fontWeight : '400',
              }}
            >
              {content.description}
            </Typography>
            <Typography variant="body2" component="p"
                sx={{
                  position: 'relative', 
                  color: '#161616', 
                  fontWeight: 'bold',
                  fontSize: '24px',
                  textAlign: 'center',
                  mt: 1,
                  cursor: 'pointer', 
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px', 
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#161616', 
                    transition: 'background-color 0.1s', 
                  },
                  '&:hover::after': {
                    backgroundColor: '#E31837', 
                  },
                }}
            >
              Learn More <OpenInNewIcon sx={{ width: '23px', height: '24px' , verticalAlign : 'middle' , ml : '0.33rem' ,  }} />
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Section3;
