import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "가상결제",
  description: "그린다영어 영어공부방 창업반 가상결제 신청 페이지입니다."
};

export default async function CheckoutPage({
  searchParams
}: {
  searchParams?: Promise<{ qty?: string }>;
}) {
  const params = await searchParams;
  const qty = normalizeQty(params?.qty);
  const unitPrice = 5_000_000;
  const total = unitPrice * qty;

  return (
    <>
      <Header />
      <main className="checkout-page">
        <section className="shell checkout-shell">
          <div className="checkout-heading">
            <div className="kicker">Demo Checkout</div>
            <h1 className="serif">영어공부방 창업반 가상결제</h1>
            <p>실제 결제가 진행되지 않는 확인용 페이지입니다. 신청 정보와 결제 흐름을 미리 확인할 수 있습니다.</p>
          </div>

          <div className="checkout-grid">
            <form className="checkout-card checkout-form">
              <h2 className="serif checkout-title">신청자 정보</h2>
              <label>
                이름
                <input type="text" name="name" placeholder="홍길동" />
              </label>
              <label>
                연락처
                <input type="tel" name="phone" placeholder="010-0000-0000" />
              </label>
              <label>
                이메일
                <input type="email" name="email" placeholder="igrinda@grindaedu.com" />
              </label>
              <label>
                창업 희망 지역
                <input type="text" name="area" placeholder="예: 서울 마포구" />
              </label>

              <fieldset className="payment-methods">
                <legend>결제수단</legend>
                <label>
                  <input type="radio" name="payment" defaultChecked />
                  신용카드
                </label>
                <label>
                  <input type="radio" name="payment" />
                  계좌이체
                </label>
                <label>
                  <input type="radio" name="payment" />
                  무통장 입금
                </label>
              </fieldset>

              <button className="btn btn-dark checkout-submit" type="button">
                가상 결제 완료
              </button>
            </form>

            <aside className="checkout-card checkout-summary" aria-label="주문 요약">
              <h2 className="serif checkout-title">주문 요약</h2>
              <div className="summary-row">
                <span>상품명</span>
                <strong>영어공부방 창업반 모집</strong>
              </div>
              <div className="summary-row">
                <span>단가</span>
                <strong>{formatWon(unitPrice)}</strong>
              </div>
              <div className="summary-row">
                <span>수량</span>
                <strong>{qty}</strong>
              </div>
              <div className="summary-total">
                <span>총 결제금액</span>
                <strong>{formatWon(total)}</strong>
              </div>
              <p className="checkout-note">이 페이지는 가상결제 화면이며 실제 승인, 청구, 카드 정보 저장은 발생하지 않습니다.</p>
              <Link className="btn btn-ghost checkout-back" href="/product/english-class-startup">
                상품 페이지로 돌아가기
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function normalizeQty(raw?: string) {
  const parsed = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }
  return Math.min(parsed, 99);
}

function formatWon(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}
