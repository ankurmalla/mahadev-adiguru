import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Mahadev Adi Guru | Lord Shiva Knowledge Portal', description: 'A devotional knowledge portal about Lord Shiva, mantras, Jyotirlingas, temples, meditation and festivals.', metadataBase: new URL('https://www.mahadevadiguru.com') };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
