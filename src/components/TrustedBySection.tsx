const logos = [
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Wix", url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg" },
  { name: "WordPress", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
];

const TrustedBySection = () => (
  <div className="bg-card rounded-xl border border-border p-6">
    <p className="text-sm text-muted-foreground text-center mb-4">Trusted by businesses using</p>
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {logos.map((l) => (
        <img
          key={l.name}
          src={l.url}
          alt={l.name}
          className="h-6 md:h-8 hover:opacity-80 transition-opacity"
          loading="lazy"
        />
      ))}
    </div>
  </div>
);

export default TrustedBySection;
