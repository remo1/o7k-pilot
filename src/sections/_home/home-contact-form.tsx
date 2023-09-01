'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingContactInfo from '../_marketing/contact/marketing-contact-info';
import MarketingContactForm from '../_marketing/contact/marketing-contact-form';

// ----------------------------------------------------------------------

export default function MarketingContactFormSection() {
  return (
    <Container
      id='contact'
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <MarketingContactInfo />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Zapisz się do programu pilotażowego o7k Smart Living!
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Po wypełnieniu formularza kontaktowego, skontaktujemy się z Tobą w ciągu 2 dni
            roboczych.
          </Typography>
          <MarketingContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}
