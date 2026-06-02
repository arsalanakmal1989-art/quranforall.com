import Link from 'next/link';

export const metadata = {
  title: "Affordable Pricing & Bank Details | Quran For Alll Academy",
  description: "View our flat-rate tuition fee of $50 (approx. £40) per month. Learn about our 1-week free trial, Faysal Bank payment details, and easy enrollment steps.",
};

export default function Pricing() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header-gradient text-center">
        <div className="container">
          <span className="badge badge-gold px-3 py-2 rounded-pill fw-bold mb-2">TUITION PLAN</span>
          <h1 className="display-4 fw-extrabold text-white mb-2 font-display">Affordable & Flat Pricing</h1>
          <p className="lead text-muted-cream max-w-600 mx-auto opacity-90">
            No registration fees. No long term contracts. Just high-quality 1-on-1 classes at a highly competitive flat monthly rate.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-2">
          <div className="row g-4 align-items-center justify-content-center">
            
            {/* Class Plan Card */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg p-4 p-md-5 bg-dark-emerald text-white rounded-4 position-relative overflow-hidden">
                {/* Decorative glow */}
                <div className="position-absolute top-0 end-0 bg-gold opacity-10 rounded-circle" style={{ width: '150px', height: '150px', transform: 'translate(40px, -40px)' }}></div>
                
                <span className="badge badge-gold px-3 py-2 rounded-pill fw-bold align-self-start mb-4">LAUNCH SPECIAL</span>
                
                <h3 className="fw-bold font-display text-white mb-1">Standard Tuition Plan</h3>
                <p className="text-muted-cream fs-7 mb-4">Ideal for daily progress, revision, and steady retention.</p>
                
                <div className="d-flex align-items-baseline mb-4">
                  <span className="display-4 fw-extrabold text-gold font-display">$50</span>
                  <span className="fs-5 text-muted-cream ms-1">/ month</span>
                  <span className="fs-6 text-muted-cream ms-3 opacity-75">(Approx. £40 GBP)</span>
                </div>

                <div className="border-top border-emerald-light pt-4 mb-4">
                  <h6 className="fw-bold mb-3 text-gold font-display">Plan Inclusions:</h6>
                  <ul className="list-unstyled d-flex flex-column gap-3 fs-7">
                    <li className="d-flex gap-2 align-items-start">
                      <i className="bi bi-check-circle-fill text-gold"></i>
                      <span><strong>1 Week Free Classes</strong> (Try before paying)</span>
                    </li>
                    <li className="d-flex gap-2 align-items-start">
                      <i className="bi bi-check-circle-fill text-gold"></i>
                      <span><strong>Monday to Friday</strong> (5 days a week)</span>
                    </li>
                    <li className="d-flex gap-2 align-items-start">
                      <i className="bi bi-check-circle-fill text-gold"></i>
                      <span><strong>Daily 30-minute classes</strong> (1-on-1 private lessons)</span>
                    </li>
                    <li className="d-flex gap-2 align-items-start">
                      <i className="bi bi-check-circle-fill text-gold"></i>
                      <span>Flexible timings coordinated around student's schedule</span>
                    </li>
                    <li className="d-flex gap-2 align-items-start">
                      <i className="bi bi-check-circle-fill text-gold"></i>
                      <span>No registration fees & cancel anytime</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20interested%20in%20enrolling%20in%20the%20$50/month%20Quran%20classes."
                  target="_blank"
                  className="btn btn-gold btn-hover-scale w-100 py-3 rounded-pill fw-bold text-uppercase tracking-wider shadow animate-pulse-gold"
                >
                  Start 1-Week Free Trial
                </Link>
              </div>
            </div>

            {/* Bank details Card */}
            <div className="col-lg-6">
              <div className="card border-0 bg-cream border border-light-gold rounded-4 p-4 p-md-5 shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark-emerald font-display m-0">Payment Coordinates</h4>
                    <span className="badge badge-gold px-2 py-1 fs-8 rounded">FAYSAL BANK</span>
                  </div>
                  <p className="text-muted fs-7 mb-4">
                    To finalize your registration after the free trial or lock in the special launch price, please submit your payment to our bank account.
                  </p>

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

                <div className="p-3 bg-white border border-light-gold rounded text-center">
                  <p className="text-muted fs-8 mb-2">
                    Once payment is sent, please share a screenshot of the confirmation page or receipt via WhatsApp to start classes immediately.
                  </p>
                  <Link
                    href="https://wa.me/447904612487?text=Assalamu%20Alaikum,%20I'm%20sending%20proof%20of%20payment%20transfer."
                    target="_blank"
                    className="btn btn-outline-success w-100 py-2 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Confirm via WhatsApp (+447904612487)</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Step by step process */}
      <section className="py-5 bg-cream border-top border-bottom border-light-gold">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <h2 className="display-6 fw-bold text-dark-emerald font-display">How To Complete Enrollment</h2>
            <p className="text-muted">A clear, simple, and high-trust procedure to start your online lessons.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">1</div>
                <h5 className="fw-bold text-dark-emerald font-display">Claim Free Trial</h5>
                <p className="text-muted fs-7 mb-0">
                  Message us on WhatsApp. We'll set up your free trial dates and link you with a dedicated tutor.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">2</div>
                <h5 className="fw-bold text-dark-emerald font-display">Submit Bank Transfer</h5>
                <p className="text-muted fs-7 mb-0">
                  Submit the $50 subscription tuition to Faysal Bank (Coordinates above).
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 h-100 p-4 shadow-sm text-center">
                <div className="step-number mx-auto mb-3">3</div>
                <h5 className="fw-bold text-dark-emerald font-display">Share & Start</h5>
                <p className="text-muted fs-7 mb-0">
                  Send confirmation to +447904612487 on WhatsApp, get your Google Meet link, and start learning daily!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ on Billing */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5 max-w-600 mx-auto">
            <h2 className="display-6 fw-bold text-dark-emerald font-display">Billing & Pricing FAQs</h2>
            <p className="text-muted">Common questions regarding payments, currencies, and schedule commitments.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="pricingFaqAccordion">
                
                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingPriceOne">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceOne" aria-expanded="false" aria-controls="collapsePriceOne">
                      Can I pay in British Pounds (GBP)?
                    </button>
                  </h2>
                  <div id="collapsePriceOne" className="accordion-collapse collapse" aria-labelledby="headingPriceOne" data-bs-parent="#pricingFaqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Yes. The subscription fee of $50 is equivalent to approximately **£40 GBP** per month. You can transfer from your UK bank account to our IBAN or coordinate via WhatsApp for alternative payment links if bank transfer is not preferred.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingPriceTwo">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceTwo" aria-expanded="false" aria-controls="collapsePriceTwo">
                      What happens if we miss a class?
                    </button>
                  </h2>
                  <div id="collapsePriceTwo" className="accordion-collapse collapse" aria-labelledby="headingPriceTwo" data-bs-parent="#pricingFaqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      If you notify your tutor at least 2 hours in advance, we will coordinate a makeup class during the weekend or at another mutually available slot during the week. We try our best to be flexible with families.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingPriceThree">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceThree" aria-expanded="false" aria-controls="collapsePriceThree">
                      Are there sibling discounts?
                    </button>
                  </h2>
                  <div id="collapsePriceThree" className="accordion-collapse collapse" aria-labelledby="headingPriceThree" data-bs-parent="#pricingFaqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      Yes. For families registering two or more children, we offer a custom family package. Please reach out to us directly on WhatsApp (+447904612487) to coordinate your family discount pricing.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom py-2">
                  <h2 className="accordion-header" id="headingPriceFour">
                    <button className="accordion-button collapsed fw-bold text-dark-emerald bg-white shadow-none font-display fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceFour" aria-expanded="false" aria-controls="collapsePriceFour">
                      Is there a refund policy?
                    </button>
                  </h2>
                  <div id="collapsePriceFour" className="accordion-collapse collapse" aria-labelledby="headingPriceFour" data-bs-parent="#pricingFaqAccordion">
                    <div className="accordion-body text-muted fs-7">
                      If you are unsatisfied within the first week of starting paid lessons (after your 1-week free trial has completed), we will refund your tuition fee in full. We aim to build high-trust relationships with all parents.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
