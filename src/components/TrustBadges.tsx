import { ShieldCheck, CheckCircle, Star, Zap, Users } from "lucide-react";

const TrustBadges = () => (
  <div className="bg-card rounded-xl border border-border p-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <ShieldCheck size={20} className="text-primary" />
        </div>
        <div>
          <p className="font-display font-bold text-sm text-foreground">Official Shopify Partner</p>
          <p className="text-xs text-muted-foreground">Certified to build & optimize stores</p>
        </div>
      </div>
      <Badge icon={CheckCircle} title="Verified Seller" sub="Identity Confirmed" />
      <Badge icon={Star} title="Top Rated" sub="98% Success Rate" />
      <Badge icon={Zap} title="Quick Response" sub="Avg. 1 hour" />
      <Badge icon={Users} title="376+ Clients" sub="Worldwide" />
    </div>
    <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
      <CheckCircle size={12} className="text-primary" />
      All reviews and projects are verified and authenticated
    </p>
  </div>
);

const Badge = ({ icon: Icon, title, sub }: { icon: any; title: string; sub: string }) => (
  <div className="text-center">
    <p className="font-semibold text-sm text-foreground flex items-center gap-1 justify-center">
      <Icon size={14} className="text-primary" /> {title}
    </p>
    <p className="text-xs text-muted-foreground">{sub}</p>
  </div>
);

export default TrustBadges;
