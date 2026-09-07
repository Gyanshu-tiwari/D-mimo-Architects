import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function SEO({ title, description, keywords, ogImage, ogType = "website" }) {
  const location = useLocation();
  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : `https://www.dmimoarchitects.com${location.pathname}`;

  const BRAND_NAME = "D Mimo Architects";

  // Compute clean page title
  let pageTitle = BRAND_NAME;
  if (title && title.trim() && title.trim() !== BRAND_NAME) {
    if (title.includes(BRAND_NAME)) {
      pageTitle = title.trim();
    } else {
      pageTitle = `${title.trim()} | ${BRAND_NAME}`;
    }
  }

  // Default SEO Values
  const defaultDescription = "D Mimo Architects designs timeless, modern, and intentional residential and commercial interior spaces. Expert interior styling and renovation.";
  const finalDescription = description || defaultDescription;
  const finalImage = ogImage || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
}
