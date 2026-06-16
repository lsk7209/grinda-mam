import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="그린다에듀 메인으로 이동">
            <span className="brand-mark">G</span>
            <span>그린다에듀</span>
          </Link>
          <nav className="nav" aria-label="주요 메뉴">
            <a href="#why">왜 영어공부방</a>
            <a href="#how">시작 과정</a>
            <Link href="/product/english-class-startup">창업반 모집</Link>
          </nav>
          <div className="actions">
            <Link className="btn btn-ghost" href="#why" style={{ padding: "11px 18px", fontSize: 14.5 }}>
              자세히 보기
            </Link>
            <Link className="btn btn-dark" href="/product/english-class-startup" style={{ padding: "11px 20px", fontSize: 14.5 }}>
              창업반 신청
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="home-hero">
          <div className="shell home-hero-grid">
            <div>
              <div className="home-eyebrow">
                <span />
                엄마를 위한 영어공부방 창업
              </div>
              <h1 className="serif home-title">
                엄마라서 멈췄던 일,
                <br />
                영어공부방으로
                <br />
                다시 시작하세요
              </h1>
              <p className="home-lead">
                출퇴근 없이 집에서. 내 아이를 직접 가르치고, 동네 아이들의 영어 선생님이 됩니다.
              </p>
              <div className="home-cta">
                <Link className="btn btn-dark" href="/product/english-class-startup">
                  창업반 신청하기 <span aria-hidden="true">→</span>
                </Link>
                <a className="btn btn-ghost" href="#why">
                  왜 영어공부방일까
                </a>
              </div>
            </div>

            <div className="home-visual" aria-label="엄마와 아이가 집에서 영어를 공부하는 일러스트">
              <svg viewBox="0 0 420 320" role="img" aria-label="집에서 엄마와 아이가 영어를 공부하는 모습">
                <rect x="38" y="42" width="344" height="214" rx="24" fill="#FFFDF7" />
                <rect x="72" y="72" width="132" height="88" rx="12" fill="#2F4A39" />
                <text x="138" y="123" textAnchor="middle" fontFamily="Gowun Batang, serif" fontSize="31" fontWeight="700" fill="#FBE08A">
                  ABC
                </text>
                <path d="M242 244 Q248 164 288 164 Q328 164 336 244 Z" fill="#3E6B4F" />
                <circle cx="289" cy="125" r="30" fill="#F6D3B0" />
                <path d="M259 124 Q258 82 290 82 Q324 82 320 124 Q310 102 290 101 Q274 101 259 124 Z" fill="#5A3E2B" />
                <path d="M251 178 Q222 162 198 143" stroke="#3E6B4F" strokeWidth="14" strokeLinecap="round" fill="none" />
                <circle cx="196" cy="141" r="8" fill="#F6D3B0" />
                <path d="M102 245 Q108 184 140 184 Q172 184 178 245 Z" fill="#F5C84A" />
                <circle cx="140" cy="157" r="24" fill="#F2C7A1" />
                <path d="M118 157 Q120 128 140 126 Q163 128 162 157 Q149 145 132 147 Q124 149 118 157 Z" fill="#3B2D23" />
                <rect x="105" y="222" width="178" height="16" rx="6" fill="#E35D4B" />
                <rect x="115" y="204" width="158" height="16" rx="6" fill="#3E6B4F" />
                <circle cx="340" cy="78" r="18" fill="#F5C84A" />
                <text x="340" y="84" textAnchor="middle" fontFamily="Gowun Batang, serif" fontSize="18" fontWeight="700" fill="#211C15">
                  A
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section id="why" className="shell home-section">
          <div className="kicker">Why English Class</div>
          <h2 className="serif section-title">경험이 없어도, 혼자가 아니어도 됩니다</h2>
          <div className="home-cards">
            <article>
              <strong>검증된 커리큘럼 그대로</strong>
              <p>수업 자료와 운영 흐름을 제공해 처음 시작하는 부담을 줄입니다.</p>
            </article>
            <article>
              <strong>집에서, 내 아이와 함께</strong>
              <p>출퇴근 대신 내 생활 리듬에 맞춘 공부방 운영을 준비합니다.</p>
            </article>
            <article>
              <strong>처음부터 끝까지 본사 지원</strong>
              <p>상담, 교육, 세팅, 첫 수업까지 단계별로 함께합니다.</p>
            </article>
          </div>
        </section>

        <section id="how" className="home-final">
          <div className="shell">
            <h2 className="serif">오늘, 영어공부방 창업반을 확인하세요</h2>
            <p>창업비용은 할인 없이 500만원 단일 가격으로 안내됩니다.</p>
            <Link className="btn btn-dark" href="/product/english-class-startup">
              모집 페이지 보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
