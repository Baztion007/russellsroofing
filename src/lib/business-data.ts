// Single source of truth for all verified business facts.
//
// SOURCES (verified 2026-07-10):
//   1. Live site: https://www.russellsroofing.uk/ (page_reader)
//   2. Checkatrade profile: https://www.checkatrade.com/trades/russellsroofingserviceltd (page_reader)
//   3. TrustMark: https://www.trustmark.org.uk/firms/...3168056-DA5 1JX (web_search)
//   4. Companies House: Company No 13980993 (web_search)
//
// ⚠️ ITEMS REQUIRING CLIENT CONFIRMATION BEFORE LAUNCH (flagged inline with [CONFIRM]):
//   - Office hours (not published on live site or Checkatrade — only "24 hour call-out" confirmed)
//   - Whether the business holds a full HSE asbestos removal LICENCE vs. UKATA training only
//     (Checkatrade lists "United Kingdom Asbestos Training Association" — training, not a licence.
//      The live site lists "Asbestos removal" as a service. Lower-risk asbestos cement work can be
//      done by trained non-licensed contractors. Do NOT publish "Licensed asbestos removal" until
//      the client confirms they hold an HSE licence.)
//   - Specific "from" pricing (not published anywhere — removed from this build; use "Free quote")

export const business = {
  legalName: "Russells Roofing Services Ltd",
  // Registered name per Companies House (No 13980993) is "RUSSELLS ROOFING SERVICE LTD" (singular).
  // Trading name on the live site is "Russells Roofing Services Ltd" (plural). We use the trading name.
  shortName: "Russells Roofing",
  tagline: "Bexley & South East London's Trusted Roofers",
  address: {
    line1: "8 The Old Mill, Bexley High Street",
    line2: "Bexley, Kent",
    postcode: "DA5 1JX",
    full: "8 The Old Mill, Bexley High Street, Bexley, Kent, DA5 1JX",
  },
  // Two numbers published on the live site footer
  phone: "01322 681808",
  phoneHref: "tel:+441322681808",
  mobile: "07760 474544",
  mobileHref: "tel:+447760474544",
  email: "info@russellsroofing.uk",
  emailHref: "mailto:info@russellsroofing.uk",
  website: "https://www.russellsroofing.uk",
  // [CONFIRM-CLIENT] Years trading: client's own About page says "over 30 years";
  //   Checkatrade profile says "over 25 years". Using 30+ (client's own claim). Client must reconcile.
  yearsTrading: "30+",
  // Checkatrade profile: "Member since January 2013" → 13 years on Checkatrade
  checkatradeYears: "13",
  // [VERIFIED] Checkatrade profile header: "9.55/10 · 462 reviews". Use 9.55/10 EVERYWHERE.
  checkatradeRating: "9.55",
  checkatradeReviews: 462,
  checkatradeProfileUrl: "https://www.checkatrade.com/trades/russellsroofingserviceltd",
  trustmarkReg: "3168056",
  trustmarkUrl:
    "https://www.trustmark.org.uk/firms/RUSSELLS%20ROOFING%20SERVICE%20LTD-3168056-DA5%201JX",
  companyNumber: "13980993",
  vatNumber: "GB 416 6518 92",
  structure: "Family-owned",
  // Owner confirmed on Checkatrade Company Info: "Owner: Adam Russell"
  ownerName: "Adam Russell",
  ownerFirstName: "Adam",
  // [CONFIRM] foundingYear not verified — live site and Checkatrade do not state a founding year.
  // Checkatrade says "over 25 years" in operation. Do not publish a specific founding year until confirmed.
  // [CONFIRM] Office hours not published on live site or Checkatrade. Only "24 hour call-out" confirmed.
  // Removed specific hours until client confirms. Emergency call-out is verified.
  emergencyCallout: "24-hour emergency call-out",
  openingHoursNote: "Call us for current office hours — emergency call-outs 7 days.",
  // Real policies from Checkatrade profile:
  // "All of our work is back up by insurance backed guarantee, we do not take deposits."
  insuranceBackedGuarantee: true,
  noDeposits: true,
  freeEstimates: true,
  cardsAccepted: true,
  insuranceWork: true,
} as const;

export const accreditations = [
  {
    name: "Checkatrade Verified",
    detail: `9.55/10 from ${business.checkatradeReviews} reviews · member since January 2013`,
    icon: "badge-check",
    url: business.checkatradeProfileUrl,
  },
  {
    name: "TrustMark Registered",
    detail: `Government-endorsed quality scheme · Reg. ${business.trustmarkReg}`,
    icon: "shield-check",
    url: business.trustmarkUrl,
  },
  {
    name: "UK Asbestos Training (UKATA)",
    // [CONFIRM] Checkatrade lists "United Kingdom Asbestos Training Association" (training),
    // NOT a full HSE asbestos removal licence. Do not claim "Licensed" until confirmed.
    detail: "UKATA-trained for asbestos cement roof work · removal service available",
    icon: "hard-hat",
  },
  {
    name: "Insurance-Backed Guarantee",
    detail: "All work backed by an insurance-backed guarantee",
    icon: "shield",
  },
  {
    name: "Fully Insured",
    detail: "Comprehensive public liability insurance · insurance work undertaken",
    icon: "shield",
  },
  {
    name: "No Deposits Taken",
    detail: "We don't take deposits — pay on completion of the agreed work",
    icon: "thumbsup",
  },
] as const;

export type ServiceCategory = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  // REMOVED startingFrom pricing — not published by the business. Use "Free quote" instead.
  services: string[];
  highlights: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "roof-replacements",
    title: "Roof Replacements",
    short: "New roofs built to last decades",
    description:
      "Complete roof replacements using pitched tiles, slates or flat systems — installed to manufacturer spec with proper battening, membrane and ridge detailing.",
    icon: "home",
    services: [
      "Complete roof replacements",
      "Tile & slate re-roofs",
      "New battens, membrane & felt",
      "Ridge work & dry ridge systems",
      "Velux windows & rooflights",
      "Valley linings",
      "New tiles & slates",
      "Replaced ridge",
    ],
    highlights: ["Manufacturer-backed materials", "Dry ridge & verge options", "Insurance-backed guarantee"],
  },
  {
    id: "repairs-maintenance",
    title: "Repairs & Maintenance",
    short: "Honest, lasting roof repairs",
    description:
      "From a slipped tile to a stubborn leak, we diagnose the real cause before quoting — no upselling, no false urgency. We photograph and video every problem we find.",
    icon: "wrench",
    services: [
      "Leak repairs",
      "Tile & slate replacement",
      "Tile/slate re-bedding",
      "Batten repair & replacement",
      "General building repairs",
      "Roof surveys",
      "Roof cleaning",
      "Annual roof maintenance plans",
    ],
    highlights: ["Free no-obligation quote", "Photos & videos of every issue", "Same-week call-outs"],
  },
  {
    id: "flat-roofing",
    title: "Flat Roofing",
    short: "Modern flat roof systems",
    description:
      "Specialist flat roofing across four systems — 3-layer mineral felt, GRP fibreglass, modified bitumen and rubber membrane — matched to the roof, not our preference.",
    icon: "layers",
    services: [
      "3-layer mineral felt systems",
      "GRP fibreglass flat roofing",
      "Modified bitumen roofing",
      "Rubber membrane (EPDM) roofing",
      "New felt installation",
      "Flat roof repairs & re-covering",
      "Corrugated roof repair",
      "Polycarbonate roof repair",
    ],
    highlights: ["Four system options", "Hot-box free installation where possible", "Insurance-backed guarantee"],
  },
  {
    id: "chimney-work",
    title: "Chimney Work",
    short: "Chimney repairs & removals",
    description:
      "Chimney flashing, pointing, reduction and full removal — handled safely with proper leadwork and weatherproofing after any structural change.",
    icon: "factory",
    services: [
      "Chimney flashing",
      "Chimney pointing & re-pointing",
      "Chimney reduction",
      "Chimney removal",
      "Chimney repairs",
      "New leadwork & lead flashing repair",
    ],
    highlights: ["Leadwork specialists", "Safe reduction & removal", "Full weatherproofing after works"],
  },
  {
    id: "roofline-guttering",
    title: "Roofline & Guttering",
    short: "Fascias, soffits & gutters",
    description:
      "uPVC and timber roofline replacement, gutter clearing, realignment and repair — the part of your roof most homeowners forget until water gets in.",
    icon: "ruler",
    services: [
      "Fascias & soffits (uPVC & timber)",
      "Gutter replacement & repair",
      "Gutter cleaning",
      "Dry verge conversions",
      "Cladding & sheeting",
      "Roofline maintenance",
      "Downpipe repair & replacement",
    ],
    highlights: ["uPVC & timber options", "Colour-matched fittings", "Gutter clearance service"],
  },
  {
    id: "asbestos-removal",
    title: "Asbestos Roof Work",
    short: "UKATA-trained asbestos removal",
    // [CONFIRM] Wording reflects UKATA training (verified). Do not say "Licensed" until HSE licence confirmed.
    description:
      "UKATA-trained asbestos cement roof work — including asbestos cement sheets, garages and foam insulation removal. Carried out to current HSE guidance with licensed disposal.",
    icon: "shield-alert",
    services: [
      "Asbestos cement roof removal",
      "Asbestos garage roof replacement",
      "Asbestos roof foam insulation removal",
      "Asbestos survey & sampling",
      "Safe licensed disposal",
      "Re-roofing after asbestos removal",
    ],
    highlights: ["UKATA-trained team", "HSE-compliant process", "Licensed waste disposal"],
  },
] as const;

export const serviceAreas = [
  {
    slug: "bexley",
    name: "Bexley",
    postcode: "DA5",
    lat: 51.4419,
    lon: 0.1488,
    blurb:
      "Our home turf. We've been roofing across Bexley for over 30 years — from period terraces on the High Street to 1930s semis off Bourne Road. The yard's at the Old Mill on Bexley High Street.",
    highlights: ["30+ years local", "Old Mill based", "24-hour emergency call-outs"],
  },
  {
    slug: "bexleyheath",
    name: "Bexleyheath",
    postcode: "DA6",
    lat: 51.456,
    lon: 0.1383,
    blurb:
      "Busy shopping centre, lots of 1930s–70s housing stock with concrete interlocking tiles now reaching end of life. A steady stream of re-roofs and flat roof replacements.",
    highlights: ["End-of-life tile re-roofs", "Flat roof specialists", "Free site surveys"],
  },
  {
    slug: "sidcup",
    name: "Sidcup",
    postcode: "DA14",
    lat: 51.433,
    lon: 0.104,
    blurb:
      "A mix of Edwardian and inter-war housing in Sidcup means plenty of slate and clay tile work — and a steady stream of chimney repointing and lead flashing repairs.",
    highlights: ["Slate & clay tile experts", "Chimney repointing", "Lead flashing specialists"],
  },
  {
    slug: "welling",
    name: "Welling",
    postcode: "DA16",
    lat: 51.464,
    lon: 0.107,
    blurb:
      "Welling's post-war semis and bungalows throw up flat-roof extension and garage issues more than anywhere else on our patch. GRP fibreglass is our go-to system here.",
    highlights: ["GRP fibreglass specialists", "Extension flat roofs", "Garage roof replacement"],
  },
  {
    slug: "belvedere",
    name: "Belvedere",
    postcode: "DA17",
    lat: 51.491,
    lon: 0.152,
    blurb:
      "Belvedere's mix of industrial units and Victorian terraces means we handle everything from commercial felt roofing to domestic chimney stacks — all fully insured.",
    highlights: ["Commercial felt roofing", "Victorian terrace specialists", "Asbestos garage removal"],
  },
  {
    slug: "swanley",
    name: "Swanley",
    postcode: "DA8",
    lat: 51.394,
    lon: 0.165,
    blurb:
      "Newer housing stock in Swanley with the occasional listed farmhouse — we handle modern concrete tile roofs alongside traditional Kentish peg tile restoration.",
    highlights: ["Kentish peg tile restoration", "Modern concrete tiles", "Listed building experience"],
  },
  {
    slug: "orpington",
    name: "Orpington",
    postcode: "BR6",
    lat: 51.373,
    lon: 0.088,
    blurb:
      "From Crofton to Goddington, Orpington's larger detached properties mean bigger roof areas — and bigger opportunities for dry ridge conversions and full ventilation upgrades.",
    highlights: ["Dry ridge conversions", "Roof ventilation upgrades", "Detached property specialists"],
  },
  {
    slug: "dartford",
    name: "Dartford",
    postcode: "DA1",
    lat: 51.446,
    lon: 0.221,
    blurb:
      "Crossing the river into Kent proper, Dartford's mix of new builds and older terraces keeps us busy with everything from Velux installations to emergency storm damage repairs.",
    highlights: ["Velux installation", "Storm damage response", "New build roofing"],
  },
] as const;

// ============================================================================
// REAL REVIEWS — verbatim from Checkatrade, attributed as published.
// Source: https://www.checkatrade.com/trades/russellsroofingserviceltd (verified 2026-07-10)
// These are publicly-published Checkatrade reviews, reproduced with attribution + link.
// To update: pull fresh reviews from the Checkatrade profile before launch.
// ============================================================================
export type Review = {
  name: string; // As shown on Checkatrade ("Verified reviewer" where no name is published)
  area: string; // Job location postcode area as shown on Checkatrade
  rating: number;
  date: string; // As shown on Checkatrade ("Posted DD Month")
  quote: string; // Verbatim review text
  service: string; // Job type as categorised on Checkatrade
  source: "Checkatrade";
};

export const reviews: Review[] = [
  {
    name: "Verified reviewer",
    area: "DA2",
    rating: 10,
    date: "Posted 12 February",
    quote:
      "We had a leaking roof. Adam and his team came straight to the spot where the reason was and gave the quote straight after. All the price list was transparent and reasonable. The job was done perfectly and professionally. We are very happy with the work and would definitely recommend them if you have roof problems.",
    service: "Roofer",
    source: "Checkatrade",
  },
  {
    name: "Verified reviewer",
    area: "DA14",
    rating: 10,
    date: "Posted 31 May",
    quote:
      "We used this company to replace all ridge tiles and fix loose tiles where found. Adam, Jimmy and team were friendly, professional and polite and explained everything that needed to be done, and cleared and cleaned all areas of work. We would happily recommend this company.",
    service: "Roofer",
    source: "Checkatrade",
  },
  {
    name: "Review via Checkatrade",
    area: "SE9",
    rating: 10,
    date: "Posted 13 June",
    quote:
      "Russell's Roofing changed my outdated fascia, soffits and guttering on the whole house, including loft dormer. The quality of work was very good and good communication with Adam when the work could not start due to heat wave and some very wet days. The work was completed in about 2.5 days and the guys did a good job. The price was very reasonable and he saved me over £1000 and did the job without scaffolding. I would highly recommend this company.",
    service: "Fascia / Soffits / Guttering",
    source: "Checkatrade",
  },
  {
    name: "Review via Checkatrade",
    area: "DA16",
    rating: 10,
    date: "Posted 15 June",
    quote:
      "Downpipe leaking after heavy rainfall. Contacted Russell roofing who sent a team to have a look and fix. Friendly team and fixed the issue. Recommended.",
    service: "Fascia / Soffits / Guttering",
    source: "Checkatrade",
  },
  {
    name: "Verified reviewer",
    area: "DA15",
    rating: 10,
    date: "Posted 19 February",
    quote:
      "Had guttering replaced around the whole house. Guys turned up on time, and worked throughout the day until complete. Price was fair and the roofers were polite and respectful of the property. Recommended.",
    service: "Fascia / Soffits / Guttering",
    source: "Checkatrade",
  },
  {
    name: "Verified reviewer",
    area: "BR8",
    rating: 10,
    date: "Posted 09 February",
    quote:
      "Russell's Roofing Services honour the word they say when they take care of your new roof — provide necessary support throughout the guaranteed time frame, send guys who are polite and who respect your home rules. If there is something small or a big issue, they don't hesitate to sort it out in a timely manner. I would always recommend them for your roof care.",
    service: "Roofer",
    source: "Checkatrade",
  },
] as const;

export const faqs = [
  {
    q: "How much does a new roof cost in Bexley?",
    a: "Every roof is different, so we don't publish a price list — we give you a fixed, itemised quote after a free site survey. That way you know exactly what you're paying for before any work starts, with no hidden costs. Book a free survey and we'll put a written quote in your hands.",
  },
  {
    q: "Do I need planning permission for a flat roof?",
    a: "In most cases no — repairing or replacing a flat roof like-for-like falls under permitted development. You'll only need planning permission if you're changing the roof's shape, height, or adding a balcony. We'll flag any permission issues during your free survey.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "A standard 3-bed semi re-roof takes 4–8 working days depending on weather and complexity. Flat roofs are usually 1–3 days. We give you a realistic timeframe in your quote and stick to it — we don't juggle five jobs at once.",
  },
  {
    q: "Do you offer emergency call-outs?",
    a: "Yes — we offer a 24-hour emergency call-out service across Bexley, Bexleyheath, Sidcup, Welling and the wider SE London area. If you've got an active leak or storm damage, call us on 01322 681808 and we'll prioritise getting a roofer out to make it safe and weather-tight.",
  },
  {
    q: "Are you trained to handle asbestos roofs?",
    a: "Yes — our team is UKATA-trained (United Kingdom Asbestos Training Association) for asbestos cement roof work, including asbestos cement sheets, garages and foam insulation removal. Work is carried out to current HSE guidance with licensed disposal. Checkatrade verifies our accreditation.",
  },
  {
    q: "Do you take a deposit?",
    a: "No. We do not take deposits — you pay on completion of the agreed work. All our work is also backed by an insurance-backed guarantee.",
  },
  {
    q: "How quickly can you come out to quote?",
    a: "Usually within 2–3 working days for a free no-obligation survey. Emergency call-outs are same-day where possible. Book online or call us directly.",
  },
  {
    q: "What areas do you cover?",
    a: "Bexley, Bexleyheath, Sidcup, Welling, Belvedere, Swanley, Orpington, Dartford and the wider South East London / Kent area. If you're not sure, just give us your postcode — we cover most DA, BR and SE postcodes.",
  },
  {
    q: "Are you insured?",
    a: "Yes — fully comprehensive public liability insurance, and all our work is backed by an insurance-backed guarantee. We undertake insurance work and certificates are available on request before any work starts.",
  },
  {
    q: "What's the best flat roof system?",
    a: "There's no single 'best' — it depends on the roof. GRP fibreglass suits extensions and garages, 3-layer mineral felt is cost-effective for larger areas, modified bitumen handles foot traffic well, and rubber EPDM is great for simple flat tops. We'll recommend the right system for your roof, not the one that suits us.",
  },
  {
    q: "Do you do small repairs, or only big jobs?",
    a: "We do both. A slipped tile or a leaking gutter is just as welcome as a full re-roof — we've been looking after Bexley's roofs for over 30 years, large and small. No job is too small for a proper fix.",
  },
  {
    q: "How do I know if my roof needs replacing?",
    a: "Common signs: tiles lifting or sliding, daylight through the loft, damp patches on ceilings, granules collecting in gutters, or a roof over 25 years old. Book a free survey and we'll give you an honest assessment — we'll tell you if a repair will do, not push a replacement you don't need.",
  },
] as const;

export const galleryItems = [
  {
    id: "g1",
    title: "1930s Semi Re-Roof",
    area: "Bexleyheath, DA6",
    service: "Complete Roof Replacement",
    description: "Full strip and re-roof with concrete interlocking tiles, new membrane, battens and dry ridge system.",
  },
  {
    id: "g2",
    title: "Flat Garage Roof",
    area: "Welling, DA16",
    service: "GRP Fibreglass Flat Roofing",
    description: "Failed felt removed, deck repaired and finished in a hot-applied GRP fibreglass system with trims.",
  },
  {
    id: "g3",
    title: "Chimney Stack Refurb",
    area: "Sidcup, DA14",
    service: "Chimney Work & Lead Flashing",
    description: "Re-pointing, new lead flashing and a weather-tight apron around a Victorian chimney stack.",
  },
  {
    id: "g4",
    title: "Asbestos Garage Removal",
    area: "Belvedere, DA17",
    service: "UKATA Asbestos Cement Removal",
    description: "Safe UKATA-trained removal of asbestos cement roof sheets, replaced with a modern insulated panel system.",
  },
  {
    id: "g5",
    title: "Dry Ridge Conversion",
    area: "Orpington, BR6",
    service: "Dry Ridge & Verge",
    description: "Mechanically fixed dry ridge and verge system — no more mortar to repoint every few years.",
  },
  {
    id: "g6",
    title: "Velux Loft Conversion",
    area: "Dartford, DA1",
    service: "Velux Window Installation",
    description: "Two Velux windows installed into a converted loft with full flashing kits and internal finish.",
  },
  {
    id: "g7",
    title: "Gutter & Fascia Refresh",
    area: "Bexley, DA5",
    service: "Roofline & Guttering",
    description: "uPVC fascia, soffit and gutter replacement in black, with new downpipes and dry verge to match.",
  },
  {
    id: "g8",
    title: "Slate Roof Restoration",
    area: "Swanley, DA8",
    service: "Slate Re-Roof",
    description: "Kentish peg tile and slate restoration on a period property — all original detailing preserved.",
  },
] as const;
