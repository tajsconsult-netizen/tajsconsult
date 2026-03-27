import Navbar from "@/components/Navbar";
import StatsBanner from "@/components/StatsBanner";
import ProfileSidebar from "@/components/ProfileSidebar";
import AboutSection from "@/components/AboutSection";
import ShopifyPartnerSection from "@/components/ShopifyPartnerSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import PastProjectsSection from "@/components/PastProjectsSection";

import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StatsBanner />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-[340px] shrink-0">
            <ProfileSidebar />
          </div>

          {/* Main content */}
          <div className="flex-1 space-y-8">
            <AboutSection />
            <ShopifyPartnerSection />
            <TrustedBySection />
            <ServicesSection />
            <WhyTrustSection />
            <PastProjectsSection />
            <InstagramSection />
            <SuccessStoriesSection />
            <ClientReviewsSection />
            <FAQSection />
            <ContactFormSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2024 Tajs Consult. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
