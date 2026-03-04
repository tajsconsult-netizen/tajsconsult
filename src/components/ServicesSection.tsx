import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    emoji: "🚀", title: "Shopify Store Setup",
    desc: "Complete store setup with theme customization, payment integration & launch-ready configuration",
    blurb: "🚀 Launch your dream store with a professional setup that converts visitors into customers from day one.",
    rating: 5, reviews: 142, price: "$350",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
  {
    emoji: "📦", title: "Build Dropshipping Store",
    desc: "Full dropshipping store with winning products, supplier integration & automation",
    blurb: "📦 Build a profitable dropshipping empire! I handle product research, supplier vetting & automated fulfillment.",
    rating: 5, reviews: 128, price: "$400",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
  },
  {
    emoji: "🔧", title: "Error & Bug Fixing",
    desc: "Quick fixes for broken code, theme errors, checkout issues & technical problems",
    blurb: "🔧 From RED errors to GREEN success! Fast diagnosis and resolution of any Shopify technical issues.",
    rating: 5, reviews: 156, price: "$80",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
  },
  {
    emoji: "📈", title: "Marketing Strategy",
    desc: "Complete marketing plan with ads strategy, funnel optimization & growth tactics",
    blurb: "📈 Scale your business with data-driven marketing! Custom strategy covering paid ads, email sequences & retargeting.",
    rating: 5, reviews: 205, price: "$300",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
  },
  {
    emoji: "🔍", title: "Product Research",
    desc: "Winning product discovery for Home Decor, Clothing & Pet Products niches",
    blurb: "🔍 Discover trending products in HOT niches: Home Decor 🏠, Fashion & Clothing 👗, Pet Products 🐶.",
    rating: 5, reviews: 98, price: "$150",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop",
  },
  {
    emoji: "🎯", title: "SEO Optimization",
    desc: "Complete SEO audit, on-page optimization, meta tags & ranking improvements",
    blurb: "🎯 Dominate Google rankings! Full SEO optimization including keyword research, meta optimization & speed improvements.",
    rating: 5, reviews: 134, price: "$200",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? services : services.slice(0, 6);

  return (
    <section id="my-services" className="space-y-6">
      <div className="text-center">
        <h2 className="font-display font-bold text-2xl text-foreground mb-2">My Services</h2>
        <p className="text-muted-foreground">Professional Shopify & eCommerce solutions to scale your business</p>
      </div>

      {/* Blurbs row */}
      <div className="grid md:grid-cols-3 gap-3">
        {services.slice(0, 3).map((s) => (
          <div key={s.title} className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">{s.blurb}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayed.map((s) => (
          <div key={s.title} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative h-40 overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <span className="absolute top-3 left-3 text-2xl">{s.emoji}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-foreground mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{s.desc}</p>
              <div className="flex items-center gap-1 mb-2">
                <Star size={14} className="text-star fill-current" />
                <span className="text-sm font-semibold text-foreground">{s.rating}</span>
                <span className="text-xs text-muted-foreground">({s.reviews})</span>
                <span className="text-xs text-muted-foreground ml-1">Includes consultation</span>
              </div>
              <span className="font-display font-bold text-primary">From {s.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* More blurbs */}
      <div className="grid md:grid-cols-3 gap-3">
        {services.slice(3, 6).map((s) => (
          <div key={s.title} className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">{s.blurb}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All Services (11 more)"}
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
