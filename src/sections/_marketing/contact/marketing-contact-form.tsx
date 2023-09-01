import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const state = ['zerowy', 'surowy otwarty', 'surowy zamknięty', 'prace wykończeniowe'];

export default function MarketingContactForm() {
  const MarketingContactSchema = Yup.object().shape({
    firstName: Yup.string().required('Pole imienia nie może być puste'),
    lastName: Yup.string().required('Pole nazwiska nie może być puste'),
    phoneNumber: Yup.string().required('Wprowadź prawidłowy numer telefonu'),
    email: Yup.string()
      .required('Pole email nie może być puste')
      .email('Wprowadź prawidłowy adres e-mail'),
    preferredContactInfo: Yup.string().required('Proszę wybrać preferowaną formę kontaktu'),
    services: Yup.array().required().min(1, 'Proszę wybrać obecny stan inwestycji'),
  });

  const defaultValues = {
    services: [],
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    preferredContactInfo: '',
  };

  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1 }}
        >
          <RHFTextField name="firstName" label="Imię" />
          <RHFTextField name="lastName" label="Nazwisko" />
        </Stack>

        <RHFTextField name="email" label="Email" />
        <RHFTextField name="phoneNumber" label="Numer telefonu" />

        <Controller
          name="preferredContactInfo"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth>
              <InputLabel id="preferredContactInfo">Preferowana forma kontaktu</InputLabel>
              {/* @ts-ignore */}
              <Select label="Preferowana forma kontaktu" defaultValue="tel" fullWidth {...field}>
                <MenuItem value="tel">Telefon komórkowy</MenuItem>
                <MenuItem value="email">Email</MenuItem>
              </Select>

              {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
            </FormControl>
          )}
        />

        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Typography variant="overline" sx={{ color: 'text.disabled', mb: 1, mt: 1 }}>
                Obecny stan inwestycji:
              </Typography>
              <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1}>
                {state.map((service) => (
                  <ToggleButton
                    {...field}
                    key={service}
                    color="standard"
                    selected={field.value.includes(service)}
                    onChange={() => field.onChange(getSelected(field.value, service))}
                    sx={{
                      py: 0.5,
                      px: 2,
                      typography: 'body2',
                      [`&.${toggleButtonClasses.selected}`]: {
                        bgcolor: 'text.primary',
                        borderColor: 'transparent',
                        color: (theme) =>
                          theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                        '&:hover': {
                          bgcolor: 'text.primary',
                        },
                      },
                    }}
                  >
                    {service}
                  </ToggleButton>
                ))}
              </Stack>

              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />
        <RHFTextField name="message" label="Pytania / Uwagi" multiline rows={4} />
      </Stack>

      <LoadingButton
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Wyślij
      </LoadingButton>
    </FormProvider>
  );
}
