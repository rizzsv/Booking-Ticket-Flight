// app/layout.tsx

import './globals.css'; // Import CSS global Anda
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Next.js App', // Ganti dengan judul aplikasi Anda
  description: 'A Next.js 14.2 application example',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
