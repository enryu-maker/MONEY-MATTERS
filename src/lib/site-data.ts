/** Content sourced from https://moneymatters.ae/ */

export const site = {
  name: "Money Matters",
  tagline: "Mortgage Consultants",
  phone: "+971 50 858 0600",
  phoneWhatsAppTel: "+971508580600",
  phoneLandline: "+971 4 585 0565",
  phoneLandlineTel: "+97145850565",
  email: "admin@moneymatters.ae",
  address: "1009, Tamani Art Office Tower, Business Bay, Dubai",
  poBox: "P.O. Box 120380",
  founded: 2016,
  privacyUrl: "https://moneymatters.ae/privacy-policy/",
  social: {
    facebook: "https://www.facebook.com/www.moneymatters.ae/",
    instagram: "https://www.instagram.com/moneymatters_uae/",
    linkedin: "https://www.linkedin.com/company/moneymattersae/",
  },
} as const;

export const about = {
  intro:
    "Money Matters is a boutique mortgage consultancy currently affiliated with major banks within the financial sector in the UAE, specifically dealing in mortgages of all kinds of properties (Retail & Corporate – Residential & Commercial). We help you navigate the wide world of mortgage overlays.",
  detail:
    "Founded in 2016, we are proud to be one of the oldest mortgage broker firms in the UAE. We are officially licensed by the Dubai Economic Department, Dubai, and operate as fully certified RERA Mortgage Brokers.",
} as const;

export const services = [
  {
    title: "Resale / Fresh Purchase",
    summary: "First-time buyer or experienced investor",
    description:
      "Whether you are a first-time buyer or an experienced investor looking to purchase a property in Dubai and the UAE, our team provides factual, unbiased, and independent advice. We work closely with you to understand your requirements and financial goals and recommend mortgage packages with clearly outlined terms — eliminating hidden costs down the line.",
  },
  {
    title: "Buyout",
    summary: "Refinance at a better rate",
    description:
      "If you think you are being overcharged by your lender, we evaluate your case for free and compare it against options on the market. When savings are possible, we coordinate a stress-free transfer between your existing bank and the new lender.",
  },
  {
    title: "Equity Release (Refinance)",
    summary: "Unlock the value in your home",
    description:
      "You may be able to tap into the value of your current home while still living there. An equity release mortgage can provide extra funds for investment, home improvements, or other financial plans. Our consultants help you understand benefits and risks before you proceed.",
  },
  {
    title: "Non-Resident Mortgages",
    summary: "Own freehold property from anywhere",
    description:
      "No matter where you live, you can own freehold property in the UAE. We create tailor-made solutions for resale, off-plan, buyout, and equity release — with competitive rates up to 50% loan-to-value for overseas buyers purchasing completed property.",
  },
  {
    title: "Corporate Mortgages",
    summary: "For businesses and investors",
    description:
      "Corporate mortgages are designed for businesses and investors who wish to purchase or refinance commercial, revenue-generating properties. Benefit from our expertise for smooth approvals, high loan amounts, flexible terms, and competitive rates.",
  },
  {
    title: "Commercial Real Estate Financing",
    summary: "Offices · Warehouses · Retail",
    description:
      "Finance against completed or under-construction commercial assets — up to 60% of property value, flexible payment plans, tenure up to 15 years, and structures including lease rental discounting.",
  },
  {
    title: "Corporate & SME Lending",
    summary: "Growth funding for businesses",
    description:
      "Flexible lending solutions for corporates and SMEs — structured to support expansion, working capital needs, and growth objectives with clear terms and competitive pricing.",
  },
  {
    title: "Off-Plan Loan / Construction Loan",
    summary: "Funding for under-construction properties",
    description:
      "Financing options for off-plan and construction-stage purchases, aligned to developer payment milestones and lender policy — with guidance on eligibility, documentation, and approvals.",
  },
  {
    title: "Loan Against Property (LAP)",
    summary: "Unlock funds using property as collateral",
    description:
      "Loan Against Property (LAP) is a secured loan that allows property owners to borrow funds by pledging their residential, commercial, or rented property as collateral. The loan amount is based on the property's value and the borrower's repayment capacity. LAP offers competitive interest rates and flexible repayment terms, making it a suitable financing option for business expansion, working capital requirements, debt consolidation, education, medical expenses, or other personal and business needs.",
  },
] as const;

/** Logos from https://moneymatters.ae/ partner carousel */
export const bankPartners = [
  // { name: "Abu Dhabi Islamic Bank (ADIB)", logo: "/partners/adib.jpg" },
  { name: "Ajman Bank", logo: "/partners/ajman.png" },
  { name: "Commercial Bank of Dubai", logo: "/partners/CBD_Logo.jpg" }, 
  { name: "Dubai Islamic Bank", logo: "/partners/dubai-islamic.png" },
  { name: "Emirates NBD", logo: "/partners/emirates-nbd.jpg" },
  { name: "HSBC", logo: "/partners/HSBC.png" },
  // { name: "Mashreq Bank", logo: "/partners/mashreq.png" },
  { name: "Standard Chartered", logo: "/partners/standard-chartered.png" },
  { name: "First Abu Dhabi Bank", logo: "/partners/fab.png" },
  { name: "Emirates Islamic", logo: "/partners/emirates-islamic-20260602.png" },
  { name: "Sharjah Islamic Bank", logo: "/partners/sharjah-islamic-20260602.png" },
  { name: "Arab Bank", logo: "/partners/arab-bank-20260602.png" },
  { name: "National Bank of Oman", logo: "/partners/nbo-20260602.png" },
  { name: "Saudi National Bank", logo: "/partners/snb-20260602.png" },
  { name: "United Arab Bank", logo: "/partners/united-arab-bank-20260602.png" },
  // { name: "Abu Dhabi Commercial Bank (ADCB)", logo: "/partners/adcb.jpg" },
] as const;

export const affiliatePartners = [
] as const;

export const allPartners = [...bankPartners, ...affiliatePartners] as const;

export const aboutNav = [
  { label: "Our company", href: "/about", description: "Who we are & how we work" },
  { label: "Our team", href: "/about/team", description: "Meet our mortgage advisors" },
  { label: "Our partners", href: "/about/partners", description: "Major UAE banks & affiliates" },
] as const;

/** https://moneymatters.ae/about/team/ */
export const team = [
  {
    name: "Siddharth Chhugani",
    role: "Founder & CEO",
    image: "/team/siddharth.jpeg",
    bio: "With more than 20 years in corporate finance, banking, and mortgage markets, Siddharth leads Money Matters — building lender relationships, strategic alliances, and a results-driven team focused on client satisfaction.",
  },
  {
    name: "Mala Mehra",
    role: "General Manager",
    image: "/team/mala.jpg",
    bio: "Mala brings banking experience since 2000, corporate law expertise, and an MBA. She ensures every transaction meets compliance while guiding clients with empathy from inception through completion.",
  },
  // {
  //   name: "Sandip Banerjee",
  //   role: "Assistant Manager",
  //   image: "/team/sandip.png",
  //   bio: "Sandip has 17 years in mortgage loans, business banking, and TWC. He delivers holistic mortgage planning aligned to your goals, cash flow, and risk profile.",
  // },
  {
    name: "Mohammed Sarbar Ahmed",
    role: "Sales Manager",
    image: "/team/sarbar.jpeg",
    bio: "Over 25 years in banking including Barclays, DIB, Mashreq, Citi, and Noor Bank — with 19 years in the UAE. Sarbar guides first-time buyers and seasoned investors through tailored mortgage solutions.",
  },
  {
    name: "Sebastian Tellis",
    role: "Mortgage Advisor",
    image: "/team/sebastian.jpg",
    bio: "13 years across ENBD, EIB, FAB, ADCB, CBD, Ajman Bank, and HDFC in the UAE. Sebastian combines deep product knowledge with cross-cultural relationship management.",
  },
  {
    name: "Rekha Rajendran",
    role: "Admin Officer",
    image: "/team/rekha.jpeg",
    bio: "Results-oriented Administrative Officer with experience in Banking operations. Skilled in executive support, process coordination, customer service, and maintaining efficient day-to-day operations in fast-paced professional environments.",
  }, 
] as const;

export const testimonials = [
  {
    quote:
      "The best service I had ever experienced with Money Matters Mortgage Brokers — especially Mr Siddarth: fast understanding, immediate action, and quick response. Very professional; he made my mortgage very easy and smooth on time.",
    name: "Suresh Keshav Das",
    source: "Google review",
  },
  {
    quote:
      "I was extremely satisfied with Money Matter and especially Ms Mala. She guided my father and I at all times and always went beyond her duty to help us.",
    name: "Mehreen Khan",
    source: "Google review",
  },
  {
    quote:
      "Excellent service and will recommend to all my contacts. Great assistance by Sandeep. He made the entire process smooth with regular updates. I was facing difficulties as self-employed but Sandeep got approval on the first try.",
    name: "Darpan Mahajan",
    source: "Google review",
  },
  {
    quote:
      "I used their services for my property purchase. Sandip has been assisting me and provided a very high quality service. Definitely to recommend!",
    name: "Enrico Dubaiese",
    source: "Google review",
  },
  {
    quote:
      "Ms. Mala is an extremely professional and supportive individual who provides right guidance at every step on your mortgage process. I would without doubt recommend her.",
    name: "Riyaz Mulla",
    source: "Google review",
  },
  {
    quote:
      "Had a great experience working with Money Matters! The team were very supportive, had great knowledge of the market and provided us excellent options.",
    name: "Zeina Fakhry",
    source: "Google review",
  },
] as const;

export const faqs = [
  {
    q: "What do I need to get pre-approval for a mortgage loan?",
    a: "Salaried individuals need KYC documents (passport, visa, Emirates ID), six months of bank statements, and a salary certificate. Self-employed applicants need KYC documents, six months of personal and business bank statements, and a copy of their trade licence.",
  },
  {
    q: "For how long is a pre-approval valid?",
    a: "A pre-approval offer is typically valid for 45–60 days, depending on the lending policy of the bank.",
  },
  {
    q: "How much down-payment is required?",
    a: "Down payment requirements are regulated by the Central Bank. For completed properties, it ranges between 20% and 40% of the property value. For under-construction properties, a 50% down payment is generally required.",
  },
  {
    q: "Why do I need a mortgage broker?",
    a: "A mortgage broker analyses products across lenders, saves you time, and guides you through documentation and transfer until completion. At Money Matters, we work by your side throughout the journey.",
  },
  {
    q: "I am a non-resident. Am I eligible to get a mortgage?",
    a: "Yes. Certain banks in the UAE offer mortgages to non-residents. Terms may include a higher down payment and different rates compared with UAE residents.",
  },
  {
    q: "How soon can I get my mortgage loan approved?",
    a: "With complete documentation in order, approval can often be obtained within two business days for salaried applicants and within five business days for self-employed applicants.",
  },
  {
    q: "What is the maximum tenure of a mortgage loan?",
    a: "The maximum tenure is 25 years, though this may be shorter depending on your age at maturity.",
  },
  {
    q: "How much can I borrow?",
    a: "Borrowing capacity depends mainly on income and liabilities. For purchases under AED 5 million, maximum LTV is typically 80% for expatriates and 85% for UAE nationals. Our team outlines options so you can decide with confidence.",
  },
  {
    q: "I am self-employed. Can I get a mortgage?",
    a: "Yes. Banks have different criteria for self-employed applicants. We work with lenders that look favourably at self-employed profiles and structure applications accordingly.",
  },
] as const;
