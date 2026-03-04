import { CheckCircle, ShieldCheck, Star, Zap, Users } from "lucide-react";

const ShopifyPartnerSection = () => (
  <div className="bg-card rounded-xl border border-border p-6 md:p-8">
    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      {/* Shopify Logo */}
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
        <span className="text-primary font-display font-bold text-lg">S</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle size={20} className="text-primary" />
        <div>
          <h3 className="font-display font-bold text-lg text-foreground">Official Shopify Partner</h3>
          <p className="text-sm text-muted-foreground">Certified by Shopify to build & optimize eCommerce stores</p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <Badge title="Verified Seller" sub="Identity Confirmed" />
      <Badge title="Top Rated" sub="98% Success Rate" />
      <Badge title="Quick Response" sub="Avg. 1 hour" />
      <Badge title="376+ Clients" sub="Worldwide" />
    </div>

    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
      <CheckCircle size={12} className="text-primary" />
      All reviews and projects are verified and authenticated
    </p>
  </div>
);

const Badge = ({ title, sub }: { title: string; sub: string }) => (
  <div className="text-center">
    <p className="font-semibold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground">{sub}</p>
  </div>
);

export default ShopifyPartnerSection;
