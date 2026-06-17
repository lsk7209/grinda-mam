import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gowun",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igrinda.com"),
  title: {
    default: "그린다영어 | 영어공부방 창업",
    template: "%s | 그린다영어"
  },
  description:
    "경력이 끊긴 엄마도 집에서 다시 시작할 수 있도록 돕는 그린다영어 영어공부방 창업 안내 사이트입니다.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "그린다영어 | 영어공부방 창업",
    description:
      "경력이 끊긴 엄마도 집에서 다시 시작할 수 있도록 돕는 그린다영어 영어공부방 창업 안내 사이트입니다.",
    url: "https://igrinda.com",
    siteName: "그린다영어",
    locale: "ko_KR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={gowunBatang.variable}>
      <body>{children}</body>
    </html>
  );
}
