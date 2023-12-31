import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Regularne spotkania',
    description:
      'Rozmawiaj z nami regularnie, dając nam znać, jak Ci idzie i co Ci się podoba (lub nie)',
    iconColor: 'primary',
  },
  {
    title: 'Kilka szybkich ankiet',
    description:
      'Poświęć kilka minut, aby powiedzieć nam, co Ci odpowiada, a co mogłoby być lepsze. Naprawdę cenimy Twoją opinię!',
    iconColor: 'success',
  },
  {
    title: 'Bądź na bieżąco',
    description:
      'Wypatruj aktualizacji! Będziemy dodawać nowe fajne funkcje i chcielibyśmy poznać Twoje opinie na ich temat',
    iconColor: 'secondary',
  },
  {
    title: 'Tweetuj, publikuj, udostępniaj',
    description:
      'Jeśli podoba Ci się to, co robimy, będziemy zachwyceni, jeśli podzielisz się tym na social media!',
    iconColor: 'success',
  },
  {
    title: 'Podziel się swoją historią',
    description:
      'Opowiedz nam o swoich doświadczeniach, opublikujemy Twoją historię, by zainspirować innych',
    iconColor: 'secondary',
  },
  {
    title: 'Końcowe podsumowanie',
    description:
      'Kiedy wszystko zostanie już powiedziane i zrobione, z przyjemnością porozmawiamy o Twojej podróży z nami',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      id='cooperation'
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Współtwórz przyszłość inteligentnych domów
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
          Krótki opis zobowiązań w naszym programie pilotażowym
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {mdUp && <Image alt="benefits" src="/assets/illustrations/illustration_benefits.svg" />}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    description: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index }: BenefitItemProps) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
