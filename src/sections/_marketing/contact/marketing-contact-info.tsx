import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {mdUp && (
        <Image
          alt="marketing contact"
          src="/assets/illustrations/illustration_marketing_contact.svg"
          sx={{ maxWidth: 380 }}
        />
      )}

      <Stack spacing={3} alignItems="flex-start" direction="row">
        <Stack spacing={0.5}>
          <Link color="inherit" variant="body2" href="tel:+4873070539">
            <Typography variant="h5">Kontakt:</Typography>
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:user-avatar-filled" />
        <Stack direction="column">
          <Stack spacing={0.5}>
            <Link
              color="inherit"
              variant="body2"
              href="https://www.linkedin.com/in/remyo/"
              target="_blank"
              underline="always"
            >
              <Typography variant="h6">Remigiusz Oleszczuk</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:identification" />
        <Stack spacing={0.5}>
          <Typography variant="h6">5372572675</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Link color="inherit" variant="body2" href="tel:+4873070539">
            <Typography variant="h6">730 070 539</Typography>
          </Link>
        </Stack>
      </Stack>



      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Link color="inherit" variant="body2" href="mailto:hello@example.com">
            <Typography variant="h6">kontakt@o7k.pl</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
