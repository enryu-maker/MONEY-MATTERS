import type { Metadata } from "next";
import { BlogsClient } from "./client";

export const metadata: Metadata = {
    title: "Blogs & Market Insight — Money Matters",
    description: "UAE mortgage market analysis, buyer guides, refinance strategy, and editorial briefings from the Money Matters desk.",
    openGraph: {
        title: "Money Matters · Market Insight",
        description: "UAE mortgage market analysis, buyer guides, and wealth strategy briefings.",
    }
};

export default function BlogsPage() {
    return <BlogsClient />;
}
