import Logo from "@/components/Logo/Logo";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Providers/Providers";
import { getColors, getGoogleDescriptions } from "@/sanity/queries";
import ViewProvider from "@/components/Providers/ViewProvider";

import "./global.css";
import styles from "./layout.module.css";

// export const dynamic = "force-static";
// export const revalidate = 1;

export async function generateStaticParams() {
  return [{ locale: "ca" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === "ca" ? "Inici" : locale === "es" ? "Inicio" : "Home";
  const [{ homeDescription }] = await getGoogleDescriptions(locale);
  return {
    title: {
      template: "Carme Torrent | %s",
      default: `Carme Torrent | ${title}`,
    },
    description: homeDescription,
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const { logoColor } = await getColors();
  return (
    <Providers>
      <ViewProvider>
        <html lang="en">
          <body className={styles.body}>
            {/* <Image src={bg} width={852} height={640} alt="" className={styles.bg} /> */}
            {/* <div className={styles.bg}></div> */}
            <Logo className={styles.logo} locale={locale} color={logoColor.hex} />
            <main className={styles.main}>{children}</main>
            <Footer locale={locale} />
          </body>
        </html>
      </ViewProvider>
    </Providers>
  );
}
