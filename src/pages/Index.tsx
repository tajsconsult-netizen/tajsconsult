import Navbar from "@/components/Navbar";
import StatsBanner from "@/components/StatsBanner";
import ProfileSidebar from "@/components/ProfileSidebar";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

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
            <TrustBadges />
            <ServicesSection />
            <WhyTrustSection />
            <FAQSection />
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2024 Zetee Professional. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
