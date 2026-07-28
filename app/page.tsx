import { redirect } from 'next/navigation';

/** Root → Chinese primary locale (Decision 0003). */
export default function RootPage() {
  redirect('/zh');
}
