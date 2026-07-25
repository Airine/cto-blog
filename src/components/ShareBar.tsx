import { useState } from 'react'
import { Share2, Link2, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShareBarProps {
  title: string
  url: string
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `${window.location.origin}${window.location.pathname}#/blog${url}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const input = document.createElement('input')
      input.value = fullUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleShare = () => {
    const shareText = `${title} - 一口闰心的博客`
    window.open(
      `https://service.weibo.com/share/share.php?title=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`,
      '_blank',
      'width=600,height=400'
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={handleShare} className="gap-1.5">
        <Share2 className="h-3.5 w-3.5" />
        分享
      </Button>
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Link2 className="h-3.5 w-3.5" />}
        {copied ? '已复制' : '复制链接'}
      </Button>
    </div>
  )
}
