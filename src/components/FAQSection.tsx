import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take to set up a Shopify store?", a: "Typically 3-7 business days depending on complexity. Simple stores can be ready in 24-48 hours." },
  { q: "Do you offer ongoing support after the project?", a: "Yes! All projects include 30 days of free support. Extended support plans are available." },
  { q: "Can you help with an existing store?", a: "Absolutely. I offer store audits, redesigns, optimization, and bug fixes for existing stores." },
  { q: "What payment methods do you accept?", a: "I accept PayPal, credit/debit cards, bank transfers, and crypto payments." },
  { q: "Do you offer refunds?", a: "Yes, I offer a 7-day money-back guarantee if you're not satisfied with the work." },
];

const FAQSection = () => (
  <section id="faq" className="bg-card rounded-xl border border-border p-6 md:p-8">
    <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">Frequently Asked Questions</h2>
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
