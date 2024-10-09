import '@/app/ui/global.css'; // Importing global CSS
import { inter } from '@/app/ui/fonts'; // Import the Inter font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body> {/* Apply the Inter font class */}
    </html>
  );
}
