import { useState } from 'react'
import { Link } from 'react-router'
import { Search, Calendar, Tag } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getAllPosts } from '@/lib/content'

const categories = ['全部', '技术', '创业', '媒体']

export default function BlogList() {
  const allPosts = getAllPosts()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

  const filtered = allPosts.filter((post) => {
    const matchSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === '全部' || post.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">博客文章</h1>
        <p className="text-muted-foreground">记录思考、技术和生活的点滴</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索文章..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">没有找到匹配的文章</div>
      )}
    </div>
  )
}
