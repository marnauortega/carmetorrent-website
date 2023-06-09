import Logo from "@/components/Logo/Logo";
import Nav from "@/components/Nav/Nav";
import NavList from "@/components/Nav/NavList";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Providers/Providers";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  icons: { icon: "/favicon.ico" },
});

import "./global.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "Carme Torrent",
  description: "Dansa contemporània",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${styles.body} ${inter.className}`}>
          <aside className={styles.aside}>
            <Logo locale={locale} />
            <Nav>
              <NavList locale={locale} />
            </Nav>
            <Footer locale={locale} />
          </aside>
          <main className={styles.main}>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
