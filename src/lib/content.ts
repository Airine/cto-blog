export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  category: string
  readingTime?: number
}

export const allPosts: PostMeta[] = [
  {
    slug: 'be-water-my-agent',
    title: 'Be Water, My Agent：从常驻与临时到时间尺度的 Agent 分类学',
    date: '2026-07-23',
    description: '一次微信对话引发的思考：Agent 可以按分钟、小时、天、月、年的时间尺度分类。常驻的是 AGI，临时的是函数。不给定义，只要方便交流就好。',
    category: '技术',
  },
  {
    slug: 'vibe-coding-debate',
    title: 'vibe coding 与高级工程师：一场关于 AI 时代编程范式的群聊实录',
    date: '2026-07-15',
    description: '当 vibe coding 遇上高级工程师，当 Agent 自主开发遇上企业级交付，AI 时代编程正在被重新定义。',
    category: '创业',
  },
  {
    slug: 'agent-taxonomy-and-matrix',
    title: '常驻 Agent 与临时 Agent：我对 Agent 生态的五点观察与矩阵产品选型',
    date: '2026-07-07',
    description: '从 NervaFS 创始人的视角，记录对 Agent 生态的体验、观察和选型思路。常驻 vs 临时、注意力保护、最佳实践大于 fancy 产品。',
    category: '技术',
  },
  {
    slug: 'deepseek-entrepreneurship',
    title: 'DeepSeek 风口上的掘金者',
    date: '2026-02-15',
    description: '利用 DeepSeek 在市场上收获真金白银的真实经历，从京东 AI 入驻助手到更远的创业之路。',
    category: '创业',
  },
  {
    slug: 'flutter-environment',
    title: 'macOS 搭建 Flutter 开发环境',
    date: '2020-05-01',
    description: '记录在 macOS 上搭建 Flutter 开发环境的完整流程，包括 Flutter SDK 安装、环境变量配置、Android Studio 和 Xcode 的配置。',
    category: '技术',
  },
  {
    slug: 'ddns-aliyun',
    title: '树莓派 + Python 调用阿里云 API 实现 DDNS',
    date: '2021-02-01',
    description: '通过树莓派实时监控外网 IP 变化，并调用阿里云 DNS API 自动更新域名解析。',
    category: '技术',
  },
  {
    slug: 'google-index',
    title: '新博客的 Google 搜索优化',
    date: '2020-12-31',
    description: '个人网站如何被 Google 搜索引擎收录？提交 URL、验证所有权、添加 Sitemaps 的完整指南。',
    category: '技术',
  },
  {
    slug: 'hked-interview-full',
    title: '《香港经济导报》专访：DeepSeek 风口上的掘金者',
    date: '2026-02-20',
    description: '香港经济导报记者金石开专访：一位 1999 年出生的年轻人如何利用 DeepSeek 在市场上收获真金白银。',
    category: '媒体',
  },
  {
    slug: 'home-page',
    title: '10 分钟部署个人网站 + 博客',
    date: '2020-04-13',
    description: '使用 Docusaurus 在 10 分钟内快速部署一个个人网站 + 博客的完整教程。',
    category: '技术',
  },
  {
    slug: 'java-io-stream',
    title: 'Java I/O Stream 的使用',
    date: '2019-02-22',
    description: '深入介绍 Java I/O 流的分类和使用方法，包括字节流、字符流和 Buffered Stream。',
    category: '技术',
  },
  {
    slug: 'leetcode-debugger',
    title: 'LeetCode 本地调试器：用 Golang Reflect 生成测试用例',
    date: '2021-02-28',
    description: '利用 Go 的反射机制实现本地 LeetCode 调试器，自动生成测试用例，告别 print 大法。',
    category: '技术',
  },
  {
    slug: 'linksys-openwrt',
    title: 'Linksys WRT1900ACS 刷机指南',
    date: '2020-04-06',
    description: 'Linksys WRT1900ACS 路由器刷 OpenWrt 和原厂固件的完整指南，包括双固件分区切换方法。',
    category: '技术',
  },
  {
    slug: 'signal-in-process',
    title: 'Linux 进程间通信：信号机制',
    date: '2020-03-14',
    description: '介绍 Linux 进程间通信中的信号机制，包括信号的概念、处理方式、竞态条件问题。',
    category: '技术',
  },
]

export function getPostBySlug(slug: string): PostMeta | undefined {
  return allPosts.find((p) => p.slug === slug)
}

export function getAllPosts(): PostMeta[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
