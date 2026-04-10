import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "All Projects", count: 217 },
  { name: "Website Design", count: 20 },
  { name: "Shopify Store Setup", count: 18 },
  { name: "Dropshipping Store", count: 15 },
  { name: "SEO Optimization", count: 50 },
  { name: "Social Media Marketing", count: 25 },
  { name: "Marketing Strategy", count: 15 },
  { name: "Product Research", count: 12 },
  { name: "Social Media Shop", count: 12 },
];

const projects: Record<string, { title: string; desc: string; client: string; date: string; image: string; stats: { label: string; value: string }[] }[]> = {
  "Website Design": [
    { title: "Elite Fashion Boutique", desc: "Stunning high-end fashion boutique website with immersive product galleries and seamless checkout experience.", client: "Vanessa K.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", stats: [{ label: "Conversion rate", value: "4.2%" }, { label: "Launch revenue", value: "$85K" }] },
    { title: "Artisan Bakery Online", desc: "Warm and inviting bakery website with online ordering system and delivery scheduling integration.", client: "Marco S.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop", stats: [{ label: "Orders", value: "+200%" }, { label: "AOV", value: "$48" }] },
    { title: "Luxury Real Estate Portal", desc: "Premium real estate website featuring virtual tours, MLS integration, and lead capture forms.", client: "Jonathan R.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", stats: [{ label: "Leads", value: "+350%" }, { label: "Time on site", value: "+4min" }] },
  ],
  "Shopify Store Setup": [
    { title: "LuxeWear Fashion Empire", desc: "Premium fashion store with advanced filtering, wish lists, and VIP membership portal.", client: "Sarah M.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", stats: [{ label: "First month", value: "$95K" }, { label: "Conversion", value: "3.8%" }] },
    { title: "GreenLife Organics Hub", desc: "Organic products marketplace with subscription boxes and sustainability tracking.", client: "Michael T.", date: "Nov 2025", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop", stats: [{ label: "Subscriptions", value: "800+" }, { label: "Conversion", value: "4.5%" }] },
    { title: "TechHub Electronics Pro", desc: "Electronics superstore with warranty management and trade-in program.", client: "James K.", date: "Nov 2025", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", stats: [{ label: "Quarterly", value: "$150K" }, { label: "Trade-ins", value: "200+" }] },
  ],
  "Dropshipping Store": [
    { title: "TrendyPets Empire", desc: "Pet niche dropshipping with 500+ products and multi-supplier network.", client: "Emma K.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop", stats: [{ label: "Monthly", value: "$55K" }, { label: "Profit margin", value: "18%" }] },
    { title: "HomeStyle Global", desc: "Home decor dropshipping with US/EU warehouses for fast shipping.", client: "David L.", date: "Nov 2025", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", stats: [{ label: "Revenue", value: "$95K" }, { label: "Profit margin", value: "22%" }] },
    { title: "GadgetZone International", desc: "Tech gadgets with warranty program and premium support.", client: "Tom W.", date: "Nov 2025", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop", stats: [{ label: "Monthly", value: "$75K" }, { label: "Return rate", value: "<2%" }] },
  ],
  "SEO Optimization": [
    { title: "LuxeJewels SEO Domination", desc: "Complete SEO overhaul for luxury jewelry store achieving top rankings.", client: "Maria S.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", stats: [{ label: "Organic traffic", value: "+420%" }, { label: "Keywords ranked", value: "45" }] },
    { title: "TechGadget Search Authority", desc: "Technical SEO and content strategy for electronics retailer.", client: "Kevin M.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", stats: [{ label: "Traffic", value: "+280%" }, { label: "Keywords", value: "75" }] },
    { title: "Fashion Empire SEO", desc: "Enterprise-level SEO for fashion ecommerce with international targeting.", client: "Lauren T.", date: "Dec 2025", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", stats: [{ label: "Organic sales", value: "+310%" }, { label: "Keywords", value: "150+" }] },
  ],
  "Social Media Marketing": [
    { title: "Fashion Brand Viral Campaign", desc: "Multi-platform viral campaign achieving millions of impressions.", client: "Urban Edge", date: "Dec 2025", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", stats: [{ label: "Impressions", value: "12M" }, { label: "Followers", value: "+85K" }] },
    { title: "Beauty Influencer Strategy", desc: "Influencer partnership program with 50+ micro-influencers.", client: "Glow Cosmetics", date: "Dec 2025", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop", stats: [{ label: "UGC posts", value: "500+" }, { label: "Sales lift", value: "+180%" }] },
    { title: "Food Brand TikTok Growth", desc: "TikTok-first strategy turning a local food brand into a viral sensation.", client: "TastyBites", date: "Nov 2025", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop", stats: [{ label: "Views", value: "25M+" }, { label: "Revenue", value: "+340%" }] },
  ],
  "Marketing Strategy": [
    { title: "DTC Brand Launch Strategy", desc: "Go-to-market strategy for direct-to-consumer skincare brand.", client: "PureGlow", date: "Dec 2025", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop", stats: [{ label: "Launch sales", value: "$120K" }, { label: "ROAS", value: "4.5x" }] },
    { title: "Holiday Campaign Blueprint", desc: "Comprehensive BFCM and holiday season strategy.", client: "GiftHub", date: "Nov 2025", image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop", stats: [{ label: "BFCM revenue", value: "$250K" }, { label: "YoY growth", value: "+85%" }] },
    { title: "Subscription Growth Engine", desc: "Customer acquisition and retention strategy for subscription box.", client: "BoxJoy", date: "Nov 2025", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop", stats: [{ label: "Subscribers", value: "+1200" }, { label: "Churn", value: "-40%" }] },
  ],
  "Product Research": [
    { title: "Winning Products Discovery", desc: "Data-driven product research identifying 50+ high-potential products.", client: "DropKing", date: "Dec 2025", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", stats: [{ label: "Products found", value: "50+" }, { label: "Winner rate", value: "35%" }] },
    { title: "Niche Market Analysis", desc: "Deep-dive market analysis revealing untapped opportunities.", client: "WellNest", date: "Nov 2025", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", stats: [{ label: "Niches found", value: "12" }, { label: "TAM", value: "$2.8B" }] },
    { title: "Competitor Intelligence Report", desc: "Comprehensive competitor analysis with positioning recommendations.", client: "MarketPro", date: "Nov 2025", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", stats: [{ label: "Competitors", value: "25+" }, { label: "Gaps found", value: "8" }] },
  ],
  "Social Media Shop": [
    { title: "Instagram Shop Setup", desc: "Complete Instagram and Facebook shop integration.", client: "StyleVibe", date: "Dec 2025", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop", stats: [{ label: "Social sales", value: "+240%" }, { label: "Reach", value: "500K+" }] },
    { title: "TikTok Shop Integration", desc: "Full TikTok Shop setup with live shopping events.", client: "TrendSetters", date: "Nov 2025", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop", stats: [{ label: "Live sales", value: "$45K" }, { label: "Followers", value: "+120K" }] },
    { title: "Pinterest Shopping Feed", desc: "Pinterest shopping integration with rich pins.", client: "HomeDecorCo", date: "Nov 2025", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", stats: [{ label: "Pin clicks", value: "+380%" }, { label: "Revenue", value: "+$28K" }] },
  ],
};

const portfolioStats = [
  { value: "100+", label: "Happy Clients" },
  { value: "$8.5M+", label: "Revenue Generated" },
  { value: "5★", label: "Average Rating" },
  { value: "100%", label: "Success Rate" },
];

const PastProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const displayCategories = activeCategory === "All Projects"
    ? Object.keys(projects)
    : [activeCategory];

  return (
    <section id="past-projects" className="space-y-6">
      <div className="text-center">
        <h2 className="font-display font-bold text-2xl text-foreground mb-2">Past Projects Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of successful eCommerce transformations and see real results delivered worldwide
        </p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-xl border border-border p-6">
        {portfolioStats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-bold text-2xl text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
              activeCategory === cat.name
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/30"
            }`}
          >
            {cat.name}
            <span className="ml-1 opacity-70">{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Projects by category */}
      {displayCategories.map((catName) => {
        const catProjects = projects[catName];
        if (!catProjects) return null;
        const cat = categories.find((c) => c.name === catName);

        return (
          <div key={catName} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-foreground">{catName}</h3>
              <span className="text-sm text-muted-foreground">{cat?.count} projects</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {catProjects.map((p) => (
                <div key={p.title} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-md">{catName}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-foreground mb-1.5">{p.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.desc}</p>
                    <p className="text-xs text-muted-foreground mb-3">Client: {p.client} • {p.date}</p>
                    <div className="flex gap-4">
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <div className="font-display font-bold text-sm text-primary">{s.value}</div>
                          <div className="text-[11px] text-muted-foreground">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PastProjectsSection;
