import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
// theme
import { bgGradient } from 'src/theme/css';
//
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    emailTitle: 'Email',
    address: 'enquiries@unis.one',
    phoneNumber: '03455 841 911',
  },
  // {
  //   country: 'London',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(319) 555-0115',
  // },
  // {
  //   country: 'Prague',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(252) 555-0126',
  // },
  // {
  //   country: 'Moscow',
  //   address: '508 Bridle',
  //   phoneNumber: '(307) 555-0133',
  // },
];

// ----------------------------------------------------------------------

export default function ContactHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/images/contact/hero.jpg',
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <TextAnimate text="Contact" sx={{ color: '#ffffff' }} variants={varFade().inRight} />
          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate sx={{ color: '#48d893', fontWeight: '900' }} text="UNIS" />
            <TextAnimate text="today" />
          </Stack>

          <Stack
            spacing={5}
            alignItems={{ xs: 'center', md: 'unset' }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ mt: 5, color: 'common.white' }}
          >
            {CONTACTS.map((contact) => (
              <Stack key={contact.country} sx={{ maxWidth: 180 }}>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h3" sx={{ opacity: 0.8 }}>
                    {contact.address}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h4" sx={{ opacity: 0.8 }}>
                    {contact.phoneNumber}
                  </Typography>
                </m.div>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
