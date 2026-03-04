import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take to build a Shopify store?", a: "Typically 3-7 business days depending on complexity. Simple stores can be ready in 24-48 hours. Complex custom builds with advanced features may take 2-3 weeks." },
  { q: "Do you offer revisions?", a: "Yes! All projects include unlimited revisions until you're 100% satisfied. I work closely with you to ensure everything meets your vision." },
  { q: "Can you migrate my store from another platform?", a: "Absolutely. I specialize in migrating stores from WooCommerce, Wix, Squarespace, Magento, and other platforms to Shopify with zero data loss." },
  { q: "Do you provide post-launch support?", a: "Yes, all projects include 30 days of free post-launch support. Extended support plans are available for ongoing maintenance and optimization." },
  { q: "What is your refund policy?", a: "I offer a 7-day money-back guarantee. If you're not satisfied with the work, you'll receive a full refund—no questions asked." },
  { q: "How do we communicate during the project?", a: "I'm available on WhatsApp, email, and Zoom for video calls. I provide regular updates and am responsive within 1 hour during business hours." },
];

const FAQSection = () => (
  <section id="faq" className="bg-card rounded-xl border border-border p-6 md:p-8">
    <div className="text-center mb-6">
      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Frequently Asked Questions</h2>
      <p className="text-muted-foreground">Everything you need to know before getting started</p>
    </div>
    <Accordion type="single" collapsible className="max-w-2xl mx-auto">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left font-medium text-foreground">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FAQSection;
