import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "Web Design & Landing Page",
  "Shopify Store Design",
  "Ecommerce Website Development",
  "Product Page Optimization",
  "Content Marketing",
  "TikTok Ads Manager",
  "+30 More",
];

const AboutSection = () => (
  <section id="about-me" className="bg-card rounded-xl border border-border p-6 md:p-8">
    <h2 className="font-display font-bold text-2xl text-foreground mb-4">About Me</h2>
    <p className="text-muted-foreground leading-relaxed mb-2">
      Hi, I'm <span className="font-semibold text-foreground">Tajs Consult</span>, based in West Africa, Nigeria. I'm a passionate eCommerce brands transformer and results-driven digital marketing strategist as well as certified full-stack website developer.
    </p>
    <p className="text-muted-foreground leading-relaxed mb-6">
      I deliver full digital solutions made to create sales, increase ROI, and drive lasting growth for online firms. I have expertise in Email Marketing, Social Media Marketing, SEO, SEM, and Shopify Website Development.
    </p>

    {/* Social buttons */}
    <div className="flex gap-3 mb-8">
      <Button asChild variant="outline" className="flex-1 gap-2">
        <a href="mailto:tajsconsult@gmail.com">
          <Mail size={18} /> Email
        </a>
      </Button>
      <Button asChild className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
        <a href="https://wa.me/message/ANVPLUVYIX2GH1" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </Button>
    </div>

    {/* Skills */}
    <h3 className="font-display font-semibold text-foreground mb-3">Skills</h3>
    <div className="flex flex-wrap gap-2 mb-8">
      {skills.map((s) => (
        <span key={s} className="bg-badge text-badge-foreground text-sm font-medium px-3 py-1.5 rounded-lg border border-border">
          {s}
        </span>
      ))}
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: "100+", label: "Projects Completed" },
        { value: "4+", label: "Years Experience" },
        { value: "60+", label: "Happy Clients" },
        { value: "98%", label: "Success Rate" },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display font-bold text-2xl text-foreground">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
