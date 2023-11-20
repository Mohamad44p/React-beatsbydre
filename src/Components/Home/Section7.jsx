import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const Section7 = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        padding :'5rem',
        width : '100%',
      }}
    >
       <Typography variant="body2" component="p"
           sx={{
            color : '#757575',
            fontWeight: '700',
            fontSize : '12px', 
            marginBottom : '1rem',
            textAlign: 'left',
            lineHeight : '1.5',
          }}
        >
          1 Works with compatible Beats headphones. Find My Beats requires an iPhone or iPod touch with iOS 14.5 or later, iPad with iPadOS 14.5 or later, or Mac with macOS Big Sur 11.3 or later. Customers must have an <br/> Apple ID and be signed into their iCloud account with Find My enabled.
        </Typography>
        <Typography variant="body2" component="p"
           sx={{
            color : '#757575',
            fontWeight: '700',
            fontSize : '12px',
            textAlign: 'left',
            lineHeight : '1.5',
          }}
        >
          2 New subscribers only. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews at your region’s price per month until cancelled. Restrictions and other terms apply.
        </Typography>
    </Box>
    );
}
 
export default Section7;