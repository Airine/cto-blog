import { CodeBlock } from '@/components/CodeBlock';

export default function DdnsAliyunPost() {
  return (
    <>
      <h2>背景</h2>
      <p>家里树莓派需要外网访问，但运营商不给固定 IP。解决方案：用 Python 监控外网 IP 变化，调用阿里云 DNS API 自动更新域名解析。</p>

      <h2>核心代码</h2>
      <CodeBlock code={`#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import requests
import json
from aliyunsdkcore.client import AcsClient
from aliyunsdkcore.request import CommonRequest

# 获取当前外网 IP
def get_current_ip():
    return requests.get('https://api.ipify.org').text

# 更新阿里云 DNS
def update_dns_record(ip):
    client = AcsClient('<access_key>', '<secret>', 'cn-hangzhou')
    request = CommonRequest()
    request.set_accept_format('json')
    request.set_domain('alidns.cn-hangzhou.aliyuncs.com')
    request.set_method('POST')
    request.set_version('2015-01-09')
    request.set_action_name('UpdateDomainRecord')
    request.add_query_param('RecordId', '<record_id>')
    request.add_query_param('RR', 'home')
    request.add_query_param('Type', 'A')
    request.add_query_param('Value', ip)
    client.do_action_with_exception(request)

if __name__ == '__main__':
    update_dns_record(get_current_ip())
`} language="python" />

      <h2>定时任务</h2>
      <CodeBlock code={`# crontab -e
*/5 * * * * /usr/bin/python3 /home/pi/ddns.py >> /var/log/ddns.log 2>&1
`} language="bash" />
    </>
  );
}
