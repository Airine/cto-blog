import type { ComponentType } from 'react'

// Static imports - all post components are bundled at build time
import VibeCodingDebate from './posts/vibe-coding-debate'
import AgentTaxonomyAndMatrix from './posts/agent-taxonomy-and-matrix'
import BeWaterMyAgent from './posts/be-water-my-agent'
import DeepseekEntrepreneurship from './posts/deepseek-entrepreneurship'
import FlutterEnvironment from './posts/flutter-environment'
import DdnsAliyun from './posts/ddns-aliyun'
import GoogleIndex from './posts/google-index'
import HkedInterviewFull from './posts/hked-interview-full'
import HomePage from './posts/home-page'
import JavaIoStream from './posts/java-io-stream'
import LeetcodeDebugger from './posts/leetcode-debugger'
import LinksysOpenwrt from './posts/linksys-openwrt'
import SignalInProcess from './posts/signal-in-process'

const postComponents: Record<string, ComponentType> = {
  'vibe-coding-debate': VibeCodingDebate,
  'agent-taxonomy-and-matrix': AgentTaxonomyAndMatrix,
  'be-water-my-agent': BeWaterMyAgent,
  'deepseek-entrepreneurship': DeepseekEntrepreneurship,
  'flutter-environment': FlutterEnvironment,
  'ddns-aliyun': DdnsAliyun,
  'google-index': GoogleIndex,
  'hked-interview-full': HkedInterviewFull,
  'home-page': HomePage,
  'java-io-stream': JavaIoStream,
  'leetcode-debugger': LeetcodeDebugger,
  'linksys-openwrt': LinksysOpenwrt,
  'signal-in-process': SignalInProcess,
}

export default postComponents
