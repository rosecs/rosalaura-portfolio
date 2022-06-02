import React from "react";
import ArticleListCard from '../components/ArticleListCard';
import articleContent from '../components/Article-content';
import articles from "../components/Article-content";
import NotFoundPage from "./NotFoundPage";

interface Article {
    params: any;
    name: string,
    article: string,
    title: string,
    content: string
}

const ArticlePage = (match: Article): any => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name);

    if (!article) return <NotFoundPage />

    const othersArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <div>
                <h1>{article?.title}</h1>
                {article?.content.map((paragraph, key) => (<p key={key}>{paragraph}</p>))}
            </div>
            <h3>Other articles</h3>
            <ArticleListCard articles={othersArticles} />
        </>
    )
};


export default ArticlePage;