import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplikasi Saya",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}