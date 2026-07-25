import { useState, useEffect } from "react";
import HighlightComments from "./HighlightComments";

interface Highlight {
  id: number;
  postSlug: string;
  username: string;
  selectedText: string;
  startOffset: number;
  endOffset: number;
  createdAt: string;
  comments?: { id: number; highlightId: number; username: string; content: string; createdAt: string }[];
}

interface HighlightLayerProps {
  postSlug: string;
  articleRef: React.RefObject<HTMLElement | null>;
}

export default function HighlightLayer({ postSlug, articleRef }: HighlightLayerProps) {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`highlights-${postSlug}`) || "[]");
    const highlightsWithComments = data.map((h: Highlight) => ({
      ...h,
      comments: h.comments || [],
    }));
    setHighlights(highlightsWithComments);
  }, [postSlug]);

  const activeData = highlights.find((h) => h.id === activeHighlight) || null;

  useEffect(() => {
    if (!highlights.length || !articleRef.current) return;

    const article = articleRef.current;

    article.querySelectorAll("[data-highlight]").forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize();
      }
    });

    const sorted = [...highlights].sort((a, b) => b.startOffset - a.startOffset);

    for (const hl of sorted) {
      try {
        const range = findRange(article, hl.startOffset, hl.endOffset);
        if (!range) continue;

        const span = document.createElement("mark");
        span.setAttribute("data-highlight", String(hl.id));
        span.style.backgroundColor = "rgba(250, 204, 21, 0.3)";
        span.style.cursor = "pointer";
        span.style.borderBottom = "2px solid rgba(250, 204, 21, 0.6)";
        span.style.transition = "background-color 0.2s";
        span.onmouseenter = () => { span.style.backgroundColor = "rgba(250, 204, 21, 0.5)"; };
        span.onmouseleave = () => { span.style.backgroundColor = "rgba(250, 204, 21, 0.3)"; };
        span.onclick = (e) => {
          e.stopPropagation();
          setActiveHighlight(hl.id);
        };

        range.surroundContents(span);
      } catch {
        // Range might span across elements, skip
      }
    }

    return () => {
      article.querySelectorAll("[data-highlight]").forEach((el) => {
        const parent = el.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(el.textContent || ""), el);
          parent.normalize();
        }
      });
    };
  }, [highlights, articleRef]);

  if (!highlights.length) return null;

  return (
    <>
      {activeData && (
        <HighlightComments
          highlight={activeData}
          onClose={() => setActiveHighlight(null)}
          onCommentAdded={() => {
            const data = JSON.parse(localStorage.getItem(`highlights-${postSlug}`) || "[]");
            setHighlights(data);
          }}
        />
      )}
    </>
  );
}

function findRange(root: HTMLElement, start: number, end: number): Range | null {
  const range = document.createRange();
  let charCount = 0;
  let startNode: Node | null = null;
  let startOffset = 0;
  let endNode: Node | null = null;
  let endOffset = 0;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;

  while ((node = walker.nextNode())) {
    const textLength = node.textContent?.length || 0;

    if (!startNode && charCount + textLength >= start) {
      startNode = node;
      startOffset = start - charCount;
    }
    if (!endNode && charCount + textLength >= end) {
      endNode = node;
      endOffset = end - charCount;
      break;
    }
    charCount += textLength;
  }

  if (!startNode || !endNode) return null;

  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  return range;
}
