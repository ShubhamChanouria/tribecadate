import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Tribeca Date",
  description: "Tribeca Date Club - Exclusive matchmaking service for elite singles in New York City. Experience personalized introductions and meaningful connections.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'apple-mobile-web-app-title': 'Tribeca Date',
    'application-name': 'Tribeca Date',
    'msapplication-TileImage': '/mstile-144x144.png',
    'msapplication-TileColor': '#000000',
    'theme-color': '#FFFFFF',
    'manifest': '/site.webmanifest'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
