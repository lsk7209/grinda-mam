import Link from "next/link";
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
        <svg
          viewBox="0 0 400 320"
          role="img"
          aria-label="집에서 운영하는 영어공부방에서 선생님이 칠판 앞에서 영어를 가르치는 모습"
        >
          <rect x="40" y="34" width="320" height="200" rx="14" fill="#FFFDF7" />
          <rect x="68" y="56" width="150" height="104" rx="9" fill="#2F4A39" />
          <rect x="68" y="56" width="150" height="104" rx="9" fill="none" stroke="#C9A877" strokeWidth="6" />
          <text x="143" y="104" fontFamily="Gowun Batang, serif" fontSize="30" fontWeight="700" fill="#FBE08A" textAnchor="middle">
            ABC
          </text>
          <text x="143" y="138" fontFamily="Pretendard Variable, sans-serif" fontSize="15" fontWeight="700" fill="#EAF1EA" textAnchor="middle">
            Hello!
          </text>
          <path d="M250 234 Q254 150 296 150 Q338 150 342 234 Z" fill="#3E6B4F" />
          <rect x="285" y="128" width="20" height="26" rx="8" fill="#F0C9A6" />
          <circle cx="295" cy="108" r="27" fill="#F6D3B0" />
          <path d="M268 110 Q266 73 295 73 Q324 73 322 110 Q321 95 305 90 Q299 105 283 96 Q272 99 270 110 Z" fill="#5A3E2B" />
          <path d="M268 108 Q267 142 277 156 L285 150 Q275 134 276 108 Z" fill="#5A3E2B" />
          <path d="M255 168 Q220 150 200 132" fill="none" stroke="#3E6B4F" strokeWidth="16" strokeLinecap="round" />
          <circle cx="199" cy="131" r="8" fill="#F6D3B0" />
          <rect x="88" y="196" width="86" height="15" rx="4" fill="#E35D4B" />
          <rect x="96" y="183" width="78" height="15" rx="4" fill="#3E6B4F" />
          <rect x="92" y="170" width="70" height="15" rx="4" fill="#EFB429" />
          <rect x="40" y="212" width="320" height="22" fill="#F3EAD6" />
          <circle cx="328" cy="58" r="17" fill="#fff" />
          <text x="328" y="64" fontFamily="Gowun Batang, serif" fontSize="17" fontWeight="700" fill="#3E6B4F" textAnchor="middle">
            A
          </text>
          <circle cx="60" cy="92" r="14" fill="rgba(255,255,255,0.85)" />
          <text x="60" y="97" fontFamily="Gowun Batang, serif" fontSize="14" fontWeight="700" fill="#EFB429" textAnchor="middle">
            B
          </text>
        </svg>
        <div className="tags">
          <span className="tag">검증 커리큘럼</span>
          <span className="tag">집에서 운영</span>
          <span className="tag">1:1 본사 지원</span>
        </div>
      </div>
    </div>
  );
}
