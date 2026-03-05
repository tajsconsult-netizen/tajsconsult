import { MapPin, Globe, Award, Briefcase, Clock, TrendingUp, Calendar } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const services = ["Store setup", "Store design", "SEO", "Email marketing", "Social media", "Bug fixes"];

const ProfileSidebar = () => (
  <aside className="bg-card rounded-xl border border-border p-6 space-y-5 md:sticky md:top-24">
    {/* Header badge */}
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold tracking-wider text-primary uppercase">Shopify Partner</span>
      <span className="flex items-center gap-1 text-xs text-primary font-medium">✓ Verified</span>
    </div>

    {/* Avatar + info */}
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-3">
        <img
          src={profileAvatar}
          alt="Profile photo"
          className="w-24 h-24 rounded-full object-cover border-4 border-card shadow-lg"
        />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full border-2 border-card flex items-center justify-center">
          <span className="text-primary-foreground text-[8px]">✓</span>
        </div>
      </div>
      <h3 className="font-display font-bold text-lg text-foreground">Tajs Consult</h3>
      <p className="text-sm text-muted-foreground">Shopify Expert & eCommerce Strategist</p>

      {/* Stars */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
        <span className="text-sm font-semibold text-foreground ml-1">5.0</span>
        <span className="text-xs text-muted-foreground">(690 reviews)</span>
      </div>

      <div className="flex items-center gap-1.5 mt-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-xs text-primary font-medium">Available Now • Taking New Projects</span>
      </div>
    </div>

    {/* Quick stats */}
    <div className="grid grid-cols-2 gap-3">
      {[
        { icon: Briefcase, value: "1,500+", label: "Jobs completed" },
        { icon: Clock, value: "< 1hr", label: "Response time" },
        { icon: TrendingUp, value: "98%", label: "Success rate" },
        { icon: Calendar, value: "2019", label: "Member since" },
      ].map((s) => (
        <div key={s.label} className="flex flex-col items-center p-2">
          <s.icon size={16} className="text-muted-foreground mb-1" />
          <span className="font-display font-bold text-sm text-foreground">{s.value}</span>
          <span className="text-[11px] text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>

    {/* Location & language */}
    <div className="space-y-2.5 text-sm">
      <div className="flex items-start gap-2 text-muted-foreground">
        <MapPin size={14} className="mt-0.5 shrink-0" />
        <span>West Africa, Nigeria</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Globe size={14} className="shrink-0" />
        <span>English, Spanish & French</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Award size={14} className="shrink-0" />
        <span>7+ years experience</span>
      </div>
    </div>

    {/* Services tags */}
    <div>
      <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase mb-2">Services Offered</p>
      <div className="flex flex-wrap gap-1.5">
        {services.map((s) => (
          <span key={s} className="bg-badge text-badge-foreground text-xs font-medium px-2.5 py-1 rounded-md">
            {s}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

const Star = () => (
  <svg className="w-4 h-4 text-star fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default ProfileSidebar;
