import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

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
                출퇴근 없이 집에서. 내 경험을 살려 영어를 배우고 싶은 사람들의 선생님이 됩니다.
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

            <div className="home-visual">
              <Image
                src="/images/home-hero-korean-mom-english.png"
                alt="한국인 성인 여성이 집에서 다른 성인 여성에게 영어를 가르치는 모습"
                width={1792}
                height={1024}
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
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
              <strong>집에서, 내 시간에 맞춰</strong>
              <p>출퇴근 대신 생활 리듬에 맞춘 공부방 운영을 준비합니다.</p>
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
      <Footer />
    </>
  );
}
