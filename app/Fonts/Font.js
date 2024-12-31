import { Roboto, Inter,  } from "next/font/google";


// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], 
  display: 'swap', 
});


// Configure Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300','400', '500', '700'], 
  display: 'swap',
});

// Export
export { inter, roboto };
