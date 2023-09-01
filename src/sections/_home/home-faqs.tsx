import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { varFade, MotionViewport } from 'src/components/animate';
import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

// ----------------------------------------------------------------------
const CONTENTS = [
  {
    question: `Czym jest o7k smart living?`,
    answer: (
      <>
        o7k Smart Living to podejście do automatyzacji domowej, które ma na celu uczynić Twoje życie
        bardziej komfortowym, bezpiecznym i efektywnym. Nasz system integruje różne aspekty Twojego
        domu w jedno, spójne i przyjazne dla użytkownika doświadczenie.
      </>
    ),
  },
  {
    question: `Na czym konkretnie polega Program Pilotażowy?`,
    answer: (
      <>
        Nasz Program Pilotażowy to unikatowa okazja, by być jednym z pierwszych użytkowników naszych
        rozwiązań i aktywnie pomagać w ich udoskonaleniu. Oferujemy niższe ceny w zamian za Twoje
        opinie i sugestie.
      </>
    ),
  },
  {
    question: 'Jaką kwotę powinienem zarezerwować na udział w programie?',
    answer: (
      <>
        Koszt uczestnictwa w programie jest niższy niż rynkowa cena instalacji, ale obejmuje także
        koszty związane z projektem instalacji elektrycznej i samą instalacją, w tym materiały
        budowlane.
        <p>
          Ważne jest jednak, aby zauważyć, że w zamian za tą specjalną cenę, oczekujemy Twojego
          współudziału w różnych etapach rozwoju naszego produktu.
        </p>
        <p>
          To sytuacja korzystna dla obu stron: Ty dostajesz technologie inteligentnego domu w
          niższej cenie, a my uzyskujemy bezcenne spostrzeżenia do zbudowania naszej oferty.
        </p>
      </>
    ),
  },
  {
    question: 'Czy mogę wycofać się z programu pilotażowego?',
    answer: (
      <>
        Możesz podjąć ostateczną decyzję o uczestnictwie po spotkaniu, w którym przedstawimy Ci
        dokładny koszt całej instalacji. Jeśli zgodzisz się na warunki i podpiszemy umowę, razem
        stworzymy niesamowite doświadczenie w zakresie inteligentnego domu! Do tego czasu masz pełną
        możliwość rezygnacji w dowolnym czasie.
      </>
    ),
  },
  {
    question: 'Z jakimi technologicznymi rozwiązaniami mogę się zetknąć w ramach programu?',
    answer: ` Używamy różnych technologii, zarówno komercyjnych, jak i dostępnych publicznie, aby zapewnić
        jak najlepsze doświadczenie smart living. W zakresie sprzętu korzystamy z modułów automatyki
        budowlanej belgijskiej firmy Velbus w połączeniu z naszą własną stacją o7k. 'o7k-station' to
        serce Twojego inteligentnego domu, dbające o bezpieczeństwo sieci domowej i umożliwiające
        zdalne sterowanie oraz inne praktyczne funkcje. Na poziomie oprogramowania wspieramy się
        projektami open-source takimi jak HomeAssistant, Kubernetes, Prometheus, Grafana i inne.
      `,
  },
];
// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      id="faq"
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Często zadawane pytania
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>

          <Box
            sx={{
              borderWidth: 1,
              borderRadius: 3,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">Masz więcej pytań?</Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Skontaktuj się z nami po dodatkowe informacje
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button size="large" color="inherit" variant="contained" href="mailto:kontakt@o7k.pl">
                Skontaktuj się z nami!
              </Button>
            </m.div>
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
