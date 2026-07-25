import { useEffect } from 'react'

interface GiscusCommentsProps {
  postSlug: string
}

export default function GiscusComments({ postSlug }: GiscusCommentsProps) {
  useEffect(() => {
    const container = document.getElementById('giscus-container')
    if (!container) return

    // Clear previous
    container.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'Airine/airine.github.io')
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkxNzY0MjkxNjM=')
    script.setAttribute('data-category', 'Blog Comments')
    script.setAttribute('data-category-id', 'DIC_kwDOCqIJo84CofM-')
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', postSlug)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'preferred_color_scheme')
    script.setAttribute('data-lang', 'zh-CN')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true

    container.appendChild(script)
  }, [postSlug])

  return <div id="giscus-container" className="mt-12 pt-8 border-t border-border" />
}
