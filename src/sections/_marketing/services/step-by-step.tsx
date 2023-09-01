import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { bgGradient } from 'src/theme/css';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: 'KROK 1: Wstępna konsultacja',
    title: 'Dowiedz się, czego naprawdę potrzebujesz',
    description:
      'Omów swoje potrzeby, preferencje i cele, aby określić, jakie funkcje inteligentnego domu będą dla Ciebie najlepsze.',
  },
  {
    step: 'Krok 2: Zbieranie wymagań',
    title: 'Dostosowanie do specyfikacji',
    description:
      'Podczas wspólnej rozmowy dopracowujemy szczegóły tego, czego szukasz, kształtując inteligentny dom Twoich marzeń.',
  },
  {
    step: 'Krok 3: Plan projektu',
    title: 'Opracowanie planu inteligentnego domu',
    description:
      'Stworzymy kompleksowy plan projektu, który obejmuje układ instalacji elektrycznej oraz sieci domowej, dostosowany do Twoich konkretnych potrzeb.',
  },
  {
    step: 'Krok 4: Wyposażenie i instalacja',
    title: 'Wprowadzanie planu w życie',
    description:
      'Na podstawie planu zainstalujemy wymagany sprzęt, a także zajmiemy się konfiguracją elektryczną i sieci LAN.',
  },
  {
    step: 'Krok 5: Konfiguracja i testowanie systemu',
    title: 'Zapewnienie bezbłędnego działania',
    description:
      'Skonfigurujemy i rygorystycznie przetestujemy wszystkie funkcje, aby upewnić się, że wszystko działa idealnie w nowym inteligentnym domu.',
  },
  {
    step: 'Krok 6: Praktyczne szkolenie',
    title: 'Opanuj nową technologię',
    description:
      'Przeprowadzimy praktyczne warsztaty, które pomogą ci zrozumieć, jak obsługiwać i korzystać z systemu inteligentnego domu.',
  },
  {
    step: 'Krok 7: Końcowy przegląd i odbiór',
    title: 'Finalizacja',
    description:
      'Podczas końcowej rozmowy dokonamy przeglądu instalacji, odpowiemy na wszelkie pytania i sfinalizujemy Twoje wejście w bardziej inteligentne życie.',
  },
];

const COLORS = [
  'secondary',
  'primary',
  'success',
  'success',
  'error',
  'primary',
  'info',
] as const;

// ----------------------------------------------------------------------

export default function StepByStep() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      id="stepbystep"
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Twoja droga do inteligentnego życia
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          Szczegółowe kroki od pierwszej konsultacji do finalnej akceptacji
        </Typography>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.step}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
