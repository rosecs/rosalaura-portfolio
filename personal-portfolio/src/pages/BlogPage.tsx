import React from "react";
import ArticleCard from "../components/ArticleListCard";
import articleContent from "../components/Article-content";


const BlogPage = () => (
    <>
        <div>
            <h1 className=" space-y-5 text-6xl border-b font-serif">Rosylu's Journal</h1>
            <p className=" mx-10 mt-5"> Everything that is not written, it will forgotten.
                So, I decided save my mistakes and wins in this space on the internet, as tech journal.
            </p>
            <ArticleCard articles={articleContent} />
        </div>
    </>
);

export default BlogPage;