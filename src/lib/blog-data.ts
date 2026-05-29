/** Mortgage guides for UAE SEO — Money Matters */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  category: string;
  author: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dubai-mortgage-down-payment-guide",
    title: "How Much Down Payment Do You Need for a Mortgage in Dubai?",
    excerpt:
      "UAE Central Bank rules explained: LTV limits for expats and nationals, off-plan vs ready property, and how to plan your deposit before you buy.",
    description:
      "Complete guide to mortgage down payments in Dubai & the UAE — 20% to 50% deposits, expat vs UAE national LTV, off-plan rules, and tips from licensed brokers.",
    keywords: [
      "mortgage down payment Dubai",
      "UAE property deposit",
      "LTV expat UAE",
      "home loan down payment UAE",
    ],
    publishedAt: "2025-11-12",
    updatedAt: "2026-01-08",
    readMinutes: 7,
    category: "Home buying",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "Before you fall in love with a villa in Dubai Hills or an apartment in Business Bay, one number matters as much as the price tag: your down payment. In the UAE, how much cash you need upfront is set by Central Bank loan-to-value (LTV) rules — and they differ for UAE nationals, expatriates, property type, and whether the home is ready or still under construction.",
      },
      {
        type: "h2",
        text: "Down payment rules for completed properties in Dubai",
      },
      {
        type: "p",
        text: "For most ready (completed) residential purchases under AED 5 million, expatriate buyers typically need a minimum 20% down payment (80% LTV). UAE nationals may qualify for up to 85% LTV on a first home, which means as little as 15% down in eligible cases. Above AED 5 million, LTV caps are often lower — commonly around 70% for expats — so your deposit requirement rises with property value.",
      },
      {
        type: "ul",
        items: [
          "Expatriates: often 20% minimum on properties under AED 5M (subject to bank policy)",
          "UAE nationals: up to 85% LTV on first homes in many cases",
          "High-value homes: expect 30% or more down as LTV decreases",
          "Investment / second homes: banks may require larger deposits than a primary residence",
        ],
      },
      {
        type: "h2",
        text: "Off-plan properties: why 50% down is common",
      },
      {
        type: "p",
        text: "Buying off-plan from a developer? Regulators and lenders treat this differently. A 50% down payment is widely required for under-construction purchases, because the bank’s risk profile changes until the property is handed over. Always confirm the payment plan with both the developer and your mortgage advisor before signing a SPA.",
      },
      {
        type: "h3",
        text: "Don’t forget costs beyond the deposit",
      },
      {
        type: "p",
        text: "Your “cash to close” is more than the down payment alone. Budget for Dubai Land Department fees (typically 4% transfer fee plus admin costs), real estate agency commission where applicable, bank arrangement fees, property valuation, and mortgage registration. A good broker will itemise these so you are not surprised at the final meeting.",
      },
      {
        type: "h2",
        text: "How to plan your deposit strategically",
      },
      {
        type: "ul",
        items: [
          "Get mortgage pre-approval early so you know your maximum loan and required deposit",
          "Use our EMI calculator to stress-test monthly payments at different down payment levels",
          "Keep proof of funds ready — banks verify savings, sale proceeds, or gifts with documentation",
          "If you are upgrading, ask about equity release on your current home to fund the next purchase",
        ],
      },
      {
        type: "p",
        text: "Money Matters has helped Dubai and UAE buyers navigate deposit rules since 2016. We compare offers across major banks so you understand the true cost of ownership — not just the headline rate.",
      },
    ],
  },
  {
    slug: "non-resident-mortgage-uae-guide",
    title: "Non-Resident Mortgage in the UAE: Requirements, LTV & How to Apply",
    excerpt:
      "Living abroad but buying in Dubai? Learn eligibility, typical 50% LTV, documents overseas buyers need, and how to secure competitive rates.",
    description:
      "Guide to non-resident mortgages in Dubai & UAE — who qualifies, loan-to-value limits, required documents, best banks, and how Money Matters helps overseas buyers.",
    keywords: [
      "non-resident mortgage UAE",
      "Dubai property loan overseas buyer",
      "expat mortgage Dubai",
      "buy property UAE from abroad",
    ],
    publishedAt: "2025-12-03",
    updatedAt: "2026-02-14",
    readMinutes: 8,
    category: "Non-resident",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "Dubai remains one of the few global cities where non-residents can own freehold property with relatively straightforward finance options. Whether you live in London, Mumbai, or Riyadh, several UAE banks offer mortgages to overseas buyers — but terms are stricter than for UAE residents, and preparation wins approvals.",
      },
      {
        type: "h2",
        text: "Who qualifies for a non-resident mortgage?",
      },
      {
        type: "p",
        text: "Eligibility varies by bank, nationality, income currency, and property type. Generally, you must demonstrate stable income, a clean credit history, and sufficient assets. Most lenders focus on completed freehold properties in approved developments rather than every off-plan launch.",
      },
      {
        type: "ul",
        items: [
          "Salaried professionals with verifiable income in major currencies",
          "Self-employed applicants with audited accounts (criteria vary widely)",
          "Purchases of completed resale or ready units in recognised communities",
          "Loan amounts subject to bank minimums and maximum LTV policies",
        ],
      },
      {
        type: "h2",
        text: "Typical LTV and down payment for overseas buyers",
      },
      {
        type: "p",
        text: "Non-resident mortgages often cap at around 50% LTV for completed property — meaning you should plan for roughly 50% down plus transaction costs. Some programmes differ for specific nationalities or employer profiles. Rates may be slightly higher than resident products, which makes comparing multiple banks essential.",
      },
      {
        type: "h3",
        text: "Documents you should prepare",
      },
      {
        type: "ul",
        items: [
          "Valid passport and proof of address in your country of residence",
          "Six to twelve months of personal bank statements",
          "Salary certificates or business financials (audited where required)",
          "Property details: title deed or sale agreement, NOC if applicable",
          "Existing liability statements (loans, credit cards, mortgages abroad)",
        ],
      },
      {
        type: "h2",
        text: "Why use a mortgage broker as a non-resident?",
      },
      {
        type: "p",
        text: "Walking into a single branch while you are overseas is slow and rarely shows you the full market. A licensed Dubai mortgage consultant coordinates valuations, legal checks, and bank submissions on your behalf — often without you flying in until completion. Money Matters structures non-resident files for lenders that actively welcome overseas clients, including buyout and equity release where relevant.",
      },
      {
        type: "h2",
        text: "Common mistakes to avoid",
      },
      {
        type: "ul",
        items: [
          "Signing a SPA before confirming finance approval",
          "Underestimating FX impact when income is not in AED",
          "Ignoring total cost: arrangement fees, life insurance, and early settlement rules",
          "Choosing a bank on rate alone without reading fine print on penalties",
        ],
      },
      {
        type: "p",
        text: "Ready to explore your options? Speak with our team for a tailored non-resident mortgage assessment — we work with leading UAE banks and keep your file moving while you are abroad.",
      },
    ],
  },
  {
    slug: "mortgage-buyout-dubai-refinance-guide",
    title: "Mortgage Buyout in Dubai: When to Refinance Your Home Loan",
    excerpt:
      "Paying too much interest? See when a UAE mortgage buyout makes sense, how long it takes, and how to switch banks without stress.",
    description:
      "Dubai mortgage buyout & refinance guide — when to switch lenders, costs, savings, documents, and how Money Matters manages UAE home loan transfers.",
    keywords: [
      "mortgage buyout Dubai",
      "refinance home loan UAE",
      "switch mortgage bank Dubai",
      "lower mortgage rate UAE",
    ],
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-05",
    readMinutes: 6,
    category: "Refinance",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "If your fixed rate ended years ago or you never renegotiated after moving to the UAE, you may be paying more than necessary. A mortgage buyout — refinancing with a new bank to repay your existing loan — can reduce monthly EMIs, unlock better terms, or consolidate debt. It is not right for everyone, but when the numbers work, the savings are real.",
      },
      {
        type: "h2",
        text: "What is a mortgage buyout in the UAE?",
      },
      {
        type: "p",
        text: "A buyout is when a new lender settles your outstanding home loan with your current bank and issues a fresh mortgage, usually on the same property. You may also hear it called balance transfer or refinance. The process is regulated and requires property valuation, liability letters, and clearance from your existing bank.",
      },
      {
        type: "h2",
        text: "When does refinancing make sense?",
      },
      {
        type: "ul",
        items: [
          "Market rates have dropped since you took your original loan",
          "Your salary or employer profile improved, qualifying you for better pricing",
          "You want to release equity (cash-out) for renovations or another investment",
          "You are unhappy with service, insurance bundling, or hidden fees at your current bank",
          "You need to remove a co-borrower or restructure the loan after life changes",
        ],
      },
      {
        type: "h2",
        text: "Costs to weigh before you switch",
      },
      {
        type: "p",
        text: "Refinancing is not free. Factor in early settlement fees from your existing lender, new bank arrangement charges, valuation fees, and potential insurance requirements. A break-even calculation compares total fees against monthly EMI savings over the remaining tenure. Our advisors run this analysis for free before you commit.",
      },
      {
        type: "h3",
        text: "How long does a buyout take?",
      },
      {
        type: "p",
        text: "With complete documents, many buyouts complete within a few weeks, though timelines depend on both banks and whether you have a NOC or developer approval on the property. Self-employed applicants or villas with unique title situations may take longer.",
      },
      {
        type: "h2",
        text: "How Money Matters handles your buyout",
      },
      {
        type: "p",
        text: "We compare live offers from partners including Emirates NBD, Mashreq, ADCB, FAB, and others — then manage the handover between banks so you are not chasing two relationship managers. From liability letter to final disbursement, we stay on your side of the table.",
      },
      {
        type: "p",
        text: "Think you are overpaying? Request a buyout review today. We will tell you honestly if staying put is smarter — our reputation is built on long-term client trust, not pushing unnecessary switches.",
      },
    ],
  },
  {
    slug: "self-employed-mortgage-uae-guide",
    title: "Self-Employed Mortgage in the UAE: How to Get Approved",
    excerpt:
      "Business owners and freelancers face stricter bank checks. Learn which documents matter, how banks assess income, and how to strengthen your application.",
    description:
      "Self-employed mortgage guide for Dubai & UAE — bank requirements, audited accounts, LTV, common rejections, and broker tips to improve approval odds.",
    keywords: [
      "self-employed mortgage UAE",
      "business owner home loan Dubai",
      "freelancer mortgage Dubai",
      "mortgage for entrepreneurs UAE",
    ],
    publishedAt: "2026-02-18",
    updatedAt: "2026-04-10",
    readMinutes: 7,
    category: "Home buying",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "Running your own company in the UAE does not mean you cannot buy a home — but the mortgage process looks different from a straightforward salary certificate. Banks want proof that your income is stable, sustainable, and sufficient after expenses. The good news: several lenders actively work with self-employed applicants when the file is prepared correctly.",
      },
      {
        type: "h2",
        text: "How UAE banks assess self-employed income",
      },
      {
        type: "p",
        text: "Most banks average your net profit or personal drawings over two to three years of audited financials. Some use bank statement analysis for smaller businesses or sole establishments. Your industry, trade licence age, and existing debts all feed into affordability calculations — often more conservative than salaried multiples.",
      },
      {
        type: "ul",
        items: [
          "Audited financial statements (typically 2–3 years)",
          "Trade licence and MOA / company documents",
          "Personal and business bank statements (6–12 months)",
          "VAT returns or management accounts where applicable",
          "Passport, visa, Emirates ID, and liability summaries",
        ],
      },
      {
        type: "h2",
        text: "Tips to improve your approval chances",
      },
      {
        type: "ul",
        items: [
          "Keep personal and business accounts clean with consistent inflows",
          "Reduce credit card and personal loan balances before applying",
          "Choose a property within realistic LTV — do not max out borrowing",
          "Work with a broker who knows which banks favour your business type",
          "Get pre-approval before committing to a sale agreement",
        ],
      },
      {
        type: "h2",
        text: "Why a mortgage broker matters for business owners",
      },
      {
        type: "p",
        text: "A single branch may decline you while another division welcomes your profile. Money Matters presents your case to multiple UAE lenders with the right narrative — highlighting recurring revenue, strong deposits, and professional audits. We have secured approvals for consultants, restaurant owners, e-commerce operators, and property investors across Dubai.",
      },
      {
        type: "p",
        text: "If you were told “no” elsewhere, speak with us before giving up. Requirements change between banks every quarter, and a structured resubmission often succeeds.",
      },
    ],
  },
  {
    slug: "mortgage-pre-approval-dubai-guide",
    title: "Mortgage Pre-Approval in Dubai: Steps, Validity & Documents",
    excerpt:
      "Get pre-approved before you house-hunt. Understand the 45–60 day validity window, paperwork checklist, and how pre-approval strengthens your offer.",
    description:
      "Dubai mortgage pre-approval explained — documents for salaried & self-employed buyers, validity period, fees, and why UAE pre-approval helps you negotiate.",
    keywords: [
      "mortgage pre-approval Dubai",
      "home loan pre approval UAE",
      "mortgage in principle Dubai",
      "UAE property finance pre approval",
    ],
    publishedAt: "2026-03-12",
    updatedAt: "2026-04-22",
    readMinutes: 6,
    category: "Home buying",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "Pre-approval (sometimes called approval in principle) is a bank’s conditional offer stating how much they are willing to lend you, subject to property valuation and final compliance. In Dubai’s competitive property market, it signals to sellers and agents that you are a serious, finance-ready buyer.",
      },
      {
        type: "h2",
        text: "What happens during pre-approval?",
      },
      {
        type: "p",
        text: "You submit income, identity, and liability documents. The bank runs a credit check, calculates your debt-burden ratio, and issues a letter with a maximum loan amount and indicative rate. The process is usually faster for salaried applicants — often within a few business days when paperwork is complete.",
      },
      {
        type: "h3",
        text: "How long is pre-approval valid?",
      },
      {
        type: "p",
        text: "Most UAE banks honour pre-approval for roughly 45 to 60 days, though policies differ. If your property search takes longer, you may need a refresh with updated statements. Plan viewings and negotiation within that window where possible.",
      },
      {
        type: "h2",
        text: "Documents checklist",
      },
      {
        type: "ul",
        items: [
          "Passport, visa, and Emirates ID copies",
          "Salary certificate and payslips (salaried) or audited accounts (self-employed)",
          "Six months of personal bank statements",
          "Existing loan and credit card statements",
          "Completed bank application form and consent for credit bureau check",
        ],
      },
      {
        type: "h2",
        text: "Pre-approval vs final approval",
      },
      {
        type: "p",
        text: "Pre-approval is not the final mortgage. Once you select a property, the bank values the unit, reviews the title, and issues final offer terms. If the price exceeds valuation or your circumstances change, the approved amount can shift. A broker helps you choose properties that align with your pre-approved range to avoid surprises.",
      },
      {
        type: "p",
        text: "Start your pre-approval with Money Matters — we coordinate submissions across lenders so you receive competitive options without repeated paperwork.",
      },
    ],
  },
  {
    slug: "first-time-buyer-mortgage-dubai-checklist",
    title: "First-Time Buyer Mortgage in Dubai: A Practical Checklist",
    excerpt:
      "New to UAE property finance? Follow this step-by-step checklist from budget and pre-approval to handover, fees, and moving in.",
    description:
      "First-time home buyer guide for Dubai mortgages — budgeting, choosing communities, pre-approval, SPA, DLD fees, insurance, and working with a UAE mortgage broker.",
    keywords: [
      "first time buyer mortgage Dubai",
      "first home loan UAE",
      "buy apartment Dubai mortgage",
      "Dubai property buyer guide",
    ],
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-01",
    readMinutes: 8,
    category: "Home buying",
    author: "Money Matters",
    blocks: [
      {
        type: "p",
        text: "Buying your first home in Dubai is exciting — and easier when you follow a clear sequence. Rushing into a viewing without knowing your budget or finance limits is the most common mistake we see. This checklist keeps first-time buyers on track from day one to key handover.",
      },
      {
        type: "h2",
        text: "Step 1: Define your budget (not just the listing price)",
      },
      {
        type: "p",
        text: "List your available deposit, expected mortgage amount, and all transaction costs. Include Dubai Land Department transfer fees, brokerage, bank fees, and moving expenses. Use our online EMI calculator to test monthly payments at different rates and tenures.",
      },
      {
        type: "h2",
        text: "Step 2: Get mortgage pre-approval",
      },
      {
        type: "p",
        text: "Pre-approval clarifies your maximum loan and strengthens your position when negotiating. Gather documents early — see our pre-approval guide for salaried and self-employed checklists.",
      },
      {
        type: "h2",
        text: "Step 3: Choose the right property type",
      },
      {
        type: "ul",
        items: [
          "Ready vs off-plan — finance rules and deposit sizes differ significantly",
          "Freehold communities approved by your chosen bank",
          "Service charges and community fees affect long-term affordability",
          "Future resale liquidity if you may relocate within a few years",
        ],
      },
      {
        type: "h2",
        text: "Step 4: Sign the SPA with finance conditions",
      },
      {
        type: "p",
        text: "Your Sale and Purchase Agreement should protect you if mortgage approval fails or valuation comes in low. Never waive finance clauses without professional advice. Your broker and agent should align timelines with bank processing.",
      },
      {
        type: "h2",
        text: "Step 5: Final approval, insurance & transfer",
      },
      {
        type: "p",
        text: "The bank completes valuation, issues final offer, and arranges life/property insurance as required. Funds disburse to the seller through the agreed mechanism; DLD registration transfers title to your name. Allow time for NOCs in certain developments.",
      },
      {
        type: "h2",
        text: "Step 6: Plan for life after handover",
      },
      {
        type: "p",
        text: "Set up auto-debits for EMI, keep an emergency fund separate from property costs, and review your rate periodically — many first-time buyers benefit from a buyout review after two to three years.",
      },
      {
        type: "p",
        text: "Money Matters guides first-time buyers across Dubai and the wider UAE every week. Book a consultation for a personalised roadmap — no obligation, no hidden broker fees to you.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}
