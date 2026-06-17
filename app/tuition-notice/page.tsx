import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "수업료 상세고지",
  description: "그린다영어 영어공부방 창업반 수업료 상세고지입니다."
};

export default function TuitionNoticePage() {
  return (
    <>
      <Header />
      <main className="notice-page">
        <section className="shell notice-shell">
          <div className="notice-heading">
            <div className="kicker">Tuition Notice</div>
            <h1 className="serif">수업료 상세고지</h1>
            <p>영어공부방 창업반 수업료 고지 내용을 확인하실 수 있습니다.</p>
          </div>
          <div className="notice-image-card">
            <Image
              src="/images/tuition-notice.jpg"
              alt="영어 공부방 창업을 위한 영어교육 수업료 상세고지 표"
              width={1600}
              height={747}
              priority
              sizes="100vw"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
