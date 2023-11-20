import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Section1 from './Section1';
import Section2 from './Section2';
import Navbar from './Navbar';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import FooterSection from './FooterSection ';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightBold: 700,
  },
});

function HomePageNavbar() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <FooterSection/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default HomePageNavbar;
