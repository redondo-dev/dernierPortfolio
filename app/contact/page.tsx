import { Suspense } from 'react';
import ClientPage from './client-page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour discuter de vos projets',
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage />
    </Suspense>
  );
}
