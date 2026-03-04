import { Zap, Shield, HeadphonesIcon, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    badge: "24-72 hrs",
    desc: "Most projects delivered in 24-72 hours. Urgent fixes same day.",
  },
  {
    icon: Shield,
    title: "100% Money-Back Guarantee",
    badge: "7-day guarantee",
    desc: "Not satisfied? Full refund within 7 days. Zero risk.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    badge: "24/7",
    desc: "Direct communication throughout the project. No middlemen.",
  },
  {
    icon: Award,
    title: "Expert-Level Quality",
    badge: "Top 1%",
    desc: "Certified Shopify partner delivering enterprise-grade solutions.",
  },
];

const WhyTrustSection = () => (
  <section className="space-y-6">
    <div className="text-center">
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Why 376+ Clients Trust Me</h2>
      <p className="text-muted-foreground">Here's what makes working with me different</p>
    </div>

    <div className="grid sm:grid-cols-2 gap-5">
      {reasons.map((r) => (
        <div key={r.title} className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <r.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">{r.title}</h3>
              <span className="text-xs font-medium text-primary">{r.badge}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{r.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyTrustSection;
