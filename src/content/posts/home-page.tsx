export default function HomePagePost() {
  return (
    <>
      <h2>技术选型</h2>
      <p>选择 Docusaurus 是因为它提供了完整的文档/博客功能，且易于部署到 GitHub Pages。</p>

      <h2>部署流程</h2>
      <pre><code>{`npx create-docusaurus@latest my-website classic
npm run build
npm run deploy
`}</code></pre>

      <h2>自定义配置</h2>
      <p>修改 docusaurus.config.js 配置网站标题、导航栏、Footer 等。</p>

      <h2>绑定域名</h2>
      <p>在 static 目录添加 CNAME 文件，内容为你的域名。在 DNS 提供商添加 CNAME 记录指向 GitHub Pages 地址。</p>
    </>
  );
}
