export default function LinksysOpenwrtPost() {
  return (
    <>
      <h2>路由器型号</h2>
      <p>Linksys WRT1900ACS，双频 AC1900，支持 OpenWrt。</p>

      <h2>刷机步骤</h2>
      <ol>
        <li>下载 OpenWrt 固件</li>
        <li>进入路由器管理界面（192.168.1.1）</li>
        <li>找到固件升级选项，选择下载的固件</li>
        <li>等待刷机完成，路由器自动重启</li>
      </ol>

      <h2>双固件切换</h2>
      <p>WRT1900ACS 有两个固件分区。刷机失败可以快速切换回原厂固件：开机时按重置键 3 次。</p>

      <h2>常用配置</h2>
      <pre><code>{`# 设置 root 密码
passwd

# 更新软件包
opkg update
opkg install luci-ssl

# 配置 WiFi
uci set wireless.@wifi-device[0].disabled=0
uci commit wireless
wifi
`}</code></pre>
    </>
  );
}
