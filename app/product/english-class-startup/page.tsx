import Link from "next/link";
import { ProductInfoTabs } from "./product-info-tabs";
import { ProductPurchase } from "./product-purchase";

export default function ProductPage() {
  return (
    <>
      <Header />
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

function Header() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">G</span>
          <span>그린다에듀</span>
        </Link>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#price">가격 안내</a>
          <a href="#details">패키지 구성</a>
          <a href="#details">상품평</a>
        </nav>
        <div className="actions">
          <a className="btn btn-ghost" href="#details" style={{ padding: "11px 18px", fontSize: 14.5 }}>
            구성 보기
          </a>
          <a className="btn btn-dark" href="#price" style={{ padding: "11px 20px", fontSize: 14.5 }}>
            바로 신청
          </a>
        </div>
      </div>
    </header>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 16 }}>
            <span className="brand-mark" style={{ width: 34, height: 34, borderRadius: 10, fontSize: 16 }}>
              G
            </span>
            <span style={{ color: "#fff", fontSize: 17 }}>그린다에듀</span>
          </div>
          <p>엄마라서 멈췄던 일을, 영어공부방으로 다시 시작하도록 돕습니다. 검증된 커리큘럼과 1:1 본사 지원으로 함께합니다.</p>
        </div>
        <div>
          <div className="footer-title">사업자 정보</div>
          <ul>
            <li>상호명 : 그린다영어원격학원</li>
            <li>대표자 : 손미경</li>
            <li>사업자번호 : 853-90-02010</li>
            <li>통신판매번호 : 2022-창원성산-0768</li>
            <li>교육청등록번호 : 제02202400095호</li>
          </ul>
        </div>
        <div>
          <div className="footer-title">고객센터</div>
          <ul>
            <li>이메일 : igrinda@grindaedu.com</li>
            <li>문의 : 010-7382-7905</li>
            <li className="footer-address">주소 : 서울특별시 마포구 월드컵북로 98, 2층 202호 일부(320호) (성산동, 성산종성일 APT)</li>
            <li>평일 10:00 - 18:00 (주말·공휴일 휴무)</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="shell">© 2026 그린다에듀원격학원. All rights reserved.</div>
      </div>
    </footer>
  );
}
