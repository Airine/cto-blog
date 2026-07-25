import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, User } from "lucide-react";

interface HighlightComment {
  id: number;
  highlightId: number;
  username: string;
  content: string;
  createdAt: string;
}

interface Highlight {
  id: number;
  postSlug: string;
  username: string;
  selectedText: string;
  startOffset: number;
  endOffset: number;
  createdAt: string;
  comments?: HighlightComment[];
}

interface HighlightCommentsProps {
  highlight: Highlight;
  onClose: () => void;
  onCommentAdded?: () => void;
}

export default function HighlightComments({ highlight, onClose, onCommentAdded }: HighlightCommentsProps) {
  const [username, setUsername] = useState(() => localStorage.getItem("comment-username") || "");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNameInput, setShowNameInput] = useState(!localStorage.getItem("comment-username"));
  const [localComments, setLocalComments] = useState<HighlightComment[]>(highlight.comments || []);

  const handleSubmit = () => {
    if (!content.trim() || !username.trim()) return;
    setIsSubmitting(true);
    localStorage.setItem("comment-username", username);
    setShowNameInput(false);

    const newComment: HighlightComment = {
      id: Date.now(),
      highlightId: highlight.id,
      username: username.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    const allComments = JSON.parse(localStorage.getItem(`highlight-comments-${highlight.postSlug}`) || "[]");
    allComments.push(newComment);
    localStorage.setItem(`highlight-comments-${highlight.postSlug}`, JSON.stringify(allComments));

    setLocalComments((prev) => [...prev, newComment]);
    setContent("");
    onCommentAdded?.();
    setIsSubmitting(false);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("zh-CN", {
      month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div className="bg-background rounded-xl shadow-xl border border-border w-full max-w-md mx-4 max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-yellow-500" />
            <span className="font-medium text-sm">划线评论</span>
            <span className="text-xs text-muted-foreground">({localComments.length})</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-b border-border">
          <p className="text-sm italic text-muted-foreground line-clamp-3">\"{highlight.selectedText}\"</p>
          <p className="text-xs text-muted-foreground mt-1">— {highlight.username}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {localComments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                {comment.username.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium">{comment.username}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-sm leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
          {localComments.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">暂无评论，来写第一条吧</p>
          )}
        </div>

        <div className="p-4 border-t border-border space-y-2">
          {showNameInput ? (
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="输入你的昵称"
              className="text-sm"
            />
          ) : (
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">{username}</span>
              <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => setShowNameInput(true)}>修改</Button>
            </div>
          )}
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="写下你的评论..."
            rows={2}
            className="resize-none text-sm"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmit} disabled={isSubmitting || !content.trim() || !username.trim()} size="sm" className="gap-1">
              <Send className="h-3.5 w-3.5" />
              {isSubmitting ? "发送中..." : "发送"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
