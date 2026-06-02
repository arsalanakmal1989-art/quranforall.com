'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active fw-semibold text-primary-gold' : 'text-dark-emerald';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-cream sticky-top border-bottom border-light-gold py-3 shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="brand-icon d-flex align-items-center justify-content-center bg-dark-emerald text-white rounded-circle p-2 shadow-sm" style={{ width: '42px', height: '42px' }}>
            <i className="bi bi-book-half fs-5 text-gold"></i>
          </span>
          <div>
            <span className="fs-4 fw-bold text-dark-emerald mb-0 d-block leading-none font-display">
              Quran<span className="text-primary-gold">ForAll</span>
            </span>
            <span className="fs-9 text-muted d-block leading-none" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              ONLINE ACADEMY
            </span>
          </div>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 gap-lg-3 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link px-2 transition-all ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link px-2 transition-all ${isActive('/about')}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/courses" className={`nav-link px-2 transition-all ${isActive('/courses')}`}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className={`nav-link px-2 transition-all ${isActive('/pricing')}`}>
                Pricing
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link
              href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20register%20for%20the%201%20week%20free%20Quran%20classes."
              target="_blank"
              className="btn btn-gold btn-hover-scale px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-sm rounded-pill"
            >
              <i className="bi bi-whatsapp"></i>
              <span>1 Week Free Trial</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
