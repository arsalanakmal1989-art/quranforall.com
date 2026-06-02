import Link from 'next/link';

export const metadata = {
  title: "Our Courses | Online Quran & Tajweed Syllabus",
  description: "Browse our structured online Quran learning programs. We offer Noorani Qaida for kids, Tajweed recitation, Quran memorization (Hifz), and foundations of Islamic studies.",
};

export default function Courses() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header-gradient text-center">
        <div className="container">
          <span className="badge badge-gold px-3 py-2 rounded-pill fw-bold mb-2">CURRICULUM</span>
          <h1 className="display-4 fw-extrabold text-white mb-2 font-display">Our Quran Courses</h1>
          <p className="lead text-muted-cream max-w-600 mx-auto opacity-90">
            Tailored 1-on-1 programs for children and adults, starting from basic alphabets to complete memorization.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-2">
          
          {/* Noorani Qaida */}
          <div className="row align-items-center g-5 mb-5 pb-5 border-bottom">
            <div className="col-lg-6">
              <div className="badge badge-gold mb-3 px-3 py-2 fs-7 rounded fw-bold">LEVEL: BEGINNER</div>
              <h2 className="fw-bold text-dark-emerald font-display mb-3">Noorani Qaida for Kids & Adults</h2>
              <p className="text-muted mb-4">
                The Noorani Qaida is the essential first step towards reading the Holy Quran correctly. Our tutors guide the student phonetic step-by-step to recognize the Arabic alphabet, connect letters, use vowel symbols (Harakaat), and apply initial rules of articulation (Makharij).
              </p>
              
              <h5 className="fw-bold text-dark-emerald fs-6 mb-3 font-display">What you will learn:</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4 text-muted fs-7">
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Accurate pronunciation of all 28 Arabic letters in their distinct forms</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Rules of short vowels (Fatha, Kasra, Damma) and Tanween</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Connecting letters to form complete Arabic words and sentences</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Basic stop signs (Waqf) and pronunciation symbols (Sukun, Shaddah)</span>
                </li>
              </ul>
              
              <div className="d-flex gap-3 align-items-center">
                <span className="fs-7 text-muted"><strong>Target Age:</strong> 4+ & Adults</span>
                <span className="text-muted">|</span>
                <span className="fs-7 text-muted"><strong>Duration:</strong> 2-4 Months (Avg)</span>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 text-center shadow-sm">
                <h4 className="fw-bold text-dark-emerald font-display mb-3">Start with Noorani Qaida</h4>
                <p className="text-muted fs-7 mb-4">Perfect for children starting their Quranic journey or adults needing to build reading confidence from the ground up.</p>
                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20the%20Noorani%20Qaida%20course."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale px-4 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Book Free Trial Class &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Tajweed Recitation */}
          <div className="row align-items-center g-5 mb-5 pb-5 border-bottom flex-lg-row-reverse">
            <div className="col-lg-6">
              <div className="badge badge-gold mb-3 px-3 py-2 fs-7 rounded fw-bold">LEVEL: INTERMEDIATE</div>
              <h2 className="fw-bold text-dark-emerald font-display mb-3">Quran Recitation with Tajweed</h2>
              <p className="text-muted mb-4">
                Reciting the Holy Quran beautifully and correctly is a spiritual duty. This course focuses on applying the advanced rules of Tajweed in real-time, helping the student read with proper rhythm, correct articulation points, and beautiful tone (Tarteel).
              </p>
              
              <h5 className="fw-bold text-dark-emerald fs-6 mb-3 font-display">What you will learn:</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4 text-muted fs-7">
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Rules of Noon Sakinah and Tanween (Izhār, Idghām, Iqlaab, Ikhfā)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Rules of Meem Sakinah and prolongation rules (Madd)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Heavy and light letters (Tafkheem and Tarqeeq)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Practical application over Juz Amma and the rest of the Quran</span>
                </li>
              </ul>
              
              <div className="d-flex gap-3 align-items-center">
                <span className="fs-7 text-muted"><strong>Target Age:</strong> 6+ & Adults</span>
                <span className="text-muted">|</span>
                <span className="fs-7 text-muted"><strong>Duration:</strong> Ongoing</span>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 text-center shadow-sm">
                <h4 className="fw-bold text-dark-emerald font-display mb-3">Master Fluent Recitation</h4>
                <p className="text-muted fs-7 mb-4">For students who can already read Arabic words but wish to refine their accent and recite precisely as the Prophet (PBUH) recited.</p>
                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20the%20Quran%20Recitation%20with%20Tajweed%20course."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale px-4 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Register on WhatsApp &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Hifz */}
          <div className="row align-items-center g-5 mb-5 pb-5 border-bottom">
            <div className="col-lg-6">
              <div className="badge badge-gold mb-3 px-3 py-2 fs-7 rounded fw-bold">LEVEL: ADVANCED</div>
              <h2 className="fw-bold text-dark-emerald font-display mb-3">Quran Memorization (Hifz)</h2>
              <p className="text-muted mb-4">
                Designed for dedicated students who wish to commit parts or the entirety of the Quran to memory. Our tutors build a structured memorization log with daily lesson checks (Sabaq), recent revision checks (Sabaqi), and old revision checks (Manzil).
              </p>
              
              <h5 className="fw-bold text-dark-emerald fs-6 mb-3 font-display">What you will learn:</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4 text-muted fs-7">
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Effective memorization strategies and retention exercises</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Strict daily evaluation of newly memorized verses</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Systematic revision plans to prevent forgetting old portions</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Development of focus, mental discipline, and spiritual growth</span>
                </li>
              </ul>
              
              <div className="d-flex gap-3 align-items-center">
                <span className="fs-7 text-muted"><strong>Target Age:</strong> 7+ (With fluent reading)</span>
                <span className="text-muted">|</span>
                <span className="fs-7 text-muted"><strong>Duration:</strong> Custom</span>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 text-center shadow-sm">
                <h4 className="fw-bold text-dark-emerald font-display mb-3">Commit to the Holy Book</h4>
                <p className="text-muted fs-7 mb-4">Earn the immense spiritual reward of becoming a Hafiz. We set reasonable milestones tailored to the student's busy school schedule.</p>
                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20the%20Quran%20Memorization%20(Hifz)%20course."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale px-4 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Apply For Hifz Class &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Islamic Studies */}
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-6">
              <div className="badge badge-gold mb-3 px-3 py-2 fs-7 rounded fw-bold">LEVEL: FOUNDATION</div>
              <h2 className="fw-bold text-dark-emerald font-display mb-3">Islamic Studies & Daily Duas</h2>
              <p className="text-muted mb-4">
                Perfect as a standalone course or integrated alongside Quran reading. We focus on building the practical character and ethical grounding of young UK Muslims, teaching them the basics of Islamic practice, prayer (Salah), and historical stories of the Prophets.
              </p>
              
              <h5 className="fw-bold text-dark-emerald fs-6 mb-3 font-display">What you will learn:</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4 text-muted fs-7">
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>The step-by-step method of Wudu (ablution) and daily Salah (five prayers)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Essential daily supplications (Duas) for protection, meals, sleeping, etc.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Stories of the Prophets and the life of Prophet Muhammad (Seerah)</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Islamic morals, manners (Adab), and respectful community values</span>
                </li>
              </ul>
              
              <div className="d-flex gap-3 align-items-center">
                <span className="fs-7 text-muted"><strong>Target Age:</strong> 5+</span>
                <span className="text-muted">|</span>
                <span className="fs-7 text-muted"><strong>Duration:</strong> Ongoing</span>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 text-center shadow-sm">
                <h4 className="fw-bold text-dark-emerald font-display mb-3">Nurture Islamic Character</h4>
                <p className="text-muted fs-7 mb-4">Equip your children with essential values and practical skills to practice Islam confidently in the modern world.</p>
                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20the%20Islamic%20Studies%20and%20Duas%20course."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale px-4 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Start Free Trial Now &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
