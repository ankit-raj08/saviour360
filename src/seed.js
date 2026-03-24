require("dotenv").config();
const payload = require("payload");

const MONGODB_URI    = process.env.MONGODB_URI    || "mongodb://localhost/saviour360";
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || "seed-secret";

const PROJECTS = [
  { name:"The Nest",             location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/0635f123", badge:"Featured", badgeColor:"#1A50A0", accent:"#4A7FD4", showInHero:true,  showInLiveDemo:false, showInVRTours:false, showInExplore:true,  rooms:[{label:"Site Overview"},{label:"SG Highway"},{label:"Surroundings"}],           order:10 },
  { name:"The Linea",            location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/f3c98418", badge:null,        badgeColor:"",        accent:"#6A9FE8", showInHero:true,  showInLiveDemo:false, showInVRTours:false, showInExplore:true,  rooms:[{label:"West View"},{label:"Site Overview"},{label:"Location"}],                order:20 },
  { name:"Maple Vivanta",        location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/b05c6704", badge:null,        badgeColor:"",        accent:"#4A7FD4", showInHero:false, showInLiveDemo:true,  showInVRTours:true,  showInExplore:true,  rooms:[{label:"Site Overview"},{label:"Surroundings"},{label:"Airport View"},{label:"Township"},{label:"Roads"}], order:30 },
  { name:"Reva 80",              location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/bd4e7079", badge:null,        badgeColor:"",        accent:"#5B8FE0", showInHero:false, showInLiveDemo:true,  showInVRTours:false, showInExplore:true,  rooms:[], order:40 },
  { name:"The Verity Aerial",    location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/d40536d4", badge:null,        badgeColor:"",        accent:"#5B8FE0", showInHero:false, showInLiveDemo:true,  showInVRTours:false, showInExplore:true,  rooms:[], order:50 },
  { name:"Urbanest",             location:"Ahmedabad, Gujarat", category:"aerial",   tourUrl:"https://tours.savitarrealty.in/virtualtour/6ccd655c", badge:null,        badgeColor:"",        accent:"#5B8FE0", showInHero:false, showInLiveDemo:true,  showInVRTours:false, showInExplore:true,  rooms:[], order:60 },
  { name:"The Verity Interior",  location:"Ahmedabad, Gujarat", category:"interior", tourUrl:"https://tours.savitarrealty.in/virtualtour/feb88b0e", badge:"Premium",   badgeColor:"#1A50A0", accent:"#5B8FE0", showInHero:true,  showInLiveDemo:false, showInVRTours:false, showInExplore:true,  rooms:[{label:"Entrance"},{label:"Living Room"},{label:"Master Suite"}], order:70 },
  { name:"The Nest Interior",    location:"Ahmedabad, Gujarat", category:"interior", tourUrl:"https://tours.savitarrealty.in/virtualtour/d8a6b0b4", badge:null,        badgeColor:"",        accent:"#5B8FE0", showInHero:false, showInLiveDemo:true,  showInVRTours:true,  showInExplore:true,  rooms:[{label:"Living Room"},{label:"Master Bedroom"},{label:"Kitchen"},{label:"Study"},{label:"Balcony"}], order:80 },
  { name:"Eminence 96",          location:"Ahmedabad, Gujarat", category:"interior", tourUrl:"https://tours.savitarrealty.in/virtualtour/be0e0c66", badge:"New",       badgeColor:"#16a34a", accent:"#3A6FBF", showInHero:true,  showInLiveDemo:false, showInVRTours:false, showInExplore:true,  rooms:[{label:"Living Room"},{label:"Dining Area"},{label:"Balcony"}], order:90 },
  { name:"Reva by Kaavyaratna",  location:"Ahmedabad, Gujarat", category:"interior", tourUrl:"https://tours.savitarrealty.in/virtualtour/800b583a", badge:null,        badgeColor:"",        accent:"#6A9FE8", showInHero:false, showInLiveDemo:false, showInVRTours:true,  showInExplore:true,  rooms:[{label:"Entrance"},{label:"Living Area"},{label:"Bedroom 1"},{label:"Bedroom 2"},{label:"Terrace"}], order:100 },
];

const TESTIMONIALS = [
  { name:"Rahul Khanna",     role:"Director",             company:"Prestige Properties",   avatarInitials:"RK", quote:"Our inquiry quality changed overnight. Buyers who called had already walked every room — site visits converted at nearly double the rate.",                                          order:10 },
  { name:"Sneha Mehra",      role:"Senior Sales Manager", company:"Lodha Group",            avatarInitials:"SM", quote:"The aerial 360° tour for our township project removed every location objection. Buyers saw the connectivity and greenery for themselves before a single call.",              order:20 },
  { name:"Arjun Desai",      role:"Founder",              company:"Vaastu Interiors",       avatarInitials:"AD", quote:"My client approved a full redesign of their penthouse after one tour session — without a single physical site visit. The polygon hotspots on each finish were the deciding factor.", order:30 },
  { name:"Priya Nambiar",    role:"VP Marketing",         company:"Godrej Properties",      avatarInitials:"PN", quote:"We embedded the tours across our campaign landing pages. Dwell time increased by 3 minutes per session and lead-to-visit conversion improved measurably in two months.",        order:40 },
  { name:"Vikram Singhania", role:"MD",                   company:"Singhania Hospitality",  avatarInitials:"VS", quote:"Both our hotel and event venue now have full 360° walkthroughs on our website and Google listing. Direct bookings from the venue page are up 14% this quarter.",              order:50 },
];

const FAQS = [
  { question:"How long does a 360° tour take to produce?",          answer:"Most residential properties are delivered within 48 hours of the shoot. Large commercial spaces or multi-floor developments may take up to 72 hours.",                                                                order:10 },
  { question:"What equipment do you use for the shoot?",            answer:"We use professional-grade 360° cameras capable of up to 32MP panoramic capture. For aerial shots, we use licensed commercial drones operated by DGCA-certified pilots.",                                               order:20 },
  { question:"Do I need to install any software to view the tour?", answer:"No. Tours play directly in any modern web browser on desktop, tablet, or mobile — no app, plugin, or download required. They also work natively in VR headsets including Apple Vision Pro and Meta Quest.",            order:30 },
  { question:"Can I embed the tour on my own website?",             answer:"Yes. Every tour comes with a ready-made iframe embed code. Copy it, paste it into your website or CMS, and the tour renders responsively in any container.",                                                          order:40 },
  { question:"What is a Polygon Content Hub?",                      answer:"A clickable hotspot you draw around any object or surface inside the tour. Viewers click the polygon and see images, videos, spec sheets, or links you attach to it.",                                                 order:50 },
  { question:"Do you handle aerial drone shoots as well?",          answer:"Yes. We offer aerial 360° tours using licensed commercial drones flown by DGCA-certified pilots. Aerial tours show site location, surroundings, infrastructure, and access roads.",                                   order:60 },
  { question:"Can tours be password-protected?",                    answer:"Yes. Any tour can be set to private with a password. You share the link and password with pre-qualified buyers only. Full analytics remain available on private tours.",                                               order:70 },
  { question:"What analytics do I get with each tour?",             answer:"Per-room view duration, total and unique visit counts, entry source tracking, and engagement drop-off points. Reports are exportable per property.",                                                                   order:80 },
];

const HOME_FEATURES = [
  { icon:"⬡", title:"3D Dollhouse View",       description:"An isometric 3D model lets buyers see every floor and room simultaneously — full spatial context before navigating.",        order:10 },
  { icon:"⬔", title:"Polygon Content Hubs",     description:"Draw a polygon around any surface. Attach images, videos, spec sheets, or price lists. Buyers get detail without leaving.", order:20 },
  { icon:"◫", title:"Interactive Floor Plans",  description:"2D and 3D floor plans embedded inside the tour. Tap any room to jump directly to that viewpoint.",                           order:30 },
  { icon:"◈", title:"Magic Embed",              description:"One iframe embed code. Paste it into any website, portal, or blog. Auto-responsive across all screen sizes.",                order:40 },
  { icon:"◉", title:"Virtual Host",             description:"Add a pre-recorded video of yourself or an agent narrating the tour at key moments — even when you're unavailable.",         order:50 },
  { icon:"◎", title:"Visitor Analytics",        description:"Track which rooms get the most attention, average time per viewpoint, total views, and engagement drop-off per property.",   order:60 },
  { icon:"⬢", title:"High-Resolution Capture",  description:"Up to 32MP panoramas — no compression. Every surface, texture, and finish stays sharp when buyers zoom in.",                order:70 },
  { icon:"◷", title:"Password Protected Tours", description:"Share a private tour link with pre-qualified buyers or brokers only. No public indexing. Full analytics still available.",   order:80 },
  { icon:"◌", title:"VR Headset Ready",         description:"Every tour works natively in Apple Vision Pro, Meta Quest, and all WebXR-compatible headsets. No extra configuration.",     order:90 },
];

const PAGE_FEATURES = [
  { icon:"⬡", category:"Immersive",    title:"3D Dollhouse View",       headline:"See the whole property at once.",               desc:"An isometric 3D model lets viewers see every floor and room simultaneously.", points:[{text:"Full 3D model auto-generated from the 360° scan"},{text:"Navigate to any room from the dollhouse view"},{text:"Floor-by-floor isolation for multi-storey properties"},{text:"Rotation and zoom controls on all devices"}], stat:"Buyers spend 55% longer in tours with dollhouse enabled", showEmbed:false, embedSrc:"", order:10 },
  { icon:"⬔", category:"Interactive",  title:"Polygon Content Hubs",    headline:"Map any object. Add any content.",              desc:"Draw a polygon around any surface. That polygon becomes a clickable hotspot — attach images, videos, spec sheets, or links.", points:[{text:"Freehand polygon drawing around any object or area"},{text:"Attach images, videos, PDFs, or external links"},{text:"Ideal for showcasing finishes, fittings, and materials"},{text:"Up to 100% more clicks vs circular hotspots"}], stat:"Up to 100% more clicks vs standard circular hotspots", showEmbed:false, embedSrc:"", order:20 },
  { icon:"◫", category:"Navigation",   title:"Interactive Floor Plans",  headline:"Navigate by tapping the map.",                 desc:"2D and 3D floor plans embedded inside the tour. Viewers tap any room and jump directly to that viewpoint.", points:[{text:"2D and 3D floor plan integration"},{text:"Tap to navigate — jump to any room from the plan"},{text:"Real-time position indicator"},{text:"MLS-compatible format for portal submissions"}], stat:"Buyers spend 40% longer in tours with floor plan navigation", showEmbed:false, embedSrc:"", order:30 },
  { icon:"◈", category:"Distribution", title:"Magic Embed",              headline:"One line of code. Works everywhere.",           desc:"Every tour ships with an iframe embed code that works on any website or portal. Responsive on all screen sizes.", points:[{text:"Single iframe — paste into any website or CMS"},{text:"Auto-responsive — adapts to any container width"},{text:"Works on WordPress, Squarespace, Wix, or custom sites"},{text:"Compatible with Magicbricks, 99acres, and Housing.com"}], stat:"Works on any platform with zero technical knowledge", showEmbed:true, embedSrc:"https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true", order:40 },
  { icon:"◉", category:"Engagement",   title:"Virtual Host",             headline:"A guided tour, even when you are unavailable.", desc:"Add a pre-recorded video of yourself or a sales agent narrating the tour at key moments.", points:[{text:"Pre-recorded video overlaid at specific viewpoints"},{text:"Appears automatically or on user click"},{text:"Ideal for luxury properties and developer launches"},{text:"Builds trust — buyers hear from a real person"}], stat:"Tours with virtual hosts see 35% higher re-visit rates", showEmbed:false, embedSrc:"", order:50 },
  { icon:"◎", category:"Data",         title:"Visitor Analytics",        headline:"Know what buyers look at — and for how long.",  desc:"Track exactly which rooms receive the most attention, average time per viewpoint, total views, and engagement drop-off.", points:[{text:"Per-room view duration and engagement tracking"},{text:"Total views and unique visitor count"},{text:"Entry source tracking — which platform sent the visit"},{text:"Exportable reports per property"}], stat:"Identify your strongest rooms before the site visit", showEmbed:false, embedSrc:"", order:60 },
  { icon:"⬢", category:"Quality",      title:"High-Resolution Capture",  headline:"No compression. No compromise.",                desc:"Up to 32MP panoramas. Every surface, texture, and detail stays sharp when buyers zoom in on premium finishes.", points:[{text:"Up to 32MP resolution — no resizing or compression"},{text:"Sharp detail on luxury finishes, stone, and woodwork"},{text:"Consistent quality across all lighting conditions"},{text:"HDR processing for balanced exposures throughout"}], stat:"32MP maximum — higher than any standard competitor", showEmbed:false, embedSrc:"", order:70 },
  { icon:"◷", category:"Privacy",      title:"Password Protected Tours", headline:"Off-market listings stay off-market.",          desc:"Share a private tour link with a password to pre-qualified buyers only. No public indexing. Full analytics still available.", points:[{text:"Set a password on any tour — active immediately"},{text:"Used for off-market listings and pre-launch inventory"},{text:"Revoke access at any time"},{text:"Full analytics still available on private tours"}], stat:"Preferred by 40% of premium developers for pre-launch tours", showEmbed:false, embedSrc:"", order:80 },
];

const INDUSTRIES_DATA = [
  { slug:"real-estate",  eyebrow:"Industry 01", tag:"Most Popular", tagColor:"#1A50A0", title:"Real Estate",          subtitle:"Buyers arrive ready to decide — not to explore.",        desc:"360° virtual tours give residential and commercial property buyers a complete walkthrough before stepping foot on-site.",                                                  usecases:[{label:"Apartment listings"},{label:"Villa & bungalow showcases"},{label:"Off-plan and under-construction projects"},{label:"Premium leasing"},{label:"Builder floor presentations"}],                                   stat:"3×",   statLabel:"More qualified inquiries",       dark:false, order:10 },
  { slug:"architecture", eyebrow:"Industry 02", tag:null,           tagColor:"",        title:"Architecture & Design",subtitle:"Sell a vision, not just a render.",                      desc:"Present architectural proposals, interior design concepts, and completed spaces in a way no PDF or static render can.",                                                     usecases:[{label:"Interior design client presentations"},{label:"Architectural walkthroughs pre-construction"},{label:"Design approval workflows"},{label:"Portfolio showcase"},{label:"Show flats and model units"}],            stat:"2×",   statLabel:"Faster design approval cycles",  dark:true,  order:20 },
  { slug:"hospitality",  eyebrow:"Industry 03", tag:null,           tagColor:"",        title:"Hospitality",          subtitle:"Let guests tour before they book.",                       desc:"Hotels, resorts, and event venues that show the actual space see measurably higher booking conversion.",                                                                     usecases:[{label:"Hotel room and suite tours"},{label:"Event and banquet hall walkthroughs"},{label:"Resort and spa facility showcases"},{label:"Wedding venue presentations"},{label:"Restaurant ambience tours"}],               stat:"14%",  statLabel:"Increase in direct bookings",    dark:false, order:30 },
  { slug:"construction", eyebrow:"Industry 04", tag:null,           tagColor:"",        title:"Construction",         subtitle:"Investors stay informed without being on-site.",          desc:"Document construction progress with dated 360° captures. Stakeholders and investors see exactly where the project stands.",                                                usecases:[{label:"Monthly progress documentation"},{label:"Investor progress reporting"},{label:"Pre-handover walkthroughs"},{label:"Safety and compliance records"},{label:"Post-completion snag documentation"}],               stat:"80%",  statLabel:"Fewer unnecessary site visits",  dark:true,  order:40 },
  { slug:"commercial",   eyebrow:"Industry 05", tag:null,           tagColor:"",        title:"Commercial Spaces",    subtitle:"Qualify tenants before the first meeting.",               desc:"Office buildings, retail units, co-working spaces — let tenants remotely tour before committing to a physical visit.",                                                     usecases:[{label:"Office and co-working walkthroughs"},{label:"Retail unit presentations"},{label:"Industrial and warehouse tours"},{label:"Campus and business park showcases"},{label:"Pre-fit-out condition documentation"}],  stat:"60%",  statLabel:"Faster lease decision cycle",    dark:false, order:50 },
  { slug:"aerial",       eyebrow:"Industry 06", tag:null,           tagColor:"",        title:"Location & Aerial",    subtitle:"Buyers don't just buy rooms. They buy location.",         desc:"Aerial 360° views show the neighbourhood, access roads, green spaces, and surrounding infrastructure.",                                                                   usecases:[{label:"Township and plotted development overviews"},{label:"Neighbourhood and proximity mapping"},{label:"Infrastructure and connectivity showcases"},{label:"Industrial estate and logistics hub coverage"},{label:"Large campus and institution aerials"}], stat:"2×", statLabel:"Longer average viewer engagement", dark:true, order:60 },
];

async function upsert(collection, field, data) {
  const existing = await payload.find({ collection, where: { [field]: { equals: data[field] } }, limit: 1 });
  if (existing.docs.length > 0) { console.log(`  skip  [${collection}] "${data[field]}"`); return; }
  await payload.create({ collection, data });
  console.log(`  added [${collection}] "${data[field]}"`);
}

async function seed() {
  await payload.init({ secret: PAYLOAD_SECRET, mongoURL: MONGODB_URI, local: true });

  console.log("\n📦 Seeding Projects…");
  for (const p of PROJECTS) await upsert("projects", "name", { ...p, active: true });

  console.log("\n📦 Seeding Testimonials…");
  for (const t of TESTIMONIALS) await upsert("testimonials", "name", { ...t, active: true });

  console.log("\n📦 Seeding FAQs…");
  for (const f of FAQS) await upsert("faqs", "question", { ...f, active: true });

  console.log("\n📦 Seeding Home Features…");
  for (const f of HOME_FEATURES) await upsert("home-features", "title", { ...f, active: true });

  console.log("\n📦 Seeding Page Features…");
  for (const f of PAGE_FEATURES) await upsert("page-features", "title", { ...f, active: true });

  console.log("\n📦 Seeding Industries…");
  for (const ind of INDUSTRIES_DATA) await upsert("industries", "slug", { ...ind, active: true });

  console.log("\n✅ Seed complete!\n");
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
