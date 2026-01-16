interface StructuredDataProps {
  data: {
    businessName: string
    description: string
    logo?: string
    address?: string
    phone?: string
    email?: string
  }
}

export default function StructuredData({ data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.businessName,
    description: data.description,
    ...(data.logo && { logo: data.logo }),
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address,
      },
    }),
    ...(data.phone && { telephone: data.phone }),
    ...(data.email && { email: data.email }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
