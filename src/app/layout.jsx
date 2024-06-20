import "./globals.scss";

export const metadata = {
  title: "Software Platforms Engineering Services | Data Engineering & AI ML",
  description:
    "Software Platforms Engineering Services | Data Engineering & AI ML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
