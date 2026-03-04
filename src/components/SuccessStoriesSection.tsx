import { Star } from "lucide-react";

const stories = [
  {
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "TechVault Solutions",
    platform: "Shopify Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "Glory transformed our struggling Shopify store into a revenue machine. Within 3 months, we saw a 340% increase in conversions. His attention to detail and deep understanding of eCommerce is unmatched. Highly recommend for any serious business owner!",
    stats: [
      { value: "+340%", label: "Conversion Rate" },
      { value: "$127K", label: "Revenue Growth" },
      { value: "2 weeks", label: "Delivery Time" },
    ],
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "BeautyGlow Cosmetics",
    platform: "Shopify + Klaviyo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "I've worked with many developers, but this is on another level. He doesn't just fix problems—he anticipates them. Our email marketing now generates 45% of our revenue thanks to his automation setup. Worth every penny!",
    stats: [
      { value: "45%", label: "Email Revenue" },
      { value: "$89K", label: "Monthly Sales" },
      { value: "< 1 hour", label: "Response Time" },
    ],
  },
  {
    name: "David Kim",
    role: "Store Owner",
    company: "HomeStyle Decor",
    platform: "Shopify + TikTok Shop",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    quote: "Helped me set up TikTok Shop integration and within the first month, I made $50K in sales! His knowledge of social commerce is incredible. He also fixed bugs that 3 other developers couldn't solve. Absolute game-changer for my business!",
    stats: [
      { value: "$50K", label: "TikTok Sales" },
      { value: "1,200%", label: "ROI" },
      { value: "3 days", label: "Setup Time" },
    ],
  },
];

const SuccessStoriesSection = () => (
  <section id="reviews" className="space-y-6">
    <div className="text-center">
      <p className="text-star text-sm font-medium mb-1">⭐ Featured Success Stories</p>
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Real Results From Real Clients</h2>
      <p className="text-muted-foreground">These aren't just testimonials—they're verified transformations with measurable growth.</p>
    </div>

    <div className="space-y-5">
      {stories.map((s) => (
        <div key={s.name} className="bg-card rounded-xl border border-border p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <img src={s.image} alt={s.name} className="w-14 h-14 rounded-full object-cover border-2 border-border" loading="lazy" />
            <div>
              <h4 className="font-display font-bold text-foreground">{s.name}</h4>
              <p className="text-sm text-muted-foreground">{s.role}</p>
              <p className="text-sm text-muted-foreground">{s.company}</p>
              <span className="inline-block mt-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">{s.platform}</span>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-star fill-current" />
              ))}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-5 italic">"{s.quote}"</p>

          <div className="grid grid-cols-3 gap-4 bg-muted/50 rounded-lg p-4">
            {s.stats.map((st) => (
              <div key={st.label} className="text-center">
                <div className="font-display font-bold text-lg text-primary">{st.value}</div>
                <div className="text-xs text-muted-foreground">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SuccessStoriesSection;
