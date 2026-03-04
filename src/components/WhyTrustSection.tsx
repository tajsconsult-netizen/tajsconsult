import { Zap, Shield, HeadphonesIcon, Award, RefreshCw, UserCheck, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Turnaround", badge: "24-72 hrs", desc: "Most projects delivered in 24-72 hours. Urgent fixes same day." },
  { icon: Shield, title: "100% Money-Back Guarantee", badge: "7-day guarantee", desc: "Not satisfied? Full refund within 7 days. Zero risk." },
  { icon: HeadphonesIcon, title: "24/7 Support", badge: "< 1 hr response", desc: "I respond within 1 hour during business hours. Always available on WhatsApp." },
  { icon: RefreshCw, title: "Unlimited Revisions", badge: "Until perfect", desc: "I work until you're 100% happy. Your satisfaction is my priority." },
  { icon: TrendingUp, title: "Results-Driven", badge: "98% success rate", desc: "I focus on ROI, not just deliverables. Your success is my success." },
  { icon: UserCheck, title: "Personal Attention", badge: "1-on-1 service", desc: "Direct communication with me—no assistants, no outsourcing." },
];

const WhyTrustSection = () => (
  <section className="space-y-6">
    <div className="text-center">
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Why 376+ Clients Trust Me</h2>
      <p className="text-muted-foreground">Here's what makes working with me different</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
