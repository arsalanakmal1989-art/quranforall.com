import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Launch Promo Bar */}
      <div className="bg-warning text-white text-center py-2 px-3 fw-semibold animate-pulse-gold fs-7 position-relative" style={{ zIndex: 10 }}>
        <div className="container d-flex align-items-center justify-content-center gap-2 flex-wrap">
          <span className="badge bg-white text-warning rounded-pill px-2">SPECIAL OFFER</span>
          <span>Exclusive Launch Discount: <strong>$50 (~£40)</strong> per month. Only a few seats left!</span>
          <Link
            href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20the%20$50/month%20Quran%20classes%20launch%20promo."
            target="_blank"
            className="text-white text-decoration-underline ms-2"
          >
            Enroll Before They're Gone &rarr;
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-5 py-lg-6 d-flex align-items-center">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="badge bg-gold-light text-primary-gold mb-3 px-3 py-2 fs-7 rounded-pill fw-bold">
                <i className="bi bi-star-fill me-1"></i> #1 Online Quran Academy for UK Muslims
              </div>
              <h1 className="display-4 fw-extrabold text-white mb-3 font-display leading-tight">
                Learn Holy Quran <br />
                <span className="text-gold">With Perfect Tajweed</span>
              </h1>
              <p className="lead text-muted-cream mb-4 opacity-90">
                1-on-1 personalized online classes designed for children & adults. Taught by certified, native scholars at schedules customized around your local UK time.
              </p>
              
              {/* Feature Pills */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge badge-emerald py-2 px-3 rounded-pill d-flex align-items-center gap-2 fs-7">
                  <i className="bi bi-gift-fill text-gold"></i> 1 Week Free Trial
                </span>
                <span className="badge badge-emerald py-2 px-3 rounded-pill d-flex align-items-center gap-2 fs-7">
                  <i className="bi bi-calendar3 text-gold"></i> Monday to Friday
                </span>
                <span className="badge badge-emerald py-2 px-3 rounded-pill d-flex align-items-center gap-2 fs-7">
                  <i className="bi bi-laptop text-gold"></i> Live on Google Meet
                </span>
                <span className="badge badge-emerald py-2 px-3 rounded-pill d-flex align-items-center gap-2 fs-7">
                  <i className="bi bi-clock-fill text-gold"></i> Daily 30 Mins Class
                </span>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20register%20for%20the%201%20week%20free%20Quran%20classes."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale px-4 py-3 fw-bold fs-5 shadow rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Start 1-Week Free Trial</span>
                </Link>
                <Link
                  href="/courses"
                  className="btn btn-outline-light btn-hover-scale px-4 py-3 fw-bold fs-5 rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <span>Explore Courses</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                <div className="glass-card p-4 rounded-5 text-dark-emerald shadow-lg border border-light-gold text-start mx-auto" style={{ maxWidth: '480px' }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-calendar-check text-primary-gold fs-4"></i>
                    <h5 className="fw-bold m-0 font-display">Reserve Your Free Class</h5>
                  </div>
                  <p className="text-muted fs-7 mb-4">No payment card required. Experience our 1-on-1 teaching style first-hand before committing.</p>
                  
                  <div className="mb-3">
                    <label className="form-label fs-7 fw-semibold">Class Format</label>
                    <div className="p-2 border rounded bg-light fs-7 d-flex align-items-center justify-content-between">
                      <span>1-on-1 Private Class (Live)</span>
                      <span className="badge bg-success">Interactive</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fs-7 fw-semibold">Platform</label>
                    <div className="p-2 border rounded bg-light fs-7 d-flex align-items-center gap-2">
                      <i className="bi bi-camera-video text-primary"></i>
                      <span>Google Meet (Easy 1-click Join)</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fs-7 fw-semibold">Target Schedule</label>
                    <div className="p-2 border rounded bg-light fs-7 d-flex align-items-center gap-2">
                      <i className="bi bi-clock"></i>
                      <span>Monday to Friday (30 mins daily)</span>
                    </div>
                  </div>

                  <Link
                    href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20scheduling%20a%20free%20trial%20class%20for%20my%20child/myself."
                    target="_blank"
                    className="btn btn-primary w-100 btn-hover-scale py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <span>Claim Your Spot Now</span>
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-cream py-4 border-bottom border-light-gold">
        <div className="container">
          <div className="row g-4 text-center justify-content-center">
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-shield-check text-primary-gold fs-3"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark-emerald">Certified Tutors</h6>
                  <span className="text-muted fs-8">Experienced Scholars</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-clock-history text-primary-gold fs-3"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark-emerald">Flexible Hours</h6>
                  <span className="text-muted fs-8">UK Timings Vetted</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-journal-check text-primary-gold fs-3"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark-emerald">Structured Plan</h6>
                  <span className="text-muted fs-8">From Qaida to Hifz</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-hand-thumbs-up-fill text-primary-gold fs-3"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark-emerald">No-Contract</h6>
                  <span className="text-muted fs-8">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Features & Benefits</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">Why Join Our Academy?</h2>
            <p className="text-muted">We provide an optimized environment for high-retention learning from the comfort of your home.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-4 border-0 hover-lift shadow-sm bg-cream">
                <div className="rounded-3 bg-dark-emerald text-white p-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-people-fill fs-4 text-gold"></i>
                </div>
                <h4 className="fw-bold text-dark-emerald font-display fs-5">Expert live sessions</h4>
                <p className="text-muted fs-7 mb-0">Learn directly from vetted, experienced scholars in interactive 1-on-1 settings.</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-4 border-0 hover-lift shadow-sm bg-cream">
                <div className="rounded-3 bg-dark-emerald text-white p-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-translate fs-4 text-gold"></i>
                </div>
                <h4 className="fw-bold text-dark-emerald font-display fs-5">Tajweed from Scratch</h4>
                <p className="text-muted fs-7 mb-0">We teach correct letter articulation (Makharij) and recitation rules right from the beginning.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-4 border-0 hover-lift shadow-sm bg-cream">
                <div className="rounded-3 bg-dark-emerald text-white p-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-calendar-range fs-4 text-gold"></i>
                </div>
                <h4 className="fw-bold text-dark-emerald font-display fs-5">Hands-on Practice</h4>
                <p className="text-muted fs-7 mb-0">Daily 30-minute classes ensure consistent revision and rapid learning without fatigue.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-4 border-0 hover-lift shadow-sm bg-cream">
                <div className="rounded-3 bg-dark-emerald text-white p-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-award fs-4 text-gold"></i>
                </div>
                <h4 className="fw-bold text-dark-emerald font-display fs-5">Certificate on Completion</h4>
                <p className="text-muted fs-7 mb-0">Earn an official certification of course completion to honor your milestone achievement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Programs */}
      <section className="py-5 py-lg-6 bg-cream border-top border-bottom border-light-gold">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Our Syllabus</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">Comprehensive Courses Available</h2>
            <p className="text-muted">Courses carefully designed for young learners (ages 4+) as well as busy adults seeking improvement.</p>
          </div>

          <div className="row g-4">
            {/* Qaida */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 hover-shadow-lg h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge badge-gold fs-6 p-2 rounded">
                    <i className="bi bi-alphabet"></i>
                  </span>
                  <h3 className="fw-bold text-dark-emerald font-display m-0 fs-5">Noorani Qaida for Beginners</h3>
                </div>
                <p className="text-muted fs-7">
                  The foundation of Quran reading. Students learn the Arabic alphabet, correct letter recognition, vowel symbols, and pronunciation rules (Makharij). Recommended for absolute beginners and young children.
                </p>
                <div className="border-top pt-3 mt-auto">
                  <span className="text-primary-gold fw-semibold fs-8"><i className="bi bi-check-circle-fill me-1"></i> Interactive phonetic drills</span>
                </div>
              </div>
            </div>

            {/* Recitation */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 hover-shadow-lg h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge badge-gold fs-6 p-2 rounded">
                    <i className="bi bi-mic"></i>
                  </span>
                  <h3 className="fw-bold text-dark-emerald font-display m-0 fs-5">Quran Recitation & Tajweed</h3>
                </div>
                <p className="text-muted fs-7">
                  Focuses on fluent Quran reading with correct Tajweed rules (like Madd, Ghunnah, Ikhfa, and Qalqalah). Students will recite selected Surahs with teachers who correct pronunciation in real-time, building confidence.
                </p>
                <div className="border-top pt-3 mt-auto">
                  <span className="text-primary-gold fw-semibold fs-8"><i className="bi bi-check-circle-fill me-1"></i> Focus on recitation fluency</span>
                </div>
              </div>
            </div>

            {/* Memorization */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 hover-shadow-lg h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge badge-gold fs-6 p-2 rounded">
                    <i className="bi bi-bookmark-star"></i>
                  </span>
                  <h3 className="fw-bold text-dark-emerald font-display m-0 fs-5">Quran Memorization (Hifz)</h3>
                </div>
                <p className="text-muted fs-7">
                  A structured memorization course with a highly supportive revision system. Students memorize Surahs from Juz Amma or the whole Quran based on personalized goals. Tutors assist with correct articulation during memorization.
                </p>
                <div className="border-top pt-3 mt-auto">
                  <span className="text-primary-gold fw-semibold fs-8"><i className="bi bi-check-circle-fill me-1"></i> Custom milestones & progress logs</span>
                </div>
              </div>
            </div>

            {/* Islamic Studies */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 hover-shadow-lg h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge badge-gold fs-6 p-2 rounded">
                    <i className="bi bi-compass"></i>
                  </span>
                  <h3 className="fw-bold text-dark-emerald font-display m-0 fs-5">Islamic Studies & Duas</h3>
                </div>
                <p className="text-muted fs-7">
                  Integrated program teaching students essential daily supplications (Duas), the step-by-step method of Wudu & Salah (prayer), basic Islamic ethics (Adab), and engaging stories of the Prophets.
                </p>
                <div className="border-top pt-3 mt-auto">
                  <span className="text-primary-gold fw-semibold fs-8"><i className="bi bi-check-circle-fill me-1"></i> Character building & foundations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Enroll / Payment Info */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Quick Registration</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">Simple Step-by-Step Enrollment</h2>
            <p className="text-muted">Secure your child's lessons in under 5 minutes with our simplified enrollment process.</p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Steps Column */}
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100 justify-content-between gap-4 py-2">
                <div className="d-flex gap-3">
                  <div className="step-number flex-shrink-0">1</div>
                  <div>
                    <h5 className="fw-bold text-dark-emerald font-display mb-1">Start Your 1-Week Free Trial</h5>
                    <p className="text-muted fs-7">Contact us via WhatsApp to reserve your seat. We will coordinate schedule timings with respect to your preferences.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="step-number flex-shrink-0">2</div>
                  <div>
                    <h5 className="fw-bold text-dark-emerald font-display mb-1">Send Tuition Payment</h5>
                    <p className="text-muted fs-7">Submit your monthly payment of $50 (approx. £40) to our designated bank account to lock in the special launch pricing.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="step-number flex-shrink-0">3</div>
                  <div>
                    <h5 className="fw-bold text-dark-emerald font-display mb-1">Confirm via WhatsApp</h5>
                    <p className="text-muted fs-7">Send a snapshot of the payment receipt to our WhatsApp support number <strong className="text-dark-emerald">+44 7904 612487</strong>.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="step-number flex-shrink-0">4</div>
                  <div>
                    <h5 className="fw-bold text-dark-emerald font-display mb-1">Access Classes & Start Learning</h5>
                    <p className="text-muted fs-7">Get your dedicated Google Meet connection link and begin your daily 1-on-1 interactive lessons!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Coordinates Card */}
            <div className="col-lg-6">
              <div className="card h-100 bg-cream border border-light-gold rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between shadow-sm">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="badge badge-gold px-3 py-2 rounded-pill fw-bold">BANK TRANSFER DETAILS</span>
                    <i className="bi bi-bank text-primary-gold fs-3"></i>
                  </div>
                  
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="border-bottom pb-2">
                      <span className="text-muted fs-8 d-block">BANK NAME</span>
                      <strong className="text-dark-emerald fs-6">Faysal Bank</strong>
                    </div>

                    <div className="border-bottom pb-2">
                      <span className="text-muted fs-8 d-block">ACCOUNT TITLE</span>
                      <strong className="text-dark-emerald fs-6">Arsalan Akmal</strong>
                    </div>

                    <div className="border-bottom pb-2">
                      <span className="text-muted fs-8 d-block">ACCOUNT NUMBER</span>
                      <strong className="text-dark-emerald fs-5 font-mono">3592390000004989</strong>
                    </div>

                    <div className="border-bottom pb-2">
                      <span className="text-muted fs-8 d-block">IBAN</span>
                      <strong className="text-dark-emerald fs-6 font-mono">PK60FAYS3592390000004989</strong>
                    </div>

                    <div>
                      <span className="text-muted fs-8 d-block">BRANCH</span>
                      <strong className="text-dark-emerald fs-6">9 number Branch</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded border border-light-gold mb-4 text-center">
                  <span className="fs-8 text-muted d-block mb-1">Confirm payment instantly via WhatsApp:</span>
                  <Link
                    href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I%20have%20sent%20the%20payment%20transfer%20and%20would%20like%20to%20confirm%20my%20enrollment."
                    target="_blank"
                    className="text-success fw-bold text-decoration-none fs-6 d-flex align-items-center justify-content-center gap-1"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>+44 7904 612487</span>
                  </Link>
                </div>

                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I%20want%20to%20reserve%20a%20seat%20for%20my%20Quran%20classes."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale w-100 py-3 rounded-pill fw-bold text-uppercase tracking-wider shadow-sm"
                >
                  Reserve Your Seat Now &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 py-lg-6 bg-cream border-top border-bottom border-light-gold">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">Parents Review</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">What UK Families Say About Us</h2>
            <p className="text-muted">Read feedback from our enrolled student families across London, Birmingham, and beyond.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm position-relative">
                <i className="bi bi-quote quote-icon"></i>
                <p className="text-muted fs-7 mb-4 relative-index">
                  "Finding a tutor that accommodates GMT/BST school times was a struggle. Quran For Alll has been amazing! My son does his 30 mins class right after coming home. Tutors are patient and their English is fluent."
                </p>
                <div className="d-flex align-items-center gap-3 mt-auto">
                  <div className="bg-dark-emerald text-white rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    S
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark-emerald fs-7">S. Ahmed</h6>
                    <span className="text-muted fs-8">London, UK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm position-relative">
                <i className="bi bi-quote quote-icon"></i>
                <p className="text-muted fs-7 mb-4 relative-index">
                  "We enrolled both our daughters in Noorani Qaida course. The interactive tools are so engaging, they actually look forward to their daily classes. The 1-week free trial convinced us. Very competitive rates!"
                </p>
                <div className="d-flex align-items-center gap-3 mt-auto">
                  <div className="bg-dark-emerald text-white rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    M
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark-emerald fs-7">M. Farooq</h6>
                    <span className="text-muted fs-8">Birmingham, UK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm position-relative">
                <i className="bi bi-quote quote-icon"></i>
                <p className="text-muted fs-7 mb-4 relative-index">
                  "I was looking to correct my own Tajweed rules but felt awkward going to local mosques. The 1-on-1 private sessions via Google Meet gave me the privacy and convenience I needed. Strongly recommended."
                </p>
                <div className="d-flex align-items-center gap-3 mt-auto">
                  <div className="bg-dark-emerald text-white rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    Y
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark-emerald fs-7">Y. Hussain</h6>
                    <span className="text-muted fs-8">Manchester, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <span className="text-primary-gold fw-bold uppercase fs-7 tracking-wider">FAQ</span>
            <h2 className="display-6 fw-bold text-dark-emerald font-display mt-2">Frequently Asked Questions</h2>
            <p className="text-muted">Find quick answers to common queries regarding our classes, schedules, and billing.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqAccordion">
                
                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      How long is the class and what is the schedule?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Classes are conducted **Monday to Friday** (5 days a week). Each class is **30 minutes** long, providing a daily rhythm that helps students retain their lessons without feeling overwhelmed. Timing is completely flexible and set in coordination with the student's availability.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What platform do you use for classes?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      All classes are held online via **Google Meet**. There is no complex software to install. We send a direct link to your email/WhatsApp, which you can click to join from any laptop, desktop, tablet, or smartphone.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Are there separate classes for women or young children?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Yes. All classes are 1-on-1 private lessons, meaning each student gets full individual attention. We have qualified male and female tutors available, and they are trained to deal patiently with kids as young as 4 years old.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      How do payments work and is there a contract?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Payments are made on a **monthly basis** via bank transfer ($50/month). There are no long-term contracts; you pay month-to-month and can pause or cancel at any time. Simply send payment to our Faysal Bank coordinates and send confirmation on WhatsApp.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      How do I start my 1-week free trial?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Getting started is simple. Click any "WhatsApp" CTA on this site or message **+44 7904 612487** directly. Our support agent will coordinate your trial schedule and pair you with a suitable tutor immediately.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="bg-dark-emerald text-white py-5 py-lg-6 position-relative overflow-hidden text-center">
        <div className="container py-3 position-relative" style={{ zIndex: 2 }}>
          <h2 className="display-5 fw-extrabold text-white mb-3 font-display">
            Start Your Quran Journey Today
          </h2>
          <p className="lead text-muted-cream max-w-600 mx-auto mb-4 opacity-90">
            Secure your spot in our online academy. Daily classes, certified scholars, and a launch discount price of $50 per month.
          </p>
          <div className="d-flex justify-content-center">
            <Link
              href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20register%20for%20the%201%20week%20free%20Quran%20classes."
              target="_blank"
              className="btn btn-gold btn-hover-scale px-5 py-3 fw-bold fs-5 shadow rounded-pill d-flex align-items-center gap-2 animate-pulse-gold"
            >
              <i className="bi bi-whatsapp"></i>
              <span>Claim Your 1 Week Free Classes</span>
            </Link>
          </div>
          <span className="d-block text-muted-cream fs-8 mt-3 opacity-75">
            ⚡ Hurry - limited seats available at $50/month!
          </span>
        </div>
      </section>
    </div>
  );
}
