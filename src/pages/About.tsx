import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">关于我</h1>
      <p className="text-muted-foreground leading-relaxed mb-8">
        我是一名工程师、创业者和产品思考者。本科毕业于南方科技大学，研究生毕业于新加坡国立大学。
        曾在阿里云担任研发工程师，25岁创立瑾若心辰，现任零界演化技术总监。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-semibold">教育背景</h3>
            <p className="text-sm text-muted-foreground">南方科技大学 · 新加坡国立大学 MComp</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-semibold">工作经历</h3>
            <p className="text-sm text-muted-foreground">阿里云研发工程师 · 瑾若心辰 CEO · 零界演化 CTO</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-semibold">学术成果</h3>
            <p className="text-sm text-muted-foreground">3 篇 CCFA 论文</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-semibold">博客</h3>
            <p className="text-sm text-muted-foreground">记录技术思考与生活点滴</p>
          </div>
        </div>
      </div>
    </div>
  )
}
