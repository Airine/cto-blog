import { Link } from 'react-router'
import { BookOpen, GraduationCap, Briefcase, Award, Code, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { allPosts } from '@/lib/content'

const highlights = [
  { icon: GraduationCap, label: '南科大 / NUS', sub: '学术背景' },
  { icon: Code, label: '阿里云 研发工程师', sub: '技术经历' },
  { icon: Briefcase, label: '零界演化 CTO', sub: '瑾若心辰 CEO' },
  { icon: Award, label: '3篇 CCFA', sub: '学术论文' },
]

const tags = [
  '"灵活的长期主义者"',
  '"会共情的领导者"',
  '"一个想做产品经理的程序员"',
  '"发过3篇CCFA的工程师"',
  'ENTJ-A',
]

export default function Home() {
  const latestPosts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <img
          src="/avatar.png"
          alt="一口闰心"
          className="w-28 h-28 rounded-full object-cover border-2 border-border flex-shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            一口闰心 — 灵活的长期主义者
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            本科@南方科技大学 · 研究生@新加坡国立大学 · 前阿里云研发工程师。
            25岁创立瑾若心辰，零界演化技术总监。
            发过3篇CCFA的工程师，一个想做产品经理的程序员。
          </p>
          <div className="flex gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              浏览文章
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {highlights.map((h) => (
          <Card key={h.label} className="p-4 text-center">
            <h.icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
            <div className="text-sm font-semibold">{h.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{h.sub}</div>
          </Card>
        ))}
      </section>

      {/* Tags */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold mb-4">自我定位</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mb-16 border-l-4 border-primary/20 pl-4">
        <Quote className="h-4 w-4 text-muted-foreground mb-2" />
        <p className="text-muted-foreground italic leading-relaxed">
          "世界就是个巨大的草台班子。任何大事也不过就是从一个想法一个动力开始的，
          我有动力，有想法，我搭一个草台班子没准儿就真能做个大事出来。"
        </p>
        <p className="text-xs text-muted-foreground mt-2">—— 一口闰心</p>
        <p className="text-xs text-muted-foreground mt-1">统一冰糖雪梨，一口闰心田</p>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">最新文章</h2>
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            查看全部 →
          </Link>
        </div>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-base font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
