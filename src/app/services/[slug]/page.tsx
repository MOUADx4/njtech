import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services-data";
import PageHero from "@/components/layout/PageHero";
import ServiceSingleDetail from "@/components/sections/services/ServiceSingleDetail";
import HomeCta from "@/components/sections/home/HomeCta";
import { siteConfig } from "@/config/site";

// Prérend les pages de prestations au build
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${siteConfig.url}/services/${slug}`,
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        label={service.hero.label}
        title={service.hero.title}
        description={service.hero.description}
      />
      <ServiceSingleDetail service={service} />
      <HomeCta />
    </>
  );
}
