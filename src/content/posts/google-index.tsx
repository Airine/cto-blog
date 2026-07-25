import { CodeBlock } from '@/components/CodeBlock';

export default function GoogleIndexPost() {
  return (
    <>
      <h2>提交 URL</h2>
      <p>访问 Google Search Console，添加属性并验证网站所有权。</p>

      <h2>验证所有权</h2>
      <p>推荐用 HTML 文件验证：下载验证文件放到网站根目录。</p>

      <h2>添加 Sitemap</h2>
      <p>在 Search Console 的「站点地图」页面提交 sitemap.xml 地址。</p>

      <h2>生成 Sitemap</h2>
      <CodeBlock code={`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`} language="xml" />

      <h2>加速收录技巧</h2>
      <ul>
        <li>在社交媒体分享链接</li>
        <li>提交到搜索引擎的收录工具</li>
        <li>确保网站可访问性良好</li>
      </ul>
    </>
  );
}
