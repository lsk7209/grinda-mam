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
  title: "영어공부방 창업반 모집 | 그린다에듀",
  description:
    "경력이 끊긴 엄마도 집에서 다시 시작할 수 있도록 돕는 그린다에듀 영어공부방 창업반 모집 페이지입니다."
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
