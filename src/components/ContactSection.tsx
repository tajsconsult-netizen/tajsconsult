import { MessageCircle, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="bg-card rounded-xl border border-border p-6 md:p-8 text-center">
    <h2 className="font-display font-bold text-2xl text-foreground mb-2">Ready to Start Your Project?</h2>
    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
      Let's discuss your project requirements. I'm available for consultations and ready to help you succeed.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
        <MessageCircle size={18} /> Chat on WhatsApp
      </Button>
      <Button variant="outline" className="gap-2 px-8">
        <Mail size={18} /> Send Email
      </Button>
      <Button variant="outline" className="gap-2 px-8">
        <Send size={18} /> Telegram
      </Button>
    </div>
  </section>
);

export default ContactSection;
