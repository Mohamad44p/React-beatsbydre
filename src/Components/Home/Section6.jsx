import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import hpregisterfitprosolo3 from '../Assets/hp-register--fitpro-solo3.png.large.2x.png';
const Section6 = () => {
  return ( 
    <Box
  sx={{
      width: '100%',
      height: '570px',
      backgroundColor: '#161616',
      backgroundImage: 'linear-gradient(160deg, #161616 0%, #757575 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap : '10px',
      }}
    >
      <img
        src= {hpregisterfitprosolo3}
        alt='hpregisterfitprosolo3'
        style={{
          width: '469px',
          height: '442px',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent : 'center',
          alignItems : 'flexstart',
        }}
      >
          <Typography variant="h2" gutterBottom
              sx={{
                fontSize: '64px',
                color: '#FFFFFF',
                fontWeight: '700',
                fontFamily: 'Roboto',
              }}
            >
              REGISTER YOUR BEATS
            </Typography>

     <Button variant="contained" disableElevation
           sx={{
          color: '#161616',
          backgroundColor: '#fff',
          fontSize : '17px',
          padding : '25px',
          paddingBottom : '27px',
          paddingTop : '30px',
          paddingLeft : '28px',
          paddingRight : '28px',
          fontWeight : '700',
          borderRadius : '30px',
          width : '162px',
          height : '46px',
          whiteSpace : 'nowrap',
          textAlign : 'center',
          '&:hover':{
           backgroundColor : '#e01e3c',
         }
       }}
     >
      REGISTER Now
    </Button>
    </Box>
 </Box>
   );
}
 
export default Section6;