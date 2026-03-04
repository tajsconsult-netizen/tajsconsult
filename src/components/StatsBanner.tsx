import { Users, Clock, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "1273+", label: "Projects Completed" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Star, value: "376+", label: "Happy Clients" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
];

const StatsBanner = () => (
  <div className="bg-stats text-stats-foreground">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-16 py-4 px-4">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-2.5 animate-fade-in">
          <s.icon size={18} className="text-primary opacity-90" />
          <span className="font-display font-bold text-lg">{s.value}</span>
          <span className="text-sm opacity-80">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBanner;
