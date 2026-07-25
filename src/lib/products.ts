export interface ProductMeta {
  slug: string
  name: string
  tagline: string
  description: string
  status: 'LIVE' | 'ALPHA' | 'BETA' | 'BUILDING' | 'CONCEPT'
  href: string
}

export const allProducts: ProductMeta[] = [
  {
    slug: 'nervafs',
    name: 'NervaFS',
    tagline: 'A governed filesystem substrate for Agentic AI',
    description: 'NervaFS is a governed filesystem substrate designed for Agentic AI systems. It provides identity, memory, and audit capabilities for autonomous agents.',
    status: 'BUILDING',
    href: 'https://nervafs.io',
  },
  {
    slug: 'nerva-input',
    name: 'Nerva Input',
    tagline: 'Flow Typing input method for macOS',
    description: 'Nerva Input is a Flow Typing input method designed for macOS, enabling rapid and fluid text input.',
    status: 'LIVE',
    href: '#',
  },
  {
    slug: 'neurasea-exchange',
    name: 'Neurasea Exchange',
    tagline: 'Trade AI inference compute like electricity',
    description: 'Neurasea Exchange allows you to trade AI inference compute power like electricity, on demand.',
    status: 'CONCEPT',
    href: '#',
  },
  {
    slug: 'agon',
    name: 'Agon Arena',
    tagline: 'Where agents truly make money',
    description: 'Agon Arena is a competitive platform where AI agents compete and earn real rewards.',
    status: 'CONCEPT',
    href: '#',
  },
]

export function getProductBySlug(slug: string): ProductMeta | undefined {
  return allProducts.find((p) => p.slug === slug)
}
