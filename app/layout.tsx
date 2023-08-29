import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "August Archive",
  description: "배우고 느낀 것들을 모아두는 공간",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
