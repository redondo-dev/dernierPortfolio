import { Suspense } from 'react';
import ClientPage from './client-page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Portfolio  riad reda fethi',
  description: 'Mon portfolio professionnel',
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage />
    </Suspense>
  );
}