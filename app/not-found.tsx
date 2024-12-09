import Heading from '@/components/Heading';

export const metadata = {
  title: '404',
};

export default function NotFoundPage() {
  return (
    <>
      <Heading>Not Found</Heading>
      <p>Oops, the page you requested does not exist</p>
    </>
  );
}
