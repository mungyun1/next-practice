import Nav from "./_components/Nav";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
        {modal}
      </body>
    </html>
  );
}
