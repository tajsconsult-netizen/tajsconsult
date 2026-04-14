import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import workResults1 from "@/assets/work-results-1.jpg";
import workResults2 from "@/assets/work-results-2.jpg";
import workResults3 from "@/assets/work-results-3.jpg";
import workResults4 from "@/assets/work-results-4.jpg";
import workResults5 from "@/assets/work-results-5.jpg";
import workResults6 from "@/assets/work-results-6.jpg";
import workVideo2 from "@/assets/work-results-video-2.mp4";
import workVideo3 from "@/assets/work-results-video-3.mp4";
import workVideo4 from "@/assets/work-results-video-4.mp4";
import workVideo5 from "@/assets/work-results-video-5.mp4";

const images = [
  { src: workResults1, alt: "Sales analytics dashboard showing $5,226 total sales" },
  { src: workResults2, alt: "Shopify orders dashboard - Netgatenews store" },
  { src: workResults3, alt: "Shopify orders dashboard - fulfilled orders" },
  { src: workResults4, alt: "Marketing analytics with $38,200 total sales" },
  { src: workResults5, alt: "Facebook performance insights - 9.5K views" },
  { src: workResults6, alt: "Shopify mobile dashboard - Backrock store" },
];

const videos = [
  { src: workVideo2, title: "Store performance overview" },
  { src: workVideo3, title: "Tajs Consult showcase" },
  { src: workVideo4, title: "Welcome to the Streets Hats" },
  { src: workVideo5, title: "Thrive Causemetics showcase" },
];

const WorkResultsSection = () => {
  const [selected, setSelected] = useState<{ type: "image" | "video"; src: string } | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allItems = [
    ...images.map((img) => ({ type: "image" as const, ...img })),
    ...videos.map((vid) => ({ type: "video" as const, src: vid.src, alt: vid.title })),
  ];

  const displayed = showAll ? allItems : allItems.slice(0, 3);

  return (
    <section className="bg-card rounded-xl border border-border p-6 md:p-8">
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Work Results</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Real results from clients I've worked with — sales dashboards, order fulfillments, and marketing performance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {displayed.map((item, i) =>
          item.type === "image" ? (
            <button
              key={i}
              onClick={() => setSelected({ type: "image", src: item.src })}
              className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-md group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-32 md:h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ) : (
            <button
              key={i}
              onClick={() => setSelected({ type: "video", src: item.src })}
              className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-md group relative"
            >
              <video
                src={item.src}
                muted
                playsInline
                className="w-full h-32 md:h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-foreground ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )
        )}
      </div>

      {allItems.length > 3 && (
        <div className="text-center mt-4">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View More"}
          </Button>
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-2">
          {selected?.type === "image" && (
            <img src={selected.src} alt="Work result preview" className="w-full rounded-lg" />
          )}
          {selected?.type === "video" && (
            <video src={selected.src} controls autoPlay className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkResultsSection;
