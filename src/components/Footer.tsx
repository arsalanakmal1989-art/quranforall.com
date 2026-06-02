import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-emerald text-light-cream pt-5 pb-4 border-top border-gold-dark">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand & Mission */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="d-flex align-items-center gap-2 mb-3 text-decoration-none">
              <span className="brand-icon d-flex align-items-center justify-content-center bg-gold text-dark-emerald rounded-circle p-2 shadow" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-book-half fs-5"></i>
              </span>
              <span className="fs-4 fw-bold text-white font-display">
                Quran<span className="text-gold">ForAll</span>
              </span>
            </Link>
            <p className="text-muted-cream fs-6 mb-4">
              Providing professional, certified 1-on-1 online Quran education for kids and adults. Tailored schedules for busy families, particularly targeting our community in the United Kingdom.
            </p>
            <div className="d-flex gap-3">
              <Link href="https://wa.me/447904612487" target="_blank" className="social-icon-btn rounded-circle d-flex align-items-center justify-content-center bg-emerald-light text-white" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-whatsapp"></i>
              </Link>
              <span className="social-icon-btn rounded-circle d-flex align-items-center justify-content-center bg-emerald-light text-white" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-envelope"></i>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="text-white fw-bold mb-3 font-display">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="footer-link">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="footer-link">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Schedule Summary */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="text-white fw-bold mb-3 font-display">Class Details</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted-cream">
              <li className="d-flex gap-2 align-items-start">
                <i className="bi bi-calendar3 text-gold mt-1"></i>
                <span>Mon to Fri (Flexible)</span>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bi bi-clock text-gold mt-1"></i>
                <span>Daily 30 min classes</span>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bi bi-laptop text-gold mt-1"></i>
                <span>Online via Google Meet</span>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bi bi-gift text-gold mt-1"></i>
                <span>1 Week Free Trial</span>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white fw-bold mb-3 font-display">Support</h5>
            <p className="text-muted-cream fs-6 mb-3">
              Have questions or want to verify a payment transfer? Contact us directly:
            </p>
            <div className="d-flex flex-column gap-2">
              <Link
                href="https://wa.me/447904612487"
                target="_blank"
                className="d-flex gap-2 align-items-center text-decoration-none text-gold fw-semibold"
              >
                <i className="bi bi-whatsapp fs-5"></i>
                <span>+44 7904 612487</span>
              </Link>
              <div className="d-flex gap-2 align-items-center text-muted-cream">
                <i className="bi bi-geo-alt fs-5 text-gold"></i>
                <span>Serving students UK-wide</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-emerald-light my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted-cream fs-7">
              &copy; {currentYear} QuranForAll.com. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="mb-0 text-muted-cream fs-7">
              Designed with reverence & excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
