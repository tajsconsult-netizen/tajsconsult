import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const filterTabs = [
  { name: "All", count: 195 },
  { name: "Error Fixing", count: 45 },
  { name: "Shopify Store Setup", count: 27 },
  { name: "Dropshipping Build", count: 22 },
  { name: "SEO Optimization", count: 22 },
  { name: "Marketing Strategy", count: 22 },
  { name: "Product Research", count: 22 },
  { name: "TikTok Shop Setup", count: 18 },
  { name: "Custom Design", count: 17 },
];

const reviews = [
  {
    name: "Liam Harper", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop", time: "2 days ago", category: "Error Fixing", country: "United States",
    text: "My Shopify store had a critical checkout bug right before our biggest sale of the year. Responded within 20 minutes and diagnosed the issue immediately — it was a conflict between two apps causing the payment gateway to fail. He not only fixed the bug but also optimized the checkout flow, reducing load time by 40%. Absolute lifesaver!",
    price: "$100-$150", delivery: "Same day", helpful: 45,
  },
  {
    name: "Charlotte Evans", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop", time: "4 days ago", category: "Error Fixing", country: "United Kingdom",
    text: "Had urgent issues before a massive flash sale event — the entire product page was throwing 500 errors. Jumped on a call within minutes, identified the root cause, and had everything restored and running perfectly in under two hours. Saved thousands in potential lost revenue!",
    price: "$100-$150", delivery: "Same day", helpful: 48,
  },
  {
    name: "Noah Sullivan", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", time: "1 week ago", category: "Error Fixing", country: "Ireland",
    text: "I hired three different developers before finding him. Not only diagnosed the issue within an hour — a jQuery conflict with my custom slider — but also rewrote the problematic code from scratch. Zero errors, faster page loads, and a 25% increase in mobile conversions.",
    price: "$100-$200", delivery: "1 day", helpful: 40,
  },
  {
    name: "Isla Bennett", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", time: "2 weeks ago", category: "Shopify Store Setup", country: "Australia",
    text: "Built my entire Shopify store from the ground up. The design is stunning, the UX is flawless, and he integrated every app I needed seamlessly. Conversion rate jumped 35% within the first week of launch!",
    price: "$200-$350", delivery: "5 days", helpful: 56,
  },
  {
    name: "Mateo Rodriguez", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", time: "3 weeks ago", category: "Dropshipping Build", country: "Spain",
    text: "Set up my entire dropshipping operation — supplier connections, automated fulfillment, and a gorgeous storefront. Made my first $10K within 3 weeks of launching. His product research was spot on!",
    price: "$250-$400", delivery: "7 days", helpful: 62,
  },
  {
    name: "Ava Thornton", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop", time: "1 month ago", category: "SEO Optimization", country: "Canada",
    text: "Our organic traffic was stagnant for over a year. After his comprehensive SEO overhaul, we went from page 5 to page 1 for our top keywords. Traffic increased by 320% in just 3 months!",
    price: "$150-$250", delivery: "2 weeks", helpful: 44,
  },
  {
    name: "Oscar Nakamura", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", time: "1 month ago", category: "Marketing Strategy", country: "Japan",
    text: "Developed a full-scale marketing strategy that covered email, social, and paid ads. Our ROAS went from 1.5x to 4.8x within the first campaign cycle. His strategic thinking is next level.",
    price: "$300-$500", delivery: "10 days", helpful: 51,
  },
  {
    name: "Ella Richardson", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", time: "5 weeks ago", category: "TikTok Shop Setup", country: "Germany",
    text: "Set up our TikTok Shop and created a content strategy that got us 2M+ views in the first month. Sales from TikTok alone hit $28K. He truly understands the social commerce landscape!",
    price: "$200-$300", delivery: "4 days", helpful: 59,
  },
  {
    name: "Alexander Petrov", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop", time: "6 weeks ago", category: "Custom Design", country: "Russia",
    text: "Wanted a completely custom Shopify theme that matched our luxury brand identity. The result was beyond expectations — pixel-perfect, lightning fast, and our customers love the new shopping experience. Bounce rate dropped by 50%.",
    price: "$400-$600", delivery: "2 weeks", helpful: 47,
  },
  {
    name: "Zara Okafor", image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=100&h=100&fit=crop", time: "2 months ago", category: "Product Research", country: "Nigeria",
    text: "His product research identified 3 winning products that generated over $45K in the first month. Data-driven, thorough, and incredibly accurate. He doesn't just find products — he finds opportunities.",
    price: "$100-$200", delivery: "3 days", helpful: 53,
  },
  {
    name: "William Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", time: "2 months ago", category: "Shopify Store Setup", country: "Singapore",
    text: "Migrated our WooCommerce store to Shopify without any downtime or data loss. He handled everything — products, customers, orders, SEO redirects. The new store loads 3x faster and looks incredible.",
    price: "$250-$400", delivery: "8 days", helpful: 41,
  },
  {
    name: "Isabella Moretti", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop", time: "3 months ago", category: "SEO Optimization", country: "Italy",
    text: "Our eCommerce SEO was a mess — duplicate content, broken links, slow pages. He cleaned everything up and implemented a content strategy that tripled our organic revenue in 4 months.",
    price: "$150-$300", delivery: "2 weeks", helpful: 39,
  },
  {
    name: "James Adebayo", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop", time: "3 months ago", category: "Dropshipping Build", country: "South Africa",
    text: "Built a complete branded dropshipping store with custom packaging design and automated supplier management. The store looks like a premium brand. We're now doing $20K/month consistently.",
    price: "$300-$450", delivery: "10 days", helpful: 57,
  },
  {
    name: "Emma Johansson", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", time: "4 months ago", category: "Marketing Strategy", country: "Sweden",
    text: "Created a holiday campaign strategy that resulted in our best BFCM ever — $180K in revenue over the weekend. His email sequences and ad creatives were absolutely on point.",
    price: "$250-$400", delivery: "1 week", helpful: 64,
  },
  {
    name: "Rafael Santos", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop", time: "4 months ago", category: "Custom Design", country: "Brazil",
    text: "Redesigned our entire Shopify store with a focus on mobile-first experience. Mobile conversion rate increased by 85% and overall revenue grew by $40K/month. Worth every single dollar!",
    price: "$350-$500", delivery: "12 days", helpful: 46,
  },
];

const ClientReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === "All" ? reviews : reviews.filter((r) => r.category === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className="space-y-6">
      <h2 className="font-display font-bold text-2xl text-foreground text-center">Client Reviews</h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => { setActiveTab(tab.name); setShowAll(false); }}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
              activeTab === tab.name
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/30"
            }`}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {displayed.map((r, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-start gap-3 mb-3">
              <img src={r.image} alt={r.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-foreground">{r.name}</h4>
                  <span className="text-xs text-muted-foreground">{r.time}</span>
                </div>
                <div className="flex items-center gap-0.5 my-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-star fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-badge text-badge-foreground px-2 py-0.5 rounded">{r.category}</span>
                  <span>{r.country}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{r.text}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{r.price} • {r.delivery}</span>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <ThumbsUp size={12} /> Helpful ({r.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 3 && (
        <div className="text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `View More (${filtered.length - 3} remaining)`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default ClientReviewsSection;
