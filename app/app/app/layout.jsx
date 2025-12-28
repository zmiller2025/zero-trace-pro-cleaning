
import "./globals.css";

export const metadata = {
  title: "Zero Trace Pro Cleaning",
  description: "Commercial • Residential • New Builds — Indianapolis and surrounding suburbs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
