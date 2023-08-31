import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const LISTS = [
  'Kompleksowa usługa od instalacji po utrzymanie',
  'Oparte na sprawdzonym oprogramowaniu open source',
  'Ukierunkowane na przyszłe innowacje i aktualizacje',
  'Ekskluzywne korzyści dla uczestników programu pilotażowego',
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <Image alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Kim jesteśmy?</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Jesteśmy pionierami przyszłości automatyki domowej. Nasze
              kompleksowe usługi 360 obejmują instalację, oryginalne oprogramowanie i bieżące
              wsparcie. Zrób pierwszy krok w kierunku inteligentnego domu, dołączając do naszego
              programu pilotażowego!
            </Typography>

            <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {text}
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Button
            component={RouterLink}
            href={paths.marketing.caseStudies}
            size="large"
            color="inherit"
            variant="outlined"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Dowiedz się więcej
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
