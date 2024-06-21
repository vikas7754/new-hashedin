import Layout from "@/components/layout";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
  title: "Software Platforms Engineering Services | Data Engineering & AI ML",
  description:
    "Software Platforms Engineering Services | Data Engineering & AI ML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
