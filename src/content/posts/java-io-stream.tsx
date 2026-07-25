export default function JavaIoStreamPost() {
  return (
    <>
      <h2>字节流 vs 字符流</h2>
      <p>Java I/O 流分为两大类：字节流（InputStream/OutputStream）和字符流（Reader/Writer）。</p>

      <h2>Buffered Stream</h2>
      <p>使用 BufferedInputStream/BufferedReader 可以显著提升 I/O 性能，因为它减少了系统调用次数。</p>

      <h2>示例代码</h2>
      <pre><code>{`// 字节流
FileInputStream fis = new FileInputStream("file.txt");
BufferedInputStream bis = new BufferedInputStream(fis);

// 字符流
FileReader fr = new FileReader("file.txt");
BufferedReader br = new BufferedReader(fr);
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
`}</code></pre>

      <h2>最佳实践</h2>
      <ul>
        <li>总是使用 Buffered 包装器</li>
        <li>处理文本用字符流，二进制用字节流</li>
        <li>使用 try-with-resources 确保关闭</li>
      </ul>
    </>
  );
}
