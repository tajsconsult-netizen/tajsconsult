import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stories = [
  {
    name: "Ethan Brooks",
    role: "Founder & CEO",
    company: "NovaTech Gear",
    platform: "Shopify Plus",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    quote: "Glory transformed our struggling Shopify store into a revenue machine. Within 3 months, we saw a 340% increase in conversions. His attention to detail and deep understanding of eCommerce is unmatched. Highly recommend for any serious business owner!",
    stats: [
      { value: "+340%", label: "Conversion Rate" },
      { value: "$127K", label: "Revenue Growth" },
      { value: "2 weeks", label: "Delivery Time" },
    ],
  },
  {
    name: "Olivia Grant",
    role: "Marketing Director",
    company: "Lumiere Beauty",
    platform: "Shopify + Klaviyo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    quote: "I've worked with many developers, but this is on another level. He doesn't just fix problems—he anticipates them. Our email marketing now generates 45% of our revenue thanks to his automation setup. Worth every penny!",
    stats: [
      { value: "45%", label: "Email Revenue" },
      { value: "$89K", label: "Monthly Sales" },
      { value: "< 1 hour", label: "Response Time" },
    ],
  },
  {
    name: "Nathan Rivera",
    role: "Store Owner",
    company: "UrbanNest Living",
    platform: "Shopify + TikTok Shop",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Helped me set up TikTok Shop integration and within the first month, I made $50K in sales! His knowledge of social commerce is incredible. He also fixed bugs that 3 other developers couldn't solve. Absolute game-changer for my business!",
    stats: [
      { value: "$50K", label: "TikTok Sales" },
      { value: "1,200%", label: "ROI" },
      { value: "3 days", label: "Setup Time" },
    ],
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder",
    company: "Zenith Wellness",
    platform: "Shopify + Mailchimp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    quote: "Our online store was barely making $5K/month. After Glory revamped the entire UX and set up targeted email flows, we hit $42K in month two. The ROI has been absolutely insane. Can't recommend him enough!",
    stats: [
      { value: "+740%", label: "Revenue Increase" },
      { value: "$42K", label: "Monthly Revenue" },
      { value: "10 days", label: "Turnaround" },
    ],
  },
  {
    name: "Lucas Wright",
    role: "Operations Manager",
    company: "PeakFit Athletics",
    platform: "Shopify + Google Ads",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop",
    quote: "Glory rebuilt our product pages and optimized our Google Shopping feed. Our ROAS went from 1.8x to 5.2x in just 6 weeks. He understands both the technical and marketing sides perfectly.",
    stats: [
      { value: "5.2x", label: "ROAS" },
      { value: "+210%", label: "Sales Growth" },
      { value: "6 weeks", label: "Results Time" },
    ],
  },
  {
    name: "Aisha Johnson",
    role: "Brand Owner",
    company: "Velvet Rose Apparel",
    platform: "Shopify + Instagram",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop",
    quote: "From store design to social media integration, Glory handled everything flawlessly. Our Instagram shop now drives 60% of our total revenue. He's my go-to for anything eCommerce!",
    stats: [
      { value: "60%", label: "Social Revenue" },
      { value: "$68K", label: "Monthly Sales" },
      { value: "< 2 hours", label: "Response Time" },
    ],
  },
  {
    name: "Daniel Foster",
    role: "Founder",
    company: "CrateBox Co.",
    platform: "Shopify + ReCharge",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "Our subscription box business was losing subscribers fast. Glory redesigned the entire flow, implemented ReCharge properly, and our churn dropped by 55%. He saved our business, plain and simple.",
    stats: [
      { value: "-55%", label: "Churn Rate" },
      { value: "+900", label: "New Subscribers" },
      { value: "12 days", label: "Delivery" },
    ],
  },
  {
    name: "Sophie Müller",
    role: "Head of Digital",
    company: "Alpine Luxe",
    platform: "Shopify Plus + Gorgias",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    quote: "We needed a developer who could handle Shopify Plus at scale. Glory migrated our entire store, set up Gorgias for support, and reduced page load time by 60%. Our conversion rate doubled overnight.",
    stats: [
      { value: "+100%", label: "Conversions" },
      { value: "-60%", label: "Load Time" },
      { value: "3 weeks", label: "Migration" },
    ],
  },
  {
    name: "Carlos Mendez",
    role: "CEO",
    company: "Sabor Fresh Foods",
    platform: "Shopify + Meta Ads",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    quote: "Glory set up our entire Shopify store from scratch and launched our first Meta ad campaign. We went from $0 to $35K in our first month. His strategic approach to eCommerce is second to none!",
    stats: [
      { value: "$35K", label: "First Month" },
      { value: "3.8x", label: "ROAS" },
      { value: "5 days", label: "Store Setup" },
    ],
  },
  {
    name: "Hannah Lee",
    role: "Creative Director",
    company: "Moonstone Jewelry",
    platform: "Shopify + Pinterest",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    quote: "Glory's Pinterest strategy brought in 40K new visitors in the first month. Combined with his stunning store redesign, our sales increased by 280%. He truly understands luxury brand positioning online.",
    stats: [
      { value: "+280%", label: "Sales Increase" },
      { value: "40K", label: "New Visitors" },
      { value: "8 days", label: "Turnaround" },
    ],
  },
  {
    name: "Jake Morrison",
    role: "Store Owner",
    company: "TrailBound Outdoors",
    platform: "Shopify + SEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "Our organic traffic was basically zero. Glory did a full SEO overhaul — technical fixes, content strategy, the works. Six months later, we rank on page 1 for 30+ keywords and organic drives 70% of our sales.",
    stats: [
      { value: "30+", label: "Page 1 Keywords" },
      { value: "+520%", label: "Organic Traffic" },
      { value: "70%", label: "Organic Sales" },
    ],
  },
  {
    name: "Amara Osei",
    role: "Founder",
    company: "Glow Theory Skincare",
    platform: "Shopify + Influencers",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=100&h=100&fit=crop",
    quote: "Glory built our Shopify store and connected us with an influencer marketing strategy that went viral. We sold out our entire first collection in 48 hours. His work speaks for itself!",
    stats: [
      { value: "48hrs", label: "Sold Out" },
      { value: "$92K", label: "Launch Revenue" },
      { value: "2M+", label: "Impressions" },
    ],
  },
  {
    name: "Ryan O'Brien",
    role: "Operations Lead",
    company: "QuickShip Logistics",
    platform: "Shopify + ShipStation",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    quote: "Our fulfillment was a nightmare before Glory stepped in. He integrated ShipStation, automated our workflows, and reduced shipping errors by 90%. We now process 500+ orders daily without breaking a sweat.",
    stats: [
      { value: "-90%", label: "Shipping Errors" },
      { value: "500+", label: "Daily Orders" },
      { value: "4 days", label: "Setup Time" },
    ],
  },
  {
    name: "Mia Tanaka",
    role: "Brand Manager",
    company: "Kitsune Streetwear",
    platform: "Shopify + TikTok",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "Glory helped us tap into the TikTok audience perfectly. Our store went from unknown to trending in weeks. His creative approach to product pages and social commerce integration is unreal.",
    stats: [
      { value: "5M+", label: "TikTok Views" },
      { value: "+450%", label: "Revenue Growth" },
      { value: "2 weeks", label: "Launch Time" },
    ],
  },
  {
    name: "Thomas Eriksson",
    role: "Co-Founder",
    company: "Nordic Essentials",
    platform: "Shopify + Subscription",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
    quote: "We came to Glory with just an idea for a subscription-based essentials brand. He built the entire store, set up the subscription model, and even helped with our launch strategy. We hit 1,000 subscribers in month one!",
    stats: [
      { value: "1,000", label: "Month 1 Subs" },
      { value: "$75K", label: "MRR" },
      { value: "18 days", label: "Full Build" },
    ],
  },
];

const SuccessStoriesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? stories : stories.slice(0, 3);

  return (
    <section id="reviews" className="space-y-6">
      <div className="text-center">
        <p className="text-star text-sm font-medium mb-1">⭐ Featured Success Stories</p>
        <h2 className="font-display font-bold text-2xl text-foreground mb-2">Real Results From Real Clients</h2>
        <p className="text-muted-foreground">These aren't just testimonials—they're verified transformations with measurable growth.</p>
      </div>

      <div className="space-y-5">
        {displayed.map((s) => (
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

      <div className="text-center">
        <Button variant="outline" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `View More (${stories.length - 3} more)`}
        </Button>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
