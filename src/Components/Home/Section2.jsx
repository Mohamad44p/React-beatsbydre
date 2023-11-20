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
const Section2 = () => {
  return ( 
    <React.Fragment>
            <Box sx={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '70px',
        paddingBottom : '0px',
        mb : 0,
        backgroundColor : '#f1f1f1',
      }}>
      <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize : '39px',
          color : '#161616',
          fontWeight : 'bold',
          padding : '10px',
          fontFamily : 'Roboto',
          mb : '0px',
        }}
      >
       Holiday Gifts
      </Typography>
      </Box>
      <Box
      sx={{
        display: 'flex',
        position: 'relative', 
        paddingTop : '0px',
        justifyContent : 'center',
        gap : '10px',
        alignItems : 'center',
        backgroundColor : '#f1f1f1',
        height : '900px',
        
        '& > :not(style)': {
          m: 1,
          mt: 0,
          paddingTop : '0px',
          width: 420,
          height: 550,
          color : '#161616',
          borderRadius : '20px'
        },
      }}
    >
   
      <Paper elevation={5} 
       sx={{
        position: 'relative', 
        transition: 'all 0.3s ease', 
        '&:hover': {
          transform: 'scale(1.04)', 
          zIndex: 1 
        }
      }}
      >
      <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize : '30px',
          color : '#161616',
          fontWeight : 'bold',
          padding : '10px',
          fontFamily : 'Roboto',
          lineHeight : '10rem',
          ml : '1.2rem',
          mb : '0px', 
          mt : '0px' 
        }}
      >
       Beats Studio Buds<span>+</span>
      </Typography>
      <Typography variant="body2" component="p"
           sx={{
            color : '#161616',
            fontWeight: 'bold',
            fontSize : '24px',
            mt : '-3.9rem', 
            ml : '2rem',
          }}
        >
            $169.99
        </Typography>

        <img 
           src={beatsstudiobudsplus}  
           alt="beatsstudiobudsplus" 
           style={{
              width: '295px', 
              height: '295px', 
             margin : '0px 80px',
      }}
    />

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '40px 0px 0px',
      }}
    >
    <span
      style={{
        width: '21px', 
        height: '21px', 
        backgroundColor: '#161616', 
        borderRadius: '50%', 
        display: 'inline-block', 
      }}
    ></span>
    <span
      style={{
        width: '21px', 
        height: '21px',
        backgroundColor: '#F2EDE7',
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></span>
    <span
      style={{
        width: '21px', 
        height: '21px',
        backgroundColor: '#B4B7C5', 
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></span>
    <span
      style={{
        width: '21px', 
        height: '21px',
        backgroundColor: '#CAA1A4', 
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></span>
    <span
      style={{
        width: '21px', 
        height: '21px',
        backgroundColor: '#9C9C9E', 
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></span>
    </Box>

      </Paper>
      <Paper elevation={5}
           sx={{
            position: 'relative', 
            transition: 'all 0.3s ease', 
            '&:hover': {
              transform: 'scale(1.04)', 
              zIndex: 1 
            }
          }}
      >
      <Typography variant="h2" component="h2" gutterBottom
        sx={{
          fontSize : '30px',
          color : '#161616',
          fontWeight : 'bold',
          padding : '10px',
          fontFamily : 'Roboto',
          lineHeight : '10rem',
          ml : '1.2rem',
          mb : '0px',
          mt : '0px'
        }}
      >
       Beats Studio Pro
      </Typography>
      <Typography variant="body2" component="p"
           sx={{
            color : '#161616',
            fontWeight: 'bold',
            fontSize : '24px',
            ml : '2rem',
            mt : '-3.9rem', 
          }}
        >
            $349.99
        </Typography>
        <img 
           src={beatsstudiopro}  
           alt="beatsstudiobudsplus" 
           style={{
              width: '295px', 
              height: '295px', 
             margin : '0px 80px',
      }}
    />
    <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '40px 0px 0px',
  }}
>
<span
  style={{
    width: '21px', 
    height: '21px', 
    backgroundColor: '#2B2B2B', 
    borderRadius: '50%', 
    display: 'inline-block', 
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#382925',
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#26263D', 
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#D8CDC8', 
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>

</Box>
      </Paper>
      <Paper elevation={5}
           sx={{
            position: 'relative', 
            transition: 'all 0.3s ease', 
            '&:hover': {
              transform: 'scale(1.04)', 
              zIndex: 1 
            }
          }}
      >
       <Typography variant="h2" component="h2" gutterBottom
         sx={{
           fontSize : '30px',
           color : '#161616',
           fontWeight : 'bold',
           padding : '10px',
           fontFamily : 'Roboto',
           lineHeight : '10rem',
            ml : '1.2rem',
            mb : '0px',
         }}
       >
       Beats Solo Wirelless 
       </Typography> 
       <Typography variant="body2" component="p"
           sx={{
            color : '#161616',
            fontWeight: 'bold',
            fontSize : '24px',
            ml : '2rem',
            mt : '-3.9rem', 
          }}
        >
            $199.99
        </Typography>
        <img 
           src={solo3pink}  
           alt="beatsstudiobudsplus" 
           style={{
              width: '295px', 
              height: '295px', 
             margin : '0px 80px',
      }}
    />
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '40px 0px 0px',
  }}
>
<span
  style={{
    width: '21px', 
    height: '21px', 
    backgroundColor: '#090909', 
    borderRadius: '50%', 
    display: 'inline-block', 
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#CB9995',
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#CE2617', 
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#E4D3BA', 
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
<span
  style={{
    width: '21px', 
    height: '21px',
    backgroundColor: '#B1B1B1', 
    borderRadius: '50%',
    display: 'inline-block',
  }}
></span>
  </Box>
</Paper>
<Box
    sx={{
      position: 'absolute', 
      bottom: '-20%', 
      left: '58%',
      transform: 'translate(-50%, 50%)',
      zIndex: 1,
    }}
  >
    <Button variant="contained" disableElevation
      sx={{
        color: '#FFFFFF',
        backgroundColor: '#161616',
        fontSize : '16px',
        padding : '15px 40px 10px',
        borderRadius : '30px',
        width : '162px',
        height : '46px',
        whiteSpace : 'nowrap',
        '&:hover':{
          backgroundColor : '#e01e3c',
        }
      }}
    >
      VIEW GIFT GUIDE
    </Button>
  </Box>
</Box>
</React.Fragment>

   );
}
 
export default Section2;