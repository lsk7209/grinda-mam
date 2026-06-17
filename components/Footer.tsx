import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand" href="/" aria-label="그린다영어 메인으로 이동" style={{ marginBottom: 16 }}>
            <span className="brand-mark" style={{ width: 34, height: 34, borderRadius: 10, fontSize: 16 }}>
              G
            </span>
            <span style={{ color: "#fff", fontSize: 17 }}>그린다영어</span>
          </Link>
          <p>엄마라서 멈췄던 일을, 영어공부방으로 다시 시작하도록 돕습니다. 검증된 커리큘럼과 1:1 본사 지원으로 함께합니다.</p>
        </div>
        <div>
          <div className="footer-title">사업자 정보</div>
          <ul>
            <li>상호명 : 그린다영어원격학원</li>
            <li>대표자 : 손미경</li>
            <li>사업자번호 : 574-94-01697</li>
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
        <div className="shell">© 2026 그린다영어원격학원. All rights reserved.</div>
      </div>
    </footer>
  );
}
