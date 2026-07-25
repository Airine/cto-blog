import { CodeBlock } from '@/components/CodeBlock';

export default function AgentTaxonomyAndMatrixPost() {
  return (
    <>
      <p>从 NervaFS 创始人的视角，记录对 Agent 生态的体验、观察和选型思路。</p>

      <h2>常驻 vs 临时</h2>
      <p>
        Agent 的核心区分维度是「生命周期」。常驻 Agent 长期运行，有持久记忆和身份；
        临时 Agent 按需创建，用完即走。前者如个人助手，后者如代码生成任务。
      </p>

      <h2>注意力保护</h2>
      <p>
        不要让一个 Agent 同时背负所有时间尺度。让身份和记忆生活在年级别的容器里，
        让任务执行发生在分钟级的容器里。
      </p>

      <h2>最佳实践大于 fancy 产品</h2>
      <p>
        当前 Agent 生态还在早期，概念的意义是帮助沟通和思考，而不是划清边界。
      </p>
    </>
  );
}
