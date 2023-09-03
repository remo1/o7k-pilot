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
    title: 'Odkryj Możliwości Inteligentnego Domu',
    description:
      'Dowiedz się, jakie funkcje inteligentnego domu są dla Ciebie najlepsze. Zdefiniuj swoje potrzeby i cele podczas wstępnej konsultacji',
  },
  {
    step: 'Krok 2: Spersonalizowane Wymagania',
    title: 'Dokładne Określenie Twoich Potrzeb',
    description:
      'Podczas wspólnej rozmowy dopracowujemy szczegóły tego, czego szukasz, kształtując inteligentny dom Twoich marzeń',
  },
  {
    step: 'Krok 3: Indywidualny Plan Projektu',
    title: 'Otrzymaj kompleksowy plan',
    description:
      'Stworzymy kompleksowy plan projektu, który obejmuje układ instalacji elektrycznej oraz sieci domowej, dostosowany do Twoich konkretnych potrzeb',
  },
  {
    step: 'Krok 4: Profesjonalna Instalacja',
    title: 'Realizacja planu',
    description:
      'Na podstawie planu zainstalujemy wymagany sprzęt, a także zajmiemy się konfiguracją systemu i sieci LAN',
  },
  {
    step: 'Krok 5: Testy i Konfiguracja',
    title: 'Zapewnienie Wysokiej Jakości Działania',
    description:
      'Przeprowadzimy dokładne testy i konfiguracje systemu, aby zagwarantować, że wszystko działa zgodnie z oczekiwaniami',
  },
  {
    step: 'Krok 6: Praktyczne szkolenie z obsługi',
    title: 'Osiągnij Pełen Komfort Obsługi',
    description:
      'Przedstawimy Ci podstawy i najlepsze praktyki obsługi Twojego nowego systemu inteligentnego domu. Nauczysz się, jak efektywnie zarządzać wszystkimi jego funkcjami, aby maksymalnie wykorzystać możliwości, które oferuje',
  },
  {
    step: 'Krok 7: Finalizacja i Weryfikacja',
    title: 'Zatwierdzenie Twojego Inteligentnego Domu',
    description:
      'W trakcie naszego ostatniego spotkania przeprowadzimy szczegółowy przegląd całego systemu. Odpowiemy na wszelkie pozostałe pytania i upewnimy się, że jesteś w pełni zadowolony z nowego, inteligentnego życia, które przed Tobą',
  },
];

const COLORS = ['secondary', 'primary', 'success', 'success', 'error', 'primary', 'info'] as const;

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
