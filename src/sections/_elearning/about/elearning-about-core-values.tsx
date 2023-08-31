import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const CORE_VALUES = [
  // {
  //   title: 'Customer Satisfaction',
  //   description: 'Aenean urna dictum adipiscing nec, cras quisque.',
  //   icon: 'carbon:3d-curve-auto-colon',
  // },
  // {
  //   title: 'Transparency',
  //   description: 'Aenean urna dictum adipiscing nec, cras quisque.',
  //   icon: 'carbon:chat-bot',
  // },
  // {
  //   title: 'Reputation',
  //   description: 'Aenean urna dictum adipiscing nec, cras quisque.',
  //   icon: 'carbon:airport-location',
  // },
  // {
  //   title: 'Cooperation',
  //   description: 'Aenean urna dictum adipiscing nec, cras quisque.',
  //   icon: 'carbon:event',
  // },
  {
    title: 'Inteligentne oświetlenie',
    description:
      'Automatyczne sterowanie oświetleniem w zależności od pory dnia, obecności w pomieszczeniu czy preferencji użytkownika',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Zarządzanie temperaturą',
    description:
      'Regulacja temperatury w zależności od pory dnia, pogody na zewnątrz i preferencji użytkownika',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Inteligentne rolety i żaluzje',
    description:
      'Automatyczne zasłanianie i odsłanianie w zależności od pory dnia oraz poziomu nasłonecznienia',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Zarządzanie energią',
    description: 'Monitorowanie zużycia energii oraz optymalizacja wykorzystania prądu w domu',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Bezpieczeństwo i monitoring',
    description: 'Inteligentne kamery i czujniki, które zapewniają bezpieczeństwo domowników',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Bezpieczna lokalna sieć',
    description: 'Skonfigurowana sieć LAN i Wifi, zapewniająca ochronę i szybkość działania',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'Notyfikacje i powiadomienia',
    description: 'Automatyczne powiadomienia o ważnych zdarzeniach w domu na Twojego smartfona',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'o7k-station',
    description: 'Komputer który umożliwia zdalny dostęp do monitoringu CCTV, automatyki i innych funkcji',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'Dostosowywalność i rozbudowa systemu',
    description: 'Możliwość łatwej rozbudowy i dostosowania systemu do indywidualnych potrzeb',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Przemień Swój Dom</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            Od automatyzacji po oszczędność energii - poznaj funkcje naszego spersonalizowanego programu pilotażowego
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} /> */}
              <SvgColor
                src={value.icon}
                color="info"
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  bgcolor: 'primary.main',
                }}
              />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
