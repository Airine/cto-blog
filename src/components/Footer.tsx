import { Link } from 'react-router'

const products = [
  { name: 'NervaFS', href: '/products/nervafs' },
  { name: 'Inbox', href: '#' },
  { name: 'Mail', href: '#' },
  { name: 'Input', href: '#' },
  { name: 'Grid', href: '#' },
  { name: 'Exchange', href: '#' },
  { name: 'Agon', href: '/products/agon' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-6">
          {products.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {p.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>闰</span>
          <span>2026 一口闰心. 瑾若心辰科技 & 零界演化科技.</span>
        </div>
      </div>
    </footer>
  )
}
