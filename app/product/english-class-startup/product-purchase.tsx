"use client";

import { useMemo, useState } from "react";

const UNIT_PRICE = 5_000_000;

function formatWon(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}

export function ProductPurchase() {
  const [qty, setQty] = useState(1);
  const total = useMemo(() => formatWon(UNIT_PRICE * qty), [qty]);

  return (
    <div>
      <div className="kicker">English Class Startup</div>
      <h1 className="serif product-title">영어공부방 창업반 모집</h1>
      <p className="lead">경력이 끊긴 엄마도, 영어 전공이 아니어도 시작할 수 있도록 커리큘럼·교육·운영을 한 번에 지원하는 창업 패키지입니다.</p>

      <div className="price">{formatWon(UNIT_PRICE)}</div>

      <div className="qty-row">
        <span className="qty-label">수량</span>
        <div className="qty-control" aria-label="수량 선택">
          <button className="qty-button" aria-label="수량 줄이기" onClick={() => setQty((current) => Math.max(1, current - 1))}>
            -
          </button>
          <span className="qty-value" aria-live="polite">
            {qty}
          </span>
          <button className="qty-button" aria-label="수량 늘리기" onClick={() => setQty((current) => current + 1)}>
            +
          </button>
        </div>
      </div>

      <div className="total-row">
        <span className="total-label">총 상품금액</span>
        <span className="total-price" aria-live="polite">
          {total}
        </span>
      </div>

      <div className="buy-buttons">
        <button className="btn btn-ghost">장바구니</button>
        <button className="btn btn-dark">
          바로 신청하기 <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
