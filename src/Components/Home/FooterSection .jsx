import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const FooterSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        color: '#161616',
        py: 5, 
        paddingTop : '6rem',
        textAlign: 'center', 
        fontSize: '0.875rem',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Products
          </Typography>
          <FooterLink href="#">View All</FooterLink>
          <FooterLink href="#">Special Offers</FooterLink>
          <FooterLink href="#">Collaborations</FooterLink>
          <FooterLink href="#">Beats Studio Pro</FooterLink>
          <FooterLink href="#">BEATS STUDIO BUDS +</FooterLink>
          <FooterLink href="#">BEATS FIR PRO</FooterLink>
          <FooterLink href="#">BEATS STUDIO BUDS</FooterLink>
          <FooterLink href="#">BEATS FLEX</FooterLink>
          <FooterLink href="#">POWEBEATS PRO</FooterLink>
          <FooterLink href="#">BEATS SOLO WIRELESS</FooterLink>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Support
          </Typography>
          <FooterLink href="#">Downloads</FooterLink>
          <FooterLink href="#">Product Help</FooterLink>
          <FooterLink href="#">Service & Warranty</FooterLink>
          <FooterLink href="#">Register Your Beats</FooterLink>
          <FooterLink href="#">UPDATE YOUR BEATS</FooterLink>
          <FooterLink href="#">AUTHORIZED RETALIERS</FooterLink>
          <FooterLink href="#">CONTACT SUPPORT</FooterLink>
          <FooterLink href="#">INTERNATIONAL NUMBERS</FooterLink>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Company
          </Typography>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Press</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Follow Us
          </Typography>
          <IconButton aria-label="twitter" color="inherit" component={Link} href="#">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="facebook" color="inherit" component={Link} href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="youtube" color="inherit" component={Link} href="#">
            <YouTubeIcon />
          </IconButton>
          <IconButton aria-label="instagram" color="inherit" component={Link} href="#">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          mt: 2,
          borderTop: '1px solid #e01e3c',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © 2023 Apple Inc. - All rights reserved.
        </Typography>
        <Typography variant="body2">
          Location: United States | <FooterLink href="#">Go Up</FooterLink>
        </Typography>
      </Box>
    </Box>
  );
};

const FooterLink = ({ children, href }) => (
  <Typography variant="body2" component='div' sx={{
    mt: 0.5,
    mb: 0.5,
    textDecoration: 'none',
  }}>
<Link
  href={href}
 
  sx={{
    position: 'relative', 
    color: '#757575', 
    fontWeight: '400',
    fontSize: '16px',
    mt: 1,
    textDecoration: 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0px', 
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: 'transparent',
      transition: 'background-color 0.1s',
    },
    '&:hover': {
      backgroundColor: 'transparent', 
      '&::after': {
        backgroundColor: '#E31837', 
      },
    },
  }}
>
      {children}
    </Link>
  </Typography>
);

export default FooterSection;
