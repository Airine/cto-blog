import { Link } from 'react-router'
import { allProducts } from '@/lib/products'
import { Card } from '@/components/ui/card'

const statusColors: Record<string, string> = {
  LIVE: 'bg-green-100 text-green-700',
  ALPHA: 'bg-yellow-100 text-yellow-700',
  BETA: 'bg-blue-100 text-blue-700',
  BUILDING: 'bg-orange-100 text-orange-700',
  CONCEPT: 'bg-gray-100 text-gray-600',
}

export default function Products() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">产品</h1>
        <p className="text-muted-foreground">正在构建的产品和实验项目</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProducts.map((product) => (
          <Link key={product.slug} to={`/products/${product.slug}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow h-full">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[product.status]}`}>
                  {product.status}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-2">{product.tagline}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
