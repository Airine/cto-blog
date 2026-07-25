import { useRef } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import { Card } from "@/components/ui/card";
import ShareBar from "@/components/ShareBar";
import GiscusComments from "@/components/GiscusComments";
import TextSelectionToolbar from "@/components/TextSelectionToolbar";
import HighlightLayer from "@/components/HighlightLayer";
import postComponents from "@/content";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  const allPosts = getAllPosts();
  const articleRef = useRef<HTMLElement>(null);

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <p className="text-muted-foreground mb-6">这篇文章不存在或已被删除</p>
        <Link to="/blog" className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          返回博客列表
        </Link>
      </div>
    );
  }

  const PostComponent = slug ? postComponents[slug] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        返回博客列表
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
            <Tag className="h-3 w-3" />
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <ShareBar title={post.title} url={`/blog/${post.slug}`} />
      </div>

      <TextSelectionToolbar postSlug={post.slug} articleRef={articleRef} />
      <HighlightLayer postSlug={post.slug} articleRef={articleRef} />

      <article ref={articleRef} className="prose prose-neutral dark:prose-invert max-w-none">
        {PostComponent ? <PostComponent /> : (
          <div className="text-muted-foreground">
            <p>{post.description}</p>
            <p className="mt-4 text-sm">文章内容正在整理中...</p>
          </div>
        )}
      </article>

      <GiscusComments postSlug={post.slug} />

      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prevPost && (
            <Link to={`/blog/${prevPost.slug}`} className="group flex-1">
              <Card className="p-4 hover:shadow-md transition-shadow h-full">
                <div className="text-xs text-muted-foreground mb-1">上一篇</div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{prevPost.title}</div>
              </Card>
            </Link>
          )}
          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="group flex-1">
              <Card className="p-4 hover:shadow-md transition-shadow h-full sm:text-right">
                <div className="text-xs text-muted-foreground mb-1">下一篇</div>
                <div className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{nextPost.title}</div>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
