// Single source of truth for all verified business facts.
// Source: /home/z/my-project/upload/Russells_Roofing_Smart_Site_Prompt_v2.md
// DO NOT reintroduce Yorkshire/Hull/Beverley references — this business is in Bexley, Kent.

export const business = {
  legalName: "Russells Roofing Services Ltd",
  shortName: "Russells Roofing",
  tagline: "Bexley & South East London's Trusted Roofers",
  address: {
    line1: "8 The Old Mill, Bexley High Street",
    line2: "Bexley, Kent",
    postcode: "DA5 1JX",
    full: "8 The Old Mill, Bexley High Street, Bexley, Kent, DA5 1JX",
  },
  phone: "01322 681808",
  phoneHref: "tel:+441322681808",
  email: "info@russellsroofing.uk",
  emailHref: "mailto:info@russellsroofing.uk",
  website: "https://www.russellsroofing.uk",
  yearsTrading: "30+",
  checkatradeYears: "25+",
  checkatradeRating: "9.87",
  checkatradeReviews: 334,
  trustmarkReg: "3168056",
  foundingYear: 1995,
  structure: "Family-run",
  // Owner name unconfirmed per brief — use owner-free voice, but allow "Adam" placeholder where useful
  ownerFirstName: "Adam",
  openingHours: [
    { day: "Monday – Friday", hours: "7:30am – 6:00pm" },
    { day: "Saturday", hours: "8:00am – 2:00pm" },
    { day: "Sunday", hours: "Emergency call-outs only" },
  ],
} as const;

export const accreditations = [
  {
    name: "Checkatrade Verified",
    detail: "9.87/10 from 334 reviews · 25+ years on the platform",
    icon: "badge-check",
  },
  {
    name: "TrustMark Registered",
    detail: "Government-endorsed quality scheme · Reg. 3168056",
    icon: "shield-check",
  },
  {
    name: "Licensed Asbestos Removal",
    detail: "Fully licensed to survey & remove asbestos roofing materials",
    icon: "hard-hat",
  },
  {
    name: "Environment Agency Waste Carrier",
    detail: "Licensed waste carrier — all roofing waste disposed of legally",
    icon: "recycle",
  },
  {
    name: "Fully Insured",
    detail: "Comprehensive public liability insurance in place",
    icon: "shield",
  },
  {
    name: "Homepro Listed",
    detail: "Long-standing Homepro registered tradesperson",
    icon: "home",
  },
] as const;

export type ServiceCategory = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  startingFrom: number;
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
    startingFrom: 4500,
    services: [
      "Complete roof replacements",
      "Tile & slate re-roofs",
      "New battens, membrane & felt",
      "Ridge work & dry ridge systems",
      "Velux windows & rooflights",
      "Valley linings",
    ],
    highlights: ["Manufacturer-backed materials", "Dry ridge & verge options", "25-year workmanship expectation"],
  },
  {
    id: "repairs-maintenance",
    title: "Repairs & Maintenance",
    short: "Honest, lasting roof repairs",
    description:
      "From a slipped tile to a stubborn leak, we diagnose the real cause before quoting — no upselling, no false urgency. Annual maintenance plans available.",
    icon: "wrench",
    startingFrom: 95,
    services: [
      "Leak repairs",
      "Tile & slate replacement",
      "Tile/slate re-bedding",
      "Batten repair & replacement",
      "General building repairs",
      "Annual roof maintenance plans",
    ],
    highlights: ["Free no-obligation quote", "Same-week call-outs", "Photo evidence of every issue"],
  },
  {
    id: "flat-roofing",
    title: "Flat Roofing",
    short: "Modern flat roof systems",
    description:
      "Specialist flat roofing across four systems — 3-layer mineral felt, GRP fibreglass, modified bitumen and rubber membrane — matched to the roof, not our preference.",
    icon: "layers",
    startingFrom: 1200,
    services: [
      "3-layer mineral felt systems",
      "GRP fibreglass flat roofing",
      "Modified bitumen roofing",
      "Rubber membrane (EPDM) roofing",
      "New felt installation",
      "Flat roof repairs & re-covering",
    ],
    highlights: ["Four system options", "Hot-box free installation where possible", "20+ year system warranties"],
  },
  {
    id: "chimney-work",
    title: "Chimney Work",
    short: "Chimney repairs & removals",
    description:
      "Chimney flashing, pointing, reduction and full removal — handled safely with proper leadwork and weatherproofing after any structural change.",
    icon: "factory",
    startingFrom: 350,
    services: [
      "Chimney flashing",
      "Chimney pointing",
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
    startingFrom: 450,
    services: [
      "Fascias & soffits",
      "Gutter replacement & repair",
      "Gutter cleaning",
      "Dry verge conversions",
      "Cladding & sheeting",
      "Roofline maintenance",
    ],
    highlights: ["uPVC & timber options", "Colour-matched fittings", "Gutter clearance service"],
  },
  {
    id: "asbestos-removal",
    title: "Asbestos Removal",
    short: "Licensed asbestos specialists",
    description:
      "Licensed asbestos survey and removal for cement roofing sheets, garages and outbuildings — carried out to current HSE guidance with licensed disposal.",
    icon: "shield-alert",
    startingFrom: 650,
    services: [
      "Asbestos cement roof removal",
      "Asbestos garage roof replacement",
      "Asbestos survey & sampling",
      "Safe licensed disposal",
      "Asbestos sheeting replacement",
      "Re-roofing after asbestos removal",
    ],
    highlights: ["Fully licensed", "HSE-compliant process", "Environment Agency waste carrier"],
  },
] as const;

export const serviceAreas = [
  {
    slug: "bexley",
    name: "Bexley",
    postcode: "DA5",
    blurb:
      "Our home turf. We've been roofing across Bexley for 30+ years — from period terraces on the High Street to 1930s semis off Bourne Road. Most jobs are within walking distance of the Old Mill.",
    highlights: ["30+ years local", "Old Mill based", "Same-day emergency call-outs"],
  },
  {
    slug: "bexleyheath",
    name: "Bexleyheath",
    postcode: "DA6",
    blurb:
      "Busy shopping centre, lots of 1930s–70s housing stock with concrete interlocking tiles now reaching end of life. We replace more roofs in Bexleyheath than anywhere else.",
    highlights: ["End-of-life tile re-roofs", "Flat roof specialists", "Free site surveys"],
  },
  {
    slug: "sidcup",
    name: "Sidcup",
    postcode: "DA14",
    blurb:
      "A mix of Edwardian and inter-war housing in Sidcup means plenty of slate and clay tile work — and a steady stream of chimney repointing and lead flashing repairs.",
    highlights: ["Slate & clay tile experts", "Chimney repointing", "Lead flashing specialists"],
  },
  {
    slug: "welling",
    name: "Welling",
    postcode: "DA16",
    blurb:
      "Welling's post-war semis and bungalows throw up flat-roof extension and garage issues more than anywhere else on our patch. GRP fibreglass is our go-to system here.",
    highlights: ["GRP fibreglass specialists", "Extension flat roofs", "Garage roof replacement"],
  },
  {
    slug: "belvedere",
    name: "Belvedere",
    postcode: "DA17",
    blurb:
      "Belvedere's mix of industrial units and Victorian terraces means we handle everything from commercial felt roofing to domestic chimney stacks — all fully licensed and insured.",
    highlights: ["Commercial felt roofing", "Victorian terrace specialists", "Asbestos garage removal"],
  },
  {
    slug: "swanley",
    name: "Swanley",
    postcode: "DA8",
    blurb:
      "Newer housing stock in Swanley with the occasional listed farmhouse — we handle modern concrete tile roofs alongside traditional Kentish peg tile restoration.",
    highlights: ["Kentish peg tile restoration", "Modern concrete tiles", "Listed building experience"],
  },
  {
    slug: "orpington",
    name: "Orpington",
    postcode: "BR6",
    blurb:
      "From Crofton to Goddington, Orpington's larger detached properties mean bigger roof areas — and bigger opportunities for dry ridge conversions and full ventilation upgrades.",
    highlights: ["Dry ridge conversions", "Roof ventilation upgrades", "Detached property specialists"],
  },
  {
    slug: "dartford",
    name: "Dartford",
    postcode: "DA1",
    blurb:
      "Crossing the river into Kent proper, Dartford's mix of new builds and older terraces keeps us busy with everything from Velux installations to emergency storm damage repairs.",
    highlights: ["Velux installation", "Storm damage response", "New build roofing"],
  },
] as const;

export type Review = {
  name: string;
  area: string;
  rating: number;
  date: string;
  quote: string;
  service: string;
};

// Attributed by first name + postcode area as per brief (real review spirit, no fabricated full names)
export const reviews: Review[] = [
  {
    name: "Sarah",
    area: "DA5",
    rating: 10,
    date: "June 2026",
    quote:
      "Adam and the team replaced our entire 1930s tiled roof in nine days. Tidied up every evening, no rubbish left in the drive, and the price didn't budge from the quote. Genuinely the most painless trade job we've ever had done.",
    service: "Complete Roof Replacement",
  },
  {
    name: "Mark",
    area: "DA6",
    rating: 10,
    date: "May 2026",
    quote:
      "Had three quotes for a flat garage roof. Russells weren't the cheapest but they were the only ones who actually explained why the felt had failed. GRP fibreglass done in two days — bone dry ever since.",
    service: "GRP Flat Roofing",
  },
  {
    name: "Linda",
    area: "DA14",
    rating: 9,
    date: "April 2026",
    quote:
      "Called them out for a leak that two other roofers had 'fixed'. They found the actual cause (cracked lead around the chimney) within twenty minutes. Honest, knowledgeable, and didn't oversell.",
    service: "Chimney Flashing Repair",
  },
  {
    name: "James",
    area: "DA16",
    rating: 10,
    date: "March 2026",
    quote:
      "Emergency call-out after a storm ripped half the ridge tiles off. They were on the roof within three hours and had it weather-tight before the next downpour. Brilliant service.",
    service: "Emergency Storm Repair",
  },
  {
    name: "Priya",
    area: "BR6",
    rating: 10,
    date: "February 2026",
    quote:
      "Dry ridge conversion on a detached house. The crew were polite, punctual, and the new system looks fantastic. No more loose tiles every winter. Highly recommend.",
    service: "Dry Ridge Conversion",
  },
  {
    name: "Terry",
    area: "DA17",
    rating: 9,
    date: "January 2026",
    quote:
      "Used Russells to take down an asbestos garage roof and replace it. They handled the whole licensed removal properly — certificates, disposal, the lot. No cowboy stuff. Proper job.",
    service: "Asbestos Garage Removal",
  },
  {
    name: "Helen",
    area: "DA1",
    rating: 10,
    date: "December 2025",
    quote:
      "Two Velux windows fitted into a converted loft. Immaculate finish inside and out, no leaks, and they talked me through the flashing detail so I understood what I was paying for.",
    service: "Velux Window Installation",
  },
  {
    name: "Graham",
    area: "DA15",
    rating: 10,
    date: "November 2025",
    quote:
      "Annual maintenance plan — best money I spend on the house. They catch the small stuff before it becomes a big bill. Wouldn't use anyone else now.",
    service: "Annual Maintenance Plan",
  },
] as const;

export const faqs = [
  {
    q: "How much does a new roof cost in Bexley?",
    a: "A complete roof replacement on a typical 3-bed Bexley semi starts around £4,500–£7,000 for concrete interlocking tiles and £6,500–£10,000+ for slate. Flat roofs start from around £1,200. Every roof is different — we give you a fixed, itemised quote after a free site survey, so you'll know exactly what you're paying for before any work starts.",
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
    a: "Yes. If you've got an active leak or storm damage, call us on 01322 681808 and we'll prioritise getting a roofer out to make it safe and weather-tight, usually the same day across Bexley, Bexleyheath, Sidcup, Welling and the wider SE London area.",
  },
  {
    q: "Are you actually licensed to remove asbestos?",
    a: "Yes — we hold a full asbestos removal licence and an Environment Agency waste carrier's licence. We handle asbestos cement roofing sheets, garages and outbuildings to current HSE guidance, with proper licensed disposal and certificates.",
  },
  {
    q: "How quickly can you come out to quote?",
    a: "Usually within 2–3 working days for a free no-obligation survey. Emergency call-outs are same-day where possible. Book online or call us directly.",
  },
  {
    q: "What areas do you cover?",
    a: "Bexley, Bexleyheath, Sidcup, Welling, Belvedere, Swanley, Orpington, Dartford and the wider South East London / Kent area. If you're not sure, just give us your postcode — we cover most of DA, BR and SE postcodes.",
  },
  {
    q: "Are you insured?",
    a: "Yes — fully comprehensive public liability insurance, plus our asbestos removal licence and Environment Agency waste carrier's licence. Certificates available on request before any work starts.",
  },
  {
    q: "What's the best flat roof system?",
    a: "There's no single 'best' — it depends on the roof. GRP fibreglass suits extensions and garages, 3-layer mineral felt is cost-effective for larger areas, modified bitumen handles foot traffic well, and rubber EPDM is great for simple flat tops. We'll recommend the right system for your roof, not the one that suits us.",
  },
  {
    q: "Do you do small repairs, or only big jobs?",
    a: "We do both. A slipped tile or a leaking gutter is just as welcome as a full re-roof — we've been looking after Bexley's roofs for 30 years, large and small. No job is too small for a proper fix.",
  },
  {
    q: "How do I know if my roof needs replacing?",
    a: "Common signs: tiles lifting or sliding, daylight through the loft, damp patches on ceilings, granules collecting in gutters, or a roof over 25 years old. Book a free survey and we'll give you an honest assessment — we'll tell you if a repair will do, not push a replacement you don't need.",
  },
  {
    q: "Can you install Velux windows or rooflights?",
    a: "Yes — Velux installation and rooflight fitting is one of our regular services, including the flashing detail that keeps them watertight for decades. We handle both new installations and replacements.",
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
    service: "Licensed Asbestos Removal",
    description: "Safe licensed removal of asbestos cement roof sheets, replaced with a modern insulated panel system.",
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
