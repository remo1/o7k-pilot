import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      id="home"
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1" sx={{ my: 3 }}>
              Postaw na inteligencję z
              <Box component="span" sx={{ color: 'primary.main' }}>
                {` o7k`}
              </Box>!
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Weź udział w naszym wyjątkowym programie pilotażowym i przekształć swój dom w zaawansowany system smart home!
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Button variant="contained" color="inherit" size="large">
                Zainwestuj w Przyszłość!
              </Button>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/illustrations/illustration_marketing_market.svg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
