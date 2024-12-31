import { roboto } from "./Fonts/Font";
import "./globals.css";
import StoreProvider from "./StoreProvider";



export const metadata = {
  title: "Frontend POC",
  description: "This is an amazing website built with Next.js, showcasing SEO best practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
