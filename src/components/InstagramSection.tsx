import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop", likes: 342, comments: 28, caption: "🚀 Just launched another Shopify store — $12K in first-week sales!" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", likes: 518, comments: 45, caption: "Behind the scenes: Building a custom Shopify theme from scratch 🎨" },
  { image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop", likes: 276, comments: 19, caption: "Client success story: 300% revenue increase in 90 days 📈" },
  { image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=400&fit=crop", likes: 431, comments: 37, caption: "SEO optimization results — Page 1 rankings in just 6 weeks 🏆" },
  { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", likes: 389, comments: 31, caption: "Email marketing flow setup that generated $45K in passive revenue 💰" },
  { image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=400&fit=crop", likes: 294, comments: 22, caption: "Another happy client — full brand redesign + Shopify migration ✨" },
];

const InstagramSection = () => (
  <section className="space-y-6">
    <div className="text-center">
      <h2 className="font-display font-bold text-2xl text-foreground mb-1">Instagram Portfolio</h2>
      <a href="https://www.instagram.com/zetee_pro/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-sm hover:underline">
        @zetee_pro
      </a>
      <p className="text-sm text-muted-foreground mt-1">Daily project updates • Behind-the-scenes • Client success stories</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {posts.map((p, i) => (
        <a
          key={i}
          href="https://www.instagram.com/zetee_pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group rounded-xl overflow-hidden aspect-square"
        >
          <img src={p.image} alt={p.caption} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="flex items-center gap-1"><Heart size={14} /> {p.likes}</span>
              <span className="flex items-center gap-1"><MessageCircle size={14} /> {p.comments}</span>
            </div>
            <p className="text-white text-xs text-center line-clamp-2">{p.caption}</p>
          </div>
        </a>
      ))}
    </div>

    <div className="text-center">
      <Button asChild variant="outline" className="gap-2">
        <a href="https://www.instagram.com/zetee_pro/" target="_blank" rel="noopener noreferrer">
          Follow @zetee_pro for Daily Updates
        </a>
      </Button>
    </div>
  </section>
);

export default InstagramSection;
