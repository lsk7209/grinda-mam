import Link from "next/link";

type HeaderProps = {
  variant?: "home" | "product";
};

export function Header({ variant = "home" }: HeaderProps) {
  const isProduct = variant === "product";

  return (
    <header className="header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="그린다영어 메인으로 이동">
          <span className="brand-mark">G</span>
          <span>그린다영어</span>
        </Link>
        <nav className="nav" aria-label="주요 메뉴">
          {isProduct ? (
            <>
              <a href="#price">가격 안내</a>
              <a href="#details">패키지 구성</a>
              <a href="#details">상품평</a>
            </>
          ) : (
            <>
              <a href="/#why">왜 영어공부방</a>
              <a href="/#how">시작 과정</a>
              <Link href="/instructor-son-mikyung">강사손미경 소개</Link>
              <Link href="/product/english-class-startup">창업반 모집</Link>
            </>
          )}
        </nav>
        <div className="actions">
          {isProduct ? (
            <>
              <a className="btn btn-ghost" href="#details" style={{ padding: "11px 18px", fontSize: 14.5 }}>
                구성 보기
              </a>
              <a className="btn btn-dark" href="#price" style={{ padding: "11px 20px", fontSize: 14.5 }}>
                바로 신청
              </a>
            </>
          ) : (
            <>
              <a className="btn btn-ghost" href="/#why" style={{ padding: "11px 18px", fontSize: 14.5 }}>
                자세히 보기
              </a>
              <Link className="btn btn-dark" href="/product/english-class-startup" style={{ padding: "11px 20px", fontSize: 14.5 }}>
                창업반 신청
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
