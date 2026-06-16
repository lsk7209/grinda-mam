"use client";

import { useState } from "react";

const packageItems = [
  {
    name: "검증된 커리큘럼 제공",
    desc: "파닉스부터 리딩까지, 현장에서 검증된 수업 자료를 그대로 사용합니다."
  },
  {
    name: "창업자 교육 과정",
    desc: "커리큘럼 운영법과 수업 노하우를 체계적으로 교육합니다. 영어 전공이 아니어도 괜찮습니다."
  },
  {
    name: "공부방 세팅 · 홍보 지원",
    desc: "집 안 공간을 공부방으로 세팅하고 학생 모집·홍보까지 함께 준비합니다."
  },
  {
    name: "개원 후 1:1 운영 지원",
    desc: "첫 수업 이후에도 운영이 안정될 때까지 본사가 1:1로 동행합니다."
  }
];

const reviews = [
  {
    date: "2026.03.14",
    body: "상담부터 친절하셨고, 교육 내용이 정말 알찼어요. 막막했던 부분이 하나씩 풀려서 개원까지 마음 편히 준비했습니다.",
    author: "김○○ · 경남 창원"
  },
  {
    date: "2026.02.28",
    body: "창업비용과 구성 안내가 명확해서 준비해야 할 부분을 빠르게 이해할 수 있었습니다. 수업 자료가 있어 시작 부담이 줄었어요.",
    author: "박○○ · 부산 해운대"
  },
  {
    date: "2026.01.19",
    body: "영어 전공이 아니라 걱정했는데 커리큘럼이 탄탄해서 수업이 어렵지 않았어요. 아이와 함께하는 시간이 늘어난 게 가장 좋아요.",
    author: "이○○ · 대구 수성"
  }
];

type Tab = "description" | "reviews";

export function ProductInfoTabs() {
  const [tab, setTab] = useState<Tab>("description");

  return (
    <section className="shell tabs-section" id="details">
      <div className="tab-list" role="tablist" aria-label="상품 정보">
        <button
          className="tab-button"
          id="tab-description"
          role="tab"
          aria-controls="panel-description"
          aria-selected={tab === "description"}
          onClick={() => setTab("description")}
        >
          설명
        </button>
        <button
          className="tab-button"
          id="tab-reviews"
          role="tab"
          aria-controls="panel-reviews"
          aria-selected={tab === "reviews"}
          onClick={() => setTab("reviews")}
        >
          상품평 (3)
        </button>
      </div>

      {tab === "description" ? <DescriptionPanel /> : <ReviewPanel />}
    </section>
  );
}

function DescriptionPanel() {
  return (
    <div className="tab-panel" id="panel-description" role="tabpanel" aria-labelledby="tab-description">
      <h2 className="serif section-title">가격 안내</h2>
      <div className="price-card">
        <div className="price-card-row">
          <span>영어공부방 창업반 창업비용</span>
          <span>5,000,000원</span>
        </div>
      </div>

      <h2 className="serif section-title">창업 패키지 구성</h2>
      <p className="section-copy">신청부터 첫 수업까지, 창업에 필요한 모든 과정을 한 번에 지원합니다.</p>
      <div className="package-list">
        {packageItems.map((item, index) => (
          <div className="package-item" key={item.name}>
            <span className="package-number">{index + 1}</span>
            <div>
              <div className="package-name">{item.name}</div>
              <div className="package-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="note-box">
        <div className="note-title">안내드립니다</div>
        <p>창업비용은 500만원 단일 가격으로 제공됩니다. 자세한 상담과 창업 설계는 신청 후 1:1 상담을 통해 안내해 드립니다.</p>
      </div>
    </div>
  );
}

function ReviewPanel() {
  return (
    <div className="review-list" id="panel-reviews" role="tabpanel" aria-labelledby="tab-reviews">
      {reviews.map((review) => (
        <article className="review-card" key={`${review.author}-${review.date}`}>
          <div className="review-head">
            <div className="stars" aria-label="별점 5점">
              ★★★★★
            </div>
            <span className="review-date">{review.date}</span>
          </div>
          <p>{review.body}</p>
          <div className="review-author">{review.author}</div>
        </article>
      ))}
      <p className="review-disclaimer">※ 위 후기는 이해를 돕기 위한 예시이며 개인의 성과는 운영 노력과 지역 여건에 따라 달라질 수 있습니다.</p>
    </div>
  );
}
