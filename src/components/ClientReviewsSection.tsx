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
    name: "James Patterson", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", time: "1 week ago", category: "Error Fixing", country: "United States",
    text: "My Shopify store had a critical checkout bug right before our biggest sale of the year. Responded within 20 minutes and diagnosed the issue immediately — it was a conflict between two apps causing the payment gateway to fail. He not only fixed the bug but also optimized the checkout flow, reducing load time by 40%. Absolute lifesaver!",
    price: "$100-$150", delivery: "Same day", helpful: 45,
  },
  {
    name: "Benjamin Clark", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", time: "4 months ago", category: "Error Fixing", country: "United Kingdom",
    text: "Had urgent issues before a massive flash sale event — the entire product page was throwing 500 errors. Jumped on a call within minutes, identified the root cause, and had everything restored and running perfectly in under two hours. Saved thousands in potential lost revenue!",
    price: "$100-$150", delivery: "Same day", helpful: 48,
  },
  {
    name: "Ryan O'Connor", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", time: "1 month ago", category: "Error Fixing", country: "Ireland",
    text: "I hired three different developers before finding him. Not only diagnosed the issue within an hour — a jQuery conflict with my custom slider — but also rewrote the problematic code from scratch. Zero errors, faster page loads, and a 25% increase in mobile conversions.",
    price: "$100-$200", delivery: "1 day", helpful: 40,
  },
  {
    name: "Emily Harris", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", time: "5 months ago", category: "Error Fixing", country: "Australia",
    text: "Quickly identified and fixed multiple checkout bugs that were affecting my store's conversion rate. Traced it to a theme customization conflict and rebuilt the logic properly. Conversion rate jumped 35% overnight!",
    price: "$100-$200", delivery: "1 day", helpful: 34,
  },
  {
    name: "Marcus Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", time: "2 days ago", category: "Error Fixing", country: "Singapore",
    text: "Our website completely crashed during a paid Instagram campaign driving 5,000+ visitors per hour. Got it back up in exactly 30 minutes. We recovered the campaign and made $12K that day!",
    price: "$120-$180", delivery: "Same day", helpful: 52,
  },
  {
    name: "Sophie Turner", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", time: "1 week ago", category: "Error Fixing", country: "Germany",
    text: "A critical app integration broke after an automatic update. Fixed the API connection, rebuilt the sync logic, and even optimized the code so it runs 3x faster now. Truly exceptional work!",
    price: "$100-$150", delivery: "1 day", helpful: 38,
  },
];

const ClientReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === "All" ? reviews : reviews.filter((r) => r.category === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section className="space-y-6">
      <h2 className="font-display font-bold text-2xl text-foreground text-center">Client Reviews ({filterTabs[0].count})</h2>

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

      {!showAll && filtered.length > 4 && (
        <div className="text-center">
          <Button variant="outline" onClick={() => setShowAll(true)}>
            Show More Reviews ({filtered.length - 4} remaining)
          </Button>
        </div>
      )}
    </section>
  );
};

export default ClientReviewsSection;
