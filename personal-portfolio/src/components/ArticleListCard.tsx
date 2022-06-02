import React from "react";
import { Link } from 'react-router-dom';
import articles from "./Article-content";

const ArticleCard = ({ articles: [] }) => (
    <>
        <div className="mt-10 mx-5 p-5 bg-black text-white shadow rounded-lg">
            {articles.map((article: { name: string; title: string; content: string[]; }, key: React.Key | null | undefined) => (
                <Link className="" key={key} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </div>
    </>
);

export default ArticleCard;