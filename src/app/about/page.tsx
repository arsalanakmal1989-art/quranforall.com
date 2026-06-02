import Link from 'next/link';

export const metadata = {
  title: "About Us | Quran For Alll Online Academy",
  description: "Learn about the mission and values of Quran For Alll. Discover how we connect UK families with vetted, native Arabic and Quran tutors for flexible 1-on-1 lessons.",
};

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header-gradient text-center">
        <div className="container">
          <span className="badge badge-gold px-3 py-2 rounded-pill fw-bold mb-2">OUR MISSION</span>
          <h1 className="display-4 fw-extrabold text-white mb-2 font-display">About Quran For Alll</h1>
          <p className="lead text-muted-cream max-w-600 mx-auto opacity-90">
            Dedicated to providing accessible, high-quality, and authentic Quranic education for students worldwide.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Who We Are</span>
              <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2 mb-4">
                Pioneering Flexible, Certified 1-on-1 Quran Lessons
              </h2>
              <p className="text-muted mb-3">
                At <strong>Quran For Alll</strong>, we understand the challenges UK Muslim families face in finding qualified Quran tutors who fit around local school schedules. Traditional weekend schools can be crowded and offer limited personal attention, while coordinating with private local tutors can be challenging.
              </p>
              <p className="text-muted mb-4">
                Our platform bridges this gap by matching you or your children with certified, experienced Quran scholars. We focus strictly on 1-on-1 instruction via Google Meet, ensuring the tutor adapts entirely to the student's pace, correcting recitation rules (Tajweed) in real-time.
              </p>
              
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="bi bi-patch-check-fill text-gold fs-5"></i>
                    <div>
                      <h6 className="fw-bold text-dark-emerald mb-1">100% Vetted Scholars</h6>
                      <span className="text-muted fs-8">Certified Tajweed & Hifz teachers.</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="bi bi-patch-check-fill text-gold fs-5"></i>
                    <div>
                      <h6 className="fw-bold text-dark-emerald mb-1">UK Schedule Friendly</h6>
                      <span className="text-muted fs-8">Classes coordinated for GMT/BST timezone.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 shadow-sm">
                <h4 className="fw-bold text-dark-emerald font-display mb-3">Our Core Values</h4>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex gap-3">
                    <span className="badge badge-gold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                      <i className="bi bi-heart-fill"></i>
                    </span>
                    <div>
                      <h6 className="fw-bold text-dark-emerald mb-1">Sincerity (Ikhlas)</h6>
                      <p className="text-muted fs-7 mb-0">We teach with complete dedication, striving to impact the student's spiritual growth and understanding of the Book of Allah.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <span className="badge badge-gold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                      <i className="bi bi-gem"></i>
                    </span>
                    <div>
                      <h6 className="fw-bold text-dark-emerald mb-1">Excellence (Ihsan)</h6>
                      <p className="text-muted fs-7 mb-0">We push for the highest quality in tutoring, utilizing interactive resources and native Arab/Pakistani scholars with impeccable records.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <span className="badge badge-gold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                      <i className="bi bi-hand-index-thumb"></i>
                    </span>
                    <div>
                      <h6 className="fw-bold text-dark-emerald mb-1">Accessibility</h6>
                      <p className="text-muted fs-7 mb-0">Making Quran study affordable. Keeping monthly tuition at a competitive flat rate of $50 with no hidden registration costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-5 py-lg-6 bg-cream border-top border-bottom border-light-gold">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Quality Assurance</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">How We Choose Our Tutors</h2>
            <p className="text-muted">We maintain extremely strict standards so you receive authentic, proper Quran recitation training.</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">1</div>
                <h5 className="fw-bold text-dark-emerald font-display">Credential Verification</h5>
                <p className="text-muted fs-7 mb-0">
                  Every teacher must hold verified certifications (Ijazah) in Tajweed and Hifz from accredited Islamic institutes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">2</div>
                <h5 className="fw-bold text-dark-emerald font-display">Language & Communication</h5>
                <p className="text-muted fs-7 mb-0">
                  Tutors are tested on their ability to communicate effectively in English, ensuring young kids in the UK follow along comfortably.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">3</div>
                <h5 className="fw-bold text-dark-emerald font-display">Pedagogical Training</h5>
                <p className="text-muted fs-7 mb-0">
                  Scholars receive training in online teaching systems, interactive whiteboards, and methods to keep kids engaged and motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ callout banner */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h3 className="fw-bold text-dark-emerald font-display mb-3">Have questions about class times or setup?</h3>
          <p className="text-muted max-w-600 mx-auto mb-4">
            We are here to support your family's educational journey. Chat with us on WhatsApp or view our detailed pricing and schedules.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="https://wa.me/447904612487"
              target="_blank"
              className="btn btn-gold btn-hover-scale px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-sm rounded-pill"
            >
              <i className="bi bi-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </Link>
            <Link
              href="/pricing"
              className="btn btn-outline-dark px-4 py-2 fw-semibold rounded-pill"
            >
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
