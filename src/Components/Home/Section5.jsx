import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import mowalalodrop from '../Assets/mowalalo-drop.jpg';
import hpccfeaturesbeatsapp from '../Assets/hp-cc-features-beats-app.png';
import hpccpromospersonalizeitengraving from '../Assets/hp-cc-promos-personalize-it-engraving.png';
import hpccpromosfindyourbeats from '../Assets/hp-cc-promos--find-your-beats.png';
import hpccpromosapplemusic from '../Assets/hp-cc-promos-applemusic.png';

const Section5 = () => {
  const papers = [
    {
      src: mowalalodrop,
      alt: 'mowalalodrop',
      title: 'Collaborations',
      description: 'Explore one-of-a-kind, limited-edition product collabs',
      titleWeight: 700,
      descWeight: 400
    },
    {
      src: hpccfeaturesbeatsapp,
      alt: 'hpccfeaturesbeatsapp',
      title: 'Beats App for Android',
      description: 'Download the Beats app to unlock features.',
      titleWeight: 700,
      descWeight: 400
    },
    {
      src: hpccpromospersonalizeitengraving,
      alt: 'hpccpromospersonalizeitengraving',
      title: 'Personalize It',
      description: 'Free engraving for Beats Fit Pro Only at Apple.',
      titleWeight: 700,
      descWeight: 400
    },
    {
      src: hpccpromosfindyourbeats,
      alt: 'hpccpromosfindyourbeats',
      title: 'Find Your Beats',
      description: 'If your Beats are missing, track them down with `Find My` app.',
      titleWeight: 700,
      descWeight: 400
    },
    {
      src: hpccpromosapplemusic,
      alt: 'hpccpromosapplemusic',
      title: 'Free Apple Music',
      description: 'Enjoy 6 months of Apple Music free with select Beats.',
      titleWeight: 700,
      descWeight: 400
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem', 
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
      paddingTop: '10rem',
      paddingBottom: '5rem', 
      paddingX: '5rem', 
      margin: 0, 
    }}>
      {papers.map((paper, index) => (
        <Paper key={index} elevation={5}
          sx={{
            position: 'relative',
            transition: 'all 0.3s ease',
            borderRadius: '30px',
            '&:hover': { transform: 'scale(1.04)', zIndex: 1 },
            width: 420, 
            height: 480, 
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h2" gutterBottom
              sx={{
                fontSize: '27px',
                color: '#161616',
                fontWeight: paper.titleWeight,
                fontFamily: 'Roboto',
                textAlign: 'left',
                mb: '0.5rem',
                ml: '0.5rem',
              }}
            >
              {paper.title}
            </Typography>
            <Typography variant="body2"
              sx={{
                fontSize: '20px',
                color: '#161616',
                fontWeight: paper.descWeight, 
                textAlign: 'left',
                mb: '1rem',
                ml: '0.5rem',
              }}
            >
              {paper.description}
            </Typography>
          </Box>
          <img 
            src={paper.src}
            alt={paper.alt}
            style={{
              maxWidth: '100%', 
              maxHeight: '90%', 
              objectFit: 'contain', 
              alignSelf: 'center', 
            }}
          />
        </Paper>
      ))}
    </Box>
  );
};

export default Section5;
