import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
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
    icon: '/assets/icons/securitu-monitoring.svg',
  },
  {
    title: 'Bezpieczna lokalna sieć',
    description: 'Skonfigurowana sieć LAN i Wifi, zapewniająca ochronę i szybkość działania',
    icon: '/assets/icons/lan.svg',
  },
  {
    title: 'Notyfikacje i powiadomienia',
    description: 'Automatyczne powiadomienia o ważnych zdarzeniach w domu na Twojego smartfona',
    icon: '/assets/icons/lan.svg',
  },
  {
    title: 'Jednostka centrala o7k-station',
    description: 'Umożliwia zdalny dostęp do monitoringu CCTV, automatyki i innych funkcji',
    icon: '/assets/icons/lan.svg',
  },
  {
    title: 'Dostosowywalność i rozbudowa systemu',
    description: 'Możliwość łatwej rozbudowy i dostosowania systemu do indywidualnych potrzeb',
    icon: '/assets/icons/lan.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Lista funkcji w ramach programu pilotażowego</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Przekształć swój dom w innowacyjne środowisko dzięki najnowocześniejszym technologiom
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
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
          </div>
        ))}
      </Box>
    </Container>
  );
}
