import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const LISTS = [
  'Od projektu przez instalację do bieżącego wsparcia: jesteśmy z Tobą na każdym etapie',
  'Wykorzystujemy zaufane technologie open-source',
  'Regularne aktualizacje i innowacyjne rozwiązania ',
  'Wyjątkowe korzyści dla uczestników programu pilotażowego',
];

// ----------------------------------------------------------------------

export default function WhoWeAre() {
  return (
    <Container
      id="kimjestesmy"
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
              Jesteśmy zespołem specjalistów w dziedzinie automatyki domowej i inteligentnych
              rozwiązań dla Twojego domu. Nasza oferta to więcej niż tylko produkty; to kompleksowa
              usługa, która przekształca Twój dom w inteligentne miejsce życia.
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
            href="#"
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
