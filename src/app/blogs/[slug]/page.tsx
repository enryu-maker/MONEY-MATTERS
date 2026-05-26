import { notFound } from "next/navigation";
import { getBlog } from "@/lib/blogs";
import { BlogClient } from "./client";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlog(slug);
    if (!blog) return { title: "Article — Money Matters" };
    return {
        title: `${blog.title} — Money Matters`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.hero],
            type: "article",
        },
    };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = getBlog(slug);
    if (!blog) notFound();
    return <BlogClient blog={blog} />;
}
