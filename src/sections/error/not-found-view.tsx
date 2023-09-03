'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CompactLayout from 'src/layouts/compact';
import { RouterLink } from 'src/routes/components';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Nie ma takiej strony!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            Przepraszamy, nie możemy znaleźć strony, której szukasz. Być może źle wpisałeś adres URL?
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Image
            alt="404"
            src="/assets/illustrations/illustration_404.svg"
            sx={{
              mx: 'auto',
              maxWidth: 320,
              my: { xs: 5, sm: 8 },
            }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
          Wróć na stronę główną
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
