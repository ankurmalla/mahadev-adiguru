import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mahadevadiguru.com'),
  title: 'Mahadev Adi Guru | Lord Shiva Knowledge Portal',
  description: 'A devotional knowledge portal about Lord Shiva, mantras, Jyotirlingas, temples, festivals, meditation and spiritual learning.',
  openGraph: {
    title: 'Mahadev Adi Guru',
    description: 'Learn, chant, meditate and explore the wisdom of Lord Shiva.',
    url: 'https://www.mahadevadiguru.com',
    siteName: 'Mahadev Adi Guru',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
