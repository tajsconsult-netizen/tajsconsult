import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "Shopify Store Setup", "Store Redesign", "Bug Fixing",
  "SEO Optimization", "Marketing Strategy", "Migration", "Other",
];
const budgetRanges = ["Under $200", "$200 – $500", "$500 – $1,000", "$1,000 – $5,000", "$5,000+"];

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    window.open(`https://wa.me/message/FC2KYVG4SEX3C1?text=${encodeURIComponent(`Hi! I'm ${form.name}. ${form.details}`)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-card rounded-xl border border-border p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="font-display font-bold text-2xl text-foreground mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">Ready to grow your eCommerce business? Let's talk about your project.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="your@email.com"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select a project type</option>
              {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
          <textarea
            rows={4}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Tell me about your project..."
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="flex-1 gap-2">Send Inquiry</Button>
          <Button asChild variant="outline" className="flex-1 gap-2">
            <a href="https://wa.me/message/FC2KYVG4SEX3C1" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp Instead
            </a>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactFormSection;
