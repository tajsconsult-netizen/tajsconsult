import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import workResults1 from "@/assets/work-results-1.jpg";
import workResults2 from "@/assets/work-results-2.jpg";
import workResults3 from "@/assets/work-results-3.jpg";
import workResults4 from "@/assets/work-results-4.jpg";
import workResults5 from "@/assets/work-results-5.jpg";
import workResults6 from "@/assets/work-results-6.jpg";

const images = [
  { src: workResults1, alt: "Sales analytics dashboard showing $5,226 total sales" },
  { src: workResults2, alt: "Shopify orders dashboard - Netgatenews store" },
  { src: workResults3, alt: "Shopify orders dashboard - fulfilled orders" },
  { src: workResults4, alt: "Marketing analytics with $38,200 total sales" },
  { src: workResults5, alt: "Facebook performance insights - 9.5K views" },
  { src: workResults6, alt: "Shopify mobile dashboard - Backrock store" },
];

const WorkResultsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-card rounded-xl border border-border p-6 md:p-8">
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Work Results</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Real results from clients I've worked with — sales dashboards, order fulfillments, and marketing performance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img) => (
          <button
            key={img.alt}
            onClick={() => setSelected(img.src)}
            className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-md group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-32 md:h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-2">
          {selected && (
            <img src={selected} alt="Work result preview" className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkResultsSection;
