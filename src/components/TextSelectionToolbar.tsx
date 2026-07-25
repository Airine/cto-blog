import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Highlighter, Share2, Link2, Check } from "lucide-react";

interface TextSelectionToolbarProps {
  postSlug: string;
  articleRef: React.RefObject<HTMLElement | null>;
  onHighlightCreated?: () => void;
}

export default function TextSelectionToolbar({ postSlug, articleRef, onHighlightCreated }: TextSelectionToolbarProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedText, setSelectedText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setPosition(null);
      setSelectedText("");
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 2) {
      setPosition(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const article = articleRef.current;
    if (!article) return;

    const articleRect = article.getBoundingClientRect();
    const isInArticle = rect.top >= articleRect.top && rect.bottom <= articleRect.bottom;
    if (!isInArticle) {
      setPosition(null);
      return;
    }

    setSelectedText(text);
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY - 50,
    });
  }, [articleRef]);

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection);
    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
      document.removeEventListener("mouseup", handleSelection);
    };
  }, [handleSelection]);

  const getOffset = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return { start: 0, end: 0 };
    const range = selection.getRangeAt(0);
    const article = articleRef.current;
    if (!article) return { start: 0, end: 0 };

    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(article);
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    const start = preCaretRange.toString().length;
    const end = start + selectedText.length;
    return { start, end };
  };

  const handleHighlight = () => {
    const username = localStorage.getItem("comment-username") || "匿名";
    const offset = getOffset();
    
    const highlights = JSON.parse(localStorage.getItem(`highlights-${postSlug}`) || "[]");
    const newHighlight = {
      id: Date.now(),
      postSlug,
      username,
      selectedText,
      startOffset: offset.start,
      endOffset: offset.end,
      createdAt: new Date().toISOString(),
    };
    highlights.push(newHighlight);
    localStorage.setItem(`highlights-${postSlug}`, JSON.stringify(highlights));
    
    window.getSelection()?.removeAllRanges();
    setPosition(null);
    onHighlightCreated?.();
  };

  const handleShare = (type: string) => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#/blog/${postSlug}`;
    const shareText = selectedText.slice(0, 100);

    if (type === "weibo") {
      window.open(`https://service.weibo.com/share/share.php?title=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`, "_blank");
    } else if (type === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`, "_blank");
    }
    window.getSelection()?.removeAllRanges();
    setPosition(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText).catch(() => {});
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      window.getSelection()?.removeAllRanges();
      setPosition(null);
    }, 1000);
  };

  if (!position) return null;

  return (
    <div
      className="fixed z-50 animate-in fade-in zoom-in-95 duration-150"
      style={{ left: position.x, top: position.y, transform: "translateX(-50%)" }}
    >
      <div className="bg-background border border-border rounded-lg shadow-lg px-2 py-1.5 flex items-center gap-1">
        <Button variant="ghost" size="sm" onClick={handleHighlight} className="h-8 gap-1 text-xs">
          <Highlighter className="h-3.5 w-3.5 text-yellow-500" />
          划线
        </Button>
        <div className="w-px h-4 bg-border mx-1" />
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 gap-1 text-xs">
          {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Link2 className="h-3.5 w-3.5" />}
          {copied ? "已复制" : "复制"}
        </Button>
        <div className="w-px h-4 bg-border mx-1" />
        <Button variant="ghost" size="sm" onClick={() => handleShare("weibo")} className="h-8 gap-1 text-xs">
          <Share2 className="h-3.5 w-3.5" />
          分享
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 -mt-1" />
      </div>
    </div>
  );
}
