export const NAV_ITEMS = [
  {
    label: "Services",
    dropdown: [
      { label: "360° Interior Tours",     desc: "Full property walkthrough, every room",         href: "/services#interior" },
      { label: "Aerial / Drone Tours",    desc: "Bird's-eye views of site & surroundings",       href: "/services#aerial" },
      { label: "Helicopter View",         desc: "High-altitude cinematic property coverage",      href: "/services#helicopter" },
      { label: "Google Street View",      desc: "Publish directly to Google Maps",               href: "/services#google" },
    ],
  },
  {
    label: "Industries",
    dropdown: [
      { label: "Real Estate",             desc: "Residential & commercial property tours",       href: "/industries#real-estate" },
      { label: "Architecture & Design",   desc: "Showcase spaces before they're built",          href: "/industries#architecture" },
      { label: "Hospitality",             desc: "Hotels, resorts & event venues",                href: "/industries#hospitality" },
      { label: "Construction",            desc: "Progress tracking & virtual inspections",       href: "/industries#construction" },
      { label: "Commercial Spaces",       desc: "Offices, retail & co-working",                  href: "/industries#commercial" },
    ],
  },
  {
    label: "Features",
    href: "/features",
  },
  { label: "Explore", href: "/explore" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "3×",     label: "More Qualified Inquiries" },
  { value: "48hrs",  label: "Tour Delivery" },
  { value: "60%",    label: "Faster Decision Making" },
  { value: "100%",   label: "DGCA Certified Operations" },
];

export const FEATURES = [
  { title: "Immersive 360° Tours",       desc: "Buyers walk every room before stepping foot inside. Full panoramic coverage, zero travel required." },
  { title: "Interactive Floor Plans",    desc: "Navigate rooms by tapping the floor plan directly. Spatial clarity built into every 360° tour." },
  { title: "VR Headset Ready",           desc: "Apple Vision Pro, Oculus, and any WebXR device supported. Step inside the property for real." },
  { title: "Visitor Analytics",          desc: "See which rooms hold attention, how long buyers stay, where they drop off. Actionable data." },
  { title: "Password Protected Shares",  desc: "Send private tours to qualified buyers only. Full control over access and visibility." },
  { title: "Google Street View",         desc: "Publish your tour directly to Google Maps. Your property shows up differently in search." },
  { title: "Aerial & Drone Coverage",    desc: "India's only 360° platform with integrated aerial and helicopter view capture." },
  { title: "Embed Anywhere",             desc: "One iframe. Works on any website, MLS portal, or property listing platform." },
  { title: "Hotspot Annotations",        desc: "Add interactive information points — dimensions, finishes, highlights — inside any scene." },
];

export const STEPS = [
  { step: "01", title: "Book",     desc: "Request your tour online. We confirm within 24 hours and schedule at your convenience." },
  { step: "02", title: "Capture",  desc: "Our team arrives fully equipped. All interior, aerial, and ground views collected in one visit." },
  { step: "03", title: "Deliver",  desc: "Your complete 360° tour goes live within 48 hours — one link, ready to share anywhere." },
  { step: "04", title: "Convert",  desc: "Track engagement, qualify buyers, close with confidence." },
];

export const VR_TOURS = [
  {
    id: "villa",
    name: "Sunset Villa",
    location: "Bandra West, Mumbai",
    size: "4 BHK · 3,200 sqft",
    tag: "PREMIUM",
    rooms: ["Living Room", "Master Bedroom", "Kitchen", "Terrace", "Garden"],
  },
  {
    id: "penthouse",
    name: "Sky Penthouse",
    location: "Koregaon Park, Pune",
    size: "3 BHK · 2,100 sqft",
    tag: "SEA VIEW",
    rooms: ["Lounge", "Bedroom 1", "Bedroom 2", "Balcony", "Study"],
  },
  {
    id: "studio",
    name: "Urban Studio",
    location: "Indiranagar, Bangalore",
    size: "1 BHK · 650 sqft",
    tag: "TRENDING",
    rooms: ["Living Area", "Bedroom", "Bathroom", "Balcony"],
  },
];

export const TESTIMONIALS = [
  { name: "Aryan Mehta",   role: "Senior Broker, Prestige Realty",  avatar: "AM", text: "Our listings get 3× more inquiries since using Saviour360. Buyers arrive pre-convinced — they've already walked the property virtually." },
  { name: "Priya Sharma",  role: "Founder, Skyline Properties",      avatar: "PS", text: "We cut physical visit time in half. International buyers now finalize decisions without a single flight." },
  { name: "Rahul Nair",    role: "Marketing Head, DLF Residential",  avatar: "RN", text: "The analytics alone justify the investment. We know which unit layouts buyers love before we even launch a phase." },
  { name: "Sunita Reddy",  role: "Director, Aparna Constructions",   avatar: "SR", text: "Saviour360 became our biggest advantage. We never stopped selling, even when sites were closed." },
  { name: "Vikram Bose",   role: "Partner, Omkar Realtors",          avatar: "VB", text: "The tour quality is immediately visible. Nothing else in India comes close for immersive property walkthroughs." },
];

export const INDUSTRIES = [
  {
    id: "real-estate",
    title: "Real Estate",
    stat: "3× more qualified buyer inquiries",
    desc: "Give every listing a virtual walkthrough. Buyers arrive ready to decide — not to explore.",
    icon: "🏛",
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    stat: "Sell spaces before construction completes",
    desc: "Walk clients through renders and finished spaces. Present design intent the way it was imagined.",
    icon: "◈",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    stat: "14% increase in direct bookings",
    desc: "Let guests tour rooms, event spaces, and facilities before they book. Reduce uncertainty, increase conversion.",
    icon: "◎",
  },
  {
    id: "construction",
    title: "Construction",
    stat: "Virtual inspections replace 80% of site visits",
    desc: "Document progress with dated 360° captures. Investors and stakeholders stay informed without being on site.",
    icon: "⊞",
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    stat: "60% faster lease decision cycles",
    desc: "Let tenants tour offices, retail units, and co-working spaces remotely. Qualify interest before showing.",
    icon: "⊕",
  },
  {
    id: "aerial",
    title: "Location & Aerial",
    stat: "2× longer viewer engagement",
    desc: "Show the neighbourhood, access roads, and surroundings from above. Buyers don't just buy rooms — they buy location.",
    icon: "◉",
  },
];

export const FAQS = [
  {
    q: "What equipment do buyers or agents need?",
    a: "Nothing. Anyone with a smartphone and a browser can view a Saviour360 tour. No app downloads, no VR headset required — though headsets are supported for an enhanced experience.",
  },
  {
    q: "How long does it take to deliver a completed tour?",
    a: "Standard interior 360° tours are delivered within 48 hours of your booking. Aerial and helicopter view packages have a 72-hour turnaround. Rush delivery is available on request.",
  },
  {
    q: "Can I embed the tour on my own website?",
    a: "Yes. Every tour comes with an embed code — one line of HTML. It works on any website platform including WordPress, Squarespace, Wix, or custom-built sites.",
  },
  {
    q: "Is aerial photography DGCA compliant?",
    a: "Yes. All drone and aerial operations are conducted under valid DGCA certification. We hold the necessary UAS Operator Permits for commercial aerial photography across India.",
  },
  {
    q: "Can tours be published to Google Maps?",
    a: "Yes. We are a Google Street View trusted publisher. Tours can be published directly to Google Maps, making your property visible in 360° directly from Google Search and Maps.",
  },
  {
    q: "What file formats do you deliver?",
    a: "You receive a shareable web link, an iframe embed code, a QR code, and a downloadable MP4 preview. All formats are included with every tour.",
  },
  {
    q: "Who handles the tour capture — do I need to provide a photographer?",
    a: "We handle everything end-to-end. Our team arrives with all equipment, covers the interior, exterior, and aerial views, and delivers the complete tour. No coordination needed on your side beyond access to the property.",
  },
  {
    q: "Can multiple properties be managed under one account?",
    a: "Yes. Developers and agencies can manage all their property tours under a single dashboard with organised projects, access controls, and analytics per property.",
  },
];

export const FOOTER_LINKS = [
  {
    section: "Services",
    links: [
      { label: "360° Interior Tours", href: "/services#interior" },
      { label: "Aerial / Drone",       href: "/services#aerial" },
      { label: "Helicopter View",       href: "/services#helicopter" },
      { label: "Google Street View",    href: "/services#google" },
    ],
  },
  {
    section: "Industries",
    links: [
      { label: "Real Estate",     href: "/industries#real-estate" },
      { label: "Architecture",    href: "/industries#architecture" },
      { label: "Hospitality",     href: "/industries#hospitality" },
      { label: "Construction",    href: "/industries#construction" },
      { label: "Commercial",      href: "/industries#commercial" },
    ],
  },
  {
    section: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Blog",     href: "/blog" },
      { label: "Contact",  href: "/contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Privacy Policy",    href: "#" },
      { label: "Terms of Service",  href: "#" },
      { label: "Cookie Policy",     href: "#" },
    ],
  },
];
