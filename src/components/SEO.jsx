import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function SEO({ title, description, keywords, ogImage, ogType = "website" }) {
  const location = useLocation();
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  const BRAND_NAME = "D Mimo Architects";

  // Compute clean page title: prevents any accidental duplication
  let pageTitle = BRAND_NAME;
  if (title && title.trim() && title.trim() !== BRAND_NAME) {
    if (title.includes(BRAND_NAME)) {
      pageTitle = title.trim();
    } else {
      pageTitle = `${title.trim()} | ${BRAND_NAME}`;
    }
  } else {
    pageTitle = BRAND_NAME;
  }

  useEffect(() => {
    // 1. Update Title
    document.title = pageTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || "D Mimo Architects designs timeless, modern, and intentional residential and commercial interior spaces. Expert interior styling and renovation.");

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords || "interior design, architects, modern home styling, home renovation, commercial interiors");

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 5. Update Open Graph Tags
    const ogTags = {
      "og:title": pageTitle,
      "og:description": description || "D Mimo Architects designs timeless, modern, and intentional residential and commercial interior spaces.",
      "og:url": canonicalUrl,
      "og:type": ogType,
      "og:image": ogImage || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

    // 6. Update Twitter Tags
    const twitterTags = {
      "twitter:title": pageTitle,
      "twitter:description": description || "D Mimo Architects designs timeless, modern, and intentional residential and commercial interior spaces.",
      "twitter:image": ogImage || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    };

    Object.entries(twitterTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
