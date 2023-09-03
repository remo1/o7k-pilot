import NotFoundView from 'src/sections/error/not-found-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: '404 Nie ma takiej strony!',
};

export default function NotFoundPage() {
  return <NotFoundView />;
}
