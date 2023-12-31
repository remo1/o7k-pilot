import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Logo from 'src/components/logo';
import { bgBlur } from 'src/theme/css';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative', height: "max-content", width: "150px" }}>
            <Logo />
          </Box>

          {mdUp && <NavDesktop data={navConfig} />}

          {/* <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end"> */}
          {/*  <Stack spacing={1} direction="row" alignItems="center"> */}
          {/*    <Searchbar /> */}

          {/*    <SettingsButton /> */}
          {/*  </Stack> */}

          {/*  {mdUp && ( */}
          {/*    <Button */}
          {/*      variant="contained" */}
          {/*      color="inherit" */}
          {/*      href={paths.zoneStore} */}
          {/*      target="_blank" */}
          {/*      rel="noopener" */}
          {/*    > */}
          {/*      Buy Now */}
          {/*    </Button> */}
          {/*  )} */}
          {/* </Stack> */}

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
