import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "강사손미경 소개",
  description: "30년 교육 전문가 손미경 강사의 교육 철학과 주요 경력을 소개합니다."
};

const careers = [
  "공부방 및 학원 운영 30년",
  "초중등 영어국어 학습 지도",
  "자기주도학습 및 학습코칭 전문가",
  "학부모 교육 및 상담 다수 진행",
  "영어 공부방 운영 컨설팅",
  "문해력 및 학습 습관 지도 전문가"
];

export default function InstructorSonMikyungPage() {
  return (
    <>
      <Header />
      <main className="instructor-page">
        <section className="shell instructor-shell">
          <div className="instructor-heading">
            <div className="kicker">Instructor</div>
            <h1 className="serif">강사 : 손미경</h1>
            <p>30년 교육 전문가, 공부하는 힘을 키우는 교육 코치</p>
          </div>

          <div className="instructor-layout">
            <article className="instructor-copy">
              <p>안녕하세요.</p>
              <p>
                저는 30년 동안 공부방과 학원을 운영하며 아이들의 성장과 학부모님의 고민을 가장 가까운 곳에서 함께해 온 교육자입니다.
              </p>
              <p>
                오랜 교육 현장 경험을 통해 성적 향상도 중요하지만, 결국 아이의 미래를 결정하는 것은 스스로 공부하는 힘과 올바른 학습 습관이라는 것을
                깨달았습니다. 그래서 단순한 교과 지도가 아닌 자기주도학습 능력, 문해력, 사고력, 학습 동기 향상에 중점을 두고 학생들을 지도해 왔습니다.
              </p>
              <p>
                30년 동안 수많은 초중등 학생들을 만나며 각기 다른 성향과 학습 특성을 이해하고, 아이에게 맞는 학습 방법을 찾을 수 있도록 돕고 있습니다.
                또한 학부모 상담과 교육 코칭을 통해 가정과 교육이 함께 성장하는 환경을 만들어 왔습니다.
              </p>
              <p>
                현재는 오랜 현장 경험을 바탕으로 공부방 및 학원 운영 노하우를 공유하고 있으며, 자기주도학습 지도법, 영어 학습 코칭, 학습 습관 형성,
                학부모 교육 분야에서 다양한 강의와 컨설팅을 진행하고 있습니다.
              </p>
            </article>

            <aside className="instructor-career">
              <h2 className="serif">주요 경력</h2>
              <ul>
                {careers.map((career) => (
                  <li key={career}>{career}</li>
                ))}
              </ul>
            </aside>
          </div>

          <blockquote className="instructor-quote">
            <p>"아이에게 평생 남는 것은 지식이 아니라 스스로 배우는 힘입니다."</p>
            <cite>30년 교육 현장의 경험을 바탕으로 아이들이 자신의 가능성을 발견하고, 즐겁게 성장할 수 있도록 함께하겠습니다.</cite>
          </blockquote>
        </section>
      </main>
      <Footer />
    </>
  );
}
