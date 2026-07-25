export default function SignalInProcessPost() {
  return (
    <>
      <h2>信号概念</h2>
      <p>信号是 Linux 进程间通信的一种机制，用于通知进程发生了某个事件。</p>

      <h2>信号处理</h2>
      <p>进程可以捕获、忽略或执行默认操作来处理信号。</p>

      <h2>示例代码</h2>
      <pre><code>{`#include <signal.h>
#include <stdio.h>

void handler(int sig) {
    printf("Received signal %d\\n", sig);
}

int main() {
    signal(SIGINT, handler);
    while (1) {
        pause();
    }
    return 0;
}
`}</code></pre>

      <h2>竞态条件</h2>
      <p>信号处理函数中应避免调用非异步信号安全的函数。使用 sigaction 代替 signal 可以获得更可靠的行为。</p>
    </>
  );
}
