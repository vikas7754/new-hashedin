"use client";

import NextTopLoader from "nextjs-toploader";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout({ children }) {
  return (
    <>
      <NextTopLoader
        color="var(--primary)"
        height={2}
        shadow="none"
        showSpinner={false}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
