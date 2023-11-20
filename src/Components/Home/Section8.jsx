import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
const Section8 = () => {
  return ( 
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor: '#161616', 
        width: '100%',
        height: 'auto',
        paddingTop: '10rem',
        paddingBottom: '7rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent : 'center',
        gap: '10px',
      }}
    >
  <EmailIcon 
    style={{
        color: '#fff',
        fontSize: '43px', 
    }}
/>
      <Typography variant="body2" component="p"
           sx={{
            color : '#FFFFFF',
            fontWeight: '700',
            fontSize : '32px', 
          }}
        >
         Join Our List
       </Typography>
       <Typography variant="body2" component="p"
           sx={{
            color : '#FFFFFF',
            fontWeight: '400',
            fontSize : '20px', 
          }}
        >
        Don’t miss a beat. Stay up to date on the latest products, collabs and more.
       </Typography>
    </Box>
    <Box
  sx={{
    width: 'auto',
  }}
>
  <TextField
    id="filled-error"
    label="Email Address"
    defaultValue=""
    InputLabelProps={{
      style: { color: '#FFFFFF' },
    }}
    InputProps={{
      style: { 
        color: '#FFFFFF',
        fontSize: '0.875rem'
      },
    }}
    variant="filled"
    sx={{
      backgroundColor: 'none',
      width: '21rem !important',
      border: '2px solid #FFFFFF',
      borderRadius: '25px',
      '& .MuiFilledInput-underline:before': {
        borderBottom: 'none',
      },
      '& .MuiFilledInput-underline:after': {
        borderBottom: 'none',
      },
      '& .MuiFilledInput-underline:hover:before': {
        borderBottom: 'none',
      }
    }}
  />
</Box>

   
  </Box>
   );
}
 
export default Section8;