import { Inter, Lusitana } from 'next/font/google'; // Import both Inter and Lusitana fonts

export const inter = Inter({ subsets: ['latin'] }); // Export Inter font

export const lusitana = Lusitana({
  weight: ['400', '700'], // Set weights for Lusitana
  subsets: ['latin'], // Specify subsets
}); // Export Lusitana font