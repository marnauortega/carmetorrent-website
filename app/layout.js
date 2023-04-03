import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Carme Torrent",
  description: "Dansa contemporània",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <aside>
          <Logo />
          <Nav></Nav>
        </aside>
        <main>{children}</main>
      </body>
    </html>
  );
}
