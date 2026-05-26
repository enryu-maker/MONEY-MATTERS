export type Blog = {
    slug: string;
    title: string;
    excerpt: string;
    hero: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: { heading?: string; body: string }[];
};

export const blogCategories = ["All", "Market Insight", "Buyer Guides", "Wealth Strategy"];

export const blogs: Blog[] = [
    {
        slug: "dummy-blog",
        title: "Dummy Blog",
        excerpt: "This is a dummy blog.",
        hero: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6d05b460-3b08-4df1-970b-c4797ca63013/id-preview-4b6965da--33c28504-b4c0-4ece-bfae-90e60390b5ef.lovable.app-1779558883966.png",
        category: "Market Insight",
        author: "Rajiv Menon",
        date: "2024-05-26",
        readTime: "5 min read",
        content: [{ body: "This is a dummy blog." }]
    }
];

export function getBlog(slug: string): Blog | undefined {
    return blogs.find((b) => b.slug === slug);
}
