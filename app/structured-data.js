export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://taicdigital.ca/#business",
      name: "Taic Digital",
      url: "https://taicdigital.ca/",
      description:
        "Taic Digital is about bringing digital marketing support to your business. We step in when your small business has marketing needs but you're not quite ready to hire someone full time. Our expertise is in website strategy, design, SEO/AEO, Google Analytics and content.",
      email: "britt@taicdigital.ca",
      founder: { "@id": "https://taicdigital.ca/#britt-warren" },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Atlantic Canada",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Halifax",
        addressRegion: "NS",
        addressCountry: "CA",
      },
      sameAs: ["https://www.instagram.com/taic.digital"],
      knowsAbout: [
        "Web strategy and information architecture",
        "UX/UI design",
        "SEO",
        "Generative engine optimization (GEO)",
        "Paid media (Google Ads, Meta, LinkedIn)",
        "Web analytics (GA4, GTM, Looker Studio)",
        "Content strategy and copywriting",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital marketing and UX services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Strategy & UX",
              description:
                "Discovery through launch: user research, UX audits, information architecture, wireframing, and strategy grounded in real behavior and goals, not guesswork.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Design & Production",
              description:
                "From wireframes to final visuals: UI design, a design kit with tokens for the web build, marketing collateral, video, social content, and brand identity work when that's part of the scope, whether working within an existing brand or building one from scratch.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search & Visibility",
              description:
                "Technical, on-page, and local search, including Google Business Profile, plus staying visible inside AI-generated answers (generative engine optimization).",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description:
                "Larger builds are handled with a trusted network of full-stack developers under direct oversight; Webflow, Squarespace, and other page-builder sites are built and populated directly.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Analytics & Reporting",
              description:
                "Proper GA4, Google Tag Manager, and Looker Studio setup so monthly reporting describes what's actually happening on the site, not just noise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content & Communications",
              description:
                "Website copy, content structure and templates, and an editorial plan so the site doesn't go stale a few months after launch.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://taicdigital.ca/#britt-warren",
      name: "Britt Warren",
      jobTitle: "Founder & Consultant",
      worksFor: { "@id": "https://taicdigital.ca/#business" },
      email: "britt@taicdigital.ca",
      sameAs: ["https://www.instagram.com/taic.digital"],
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Halifax",
          addressRegion: "NS",
          addressCountry: "CA",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://taicdigital.ca/#website",
      url: "https://taicdigital.ca/",
      name: "Taic Digital",
      publisher: { "@id": "https://taicdigital.ca/#business" },
      inLanguage: "en-CA",
    },
  ],
};
