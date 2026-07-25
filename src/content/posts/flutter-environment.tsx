export default function FlutterEnvironmentPost() {
  return (
    <>
      <h2>安装 Flutter SDK</h2>
      <p>从官网下载 Flutter SDK，解压到 ~/development 目录：</p>

      <pre><code>{`cd ~/development
unzip ~/Downloads/flutter_macos_3.x.x-stable.zip
`}</code></pre>

      <h2>配置环境变量</h2>
      <p>编辑 ~/.zshrc，添加：</p>

      <pre><code>{`export PATH="$PATH:$HOME/development/flutter/bin"
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
`}</code></pre>

      <h2>验证安装</h2>
      <pre><code>{`flutter doctor
`}</code></pre>

      <h2>配置 Android Studio</h2>
      <p>安装 Flutter 和 Dart 插件，配置 SDK 路径即可。</p>
    </>
  );
}
