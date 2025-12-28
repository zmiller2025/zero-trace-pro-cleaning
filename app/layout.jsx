import "./globals.css";

export const metadata = {
  title: "Zero Trace Pro Cleaning",
  description: "Commercial & Residential Cleaning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
