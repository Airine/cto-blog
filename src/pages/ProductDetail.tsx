import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { getProductBySlug } from '@/lib/products'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">产品未找到</h1>
        <Link to="/products" className="text-primary hover:underline">返回产品列表</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        返回产品列表
      </Link>
      <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
      <p className="text-lg text-muted-foreground mb-6">{product.tagline}</p>
      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
    </div>
  )
}
