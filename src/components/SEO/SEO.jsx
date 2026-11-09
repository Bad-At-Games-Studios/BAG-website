import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  author = "BAD AT Games",
  language = "en",
  robots = "index, follow",
  imageAlt,
  structuredData,
}) => {
  const siteName = "BAD AT Games";

  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const fullDescription =
    description ||
    "BAD AT Games is an independent game development studio creating original games and providing game development services.";

  const fullImage =
    image || "https://www.badatgames.net/assets/images/logo.png";

  const fullUrl = url || "https://www.badatgames.net/";

  const keywordContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.badatgames.net/",
    logo: "https://www.badatgames.net/logo.png",
  };

  const schema = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      {/* Search engine preview controls */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Browser and device */}
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Open Graph image information (when dimensions are known) */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="description" content={fullDescription} />
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />

      <link rel="canonical" href={fullUrl} />

      <meta httpEquiv="content-language" content={language} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Open Graph / Facebook / WhatsApp / Discord */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={imageAlt || fullTitle} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={imageAlt || fullTitle} />

      {/* Browser / Mobile */}
      <meta name="application-name" content={siteName} />
      <meta name="theme-color" content="#101713" />
      <meta name="color-scheme" content="dark light" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
