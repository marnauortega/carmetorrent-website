export const metadata = {
  title: "Carme Torrent",
  description: "Dansa contemporània",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
