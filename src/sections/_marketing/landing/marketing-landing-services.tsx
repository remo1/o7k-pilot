import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'] as const;

const SERVICES = [
  {
    name: 'Cena',
    icon: '/assets/icons/service/price.svg',
    content:
      'Uzyskaj najnowocześniejszą technologię inteligentnego domu za ułamek standardowej ceny',
    path: '#',
  },
  {
    name: 'Bezpieczeństwo',
    icon: '/assets/icons/service/security.svg',
    content: 'Zaawansowane środki bezpieczeństwa, aby chronić Twój dom i dane',
    path: '#',
  },
  {
    name: 'Kontrola',
    icon: '/assets/icons/service/configure.svg',
    content:
      'Zarządzaj światłem, temperaturą, zabezpieczeniami i nie tylko—wszystko z jednej aplikacji',
    path: '#',
  },
  {
    name: 'Ewolucja',
    icon: '/assets/icons/service/upgrade.svg',
    content: 'Nasz system jest zaprojektowany do ewolucji. Oczekuj nowych funkcji i ulepszeń',
    path: '#',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <Container
      id="korzysci"
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        {/* <Typography variant="overline" sx={{ color: 'text.disabled' }} /> */}

        <Typography variant="h2">Korzyści z programu</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Odkryj zalety uczestnictwa w naszym programie pilotażowym o7k smart living
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    content: string;
    path: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </TextMaxLine>
      </Stack>

      {/* <IconButton */}
      {/*  component={RouterLink} */}
      {/*  href={path} */}
      {/*  color={ */}
      {/*    (index === 0 && 'primary') || */}
      {/*    (index === 1 && 'secondary') || */}
      {/*    (index === 2 && 'success') || */}
      {/*    'warning' */}
      {/*  } */}
      {/* > */}
      {/*  <Iconify icon="carbon:direction-straight-right" /> */}
      {/* </IconButton> */}
    </Card>
  );
}
