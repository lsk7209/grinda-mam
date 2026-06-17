import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductInfoTabs } from "./product-info-tabs";
import { ProductPurchase } from "./product-purchase";

export default function ProductPage() {
  return (
    <>
      <Header variant="product" />
      <main>
        <div className="shell breadcrumb" aria-label="Breadcrumb">
          <Link href="/">홈</Link>
          <span aria-hidden="true"> › </span>
          <span>일반강의</span>
          <span aria-hidden="true"> › </span>
          <strong>영어공부방 창업반 모집</strong>
        </div>

        <section id="price" className="shell product-grid">
          <div className="visual-sticky">
            <ProductVisual />
          </div>

          <ProductPurchase />
        </section>

        <ProductInfoTabs />
      </main>
      <Footer />
    </>
  );
}

function ProductVisual() {
  return (
    <div className="product-visual">
      <div className="visual-content">
        <div className="visual-badge">2026 창업반 모집</div>
        <Image
          src="/images/product-study-room-korean-teacher.png"
          alt="한국인 여성 선생님이 집 영어공부방 수업 자료를 준비하는 모습"
          width={1536}
          height={1024}
          sizes="(max-width: 900px) 100vw, 48vw"
        />
        <div className="tags">
          <span className="tag">검증 커리큘럼</span>
          <span className="tag">집에서 운영</span>
          <span className="tag">1:1 본사 지원</span>
        </div>
      </div>
    </div>
  );
}
