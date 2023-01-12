import { getSingleArticle } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import UpVote from "./UpVote";


const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setSingleArticle] = useState({});

  useEffect(() => {
    getSingleArticle(article_id).then((newArticle) => {
      setSingleArticle(newArticle);
    });
  }, [article_id]);

  // const{item_name} =item


  return (
      <main>
      <ul className="SingleItems">
        <h2>{article.title}</h2>
        <h3> Description: {article.body}</h3>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    
                    {/* <p>Comment count: {article.comment_count}</p>  */}
                    <p> Created on: {article.created_at}</p>
      </ul>
      <UpVote votes={article.votes} article_id={article_id}/>
      <Comments setSingleArticle={setSingleArticle}/>

    </main>
  );
};

export default SingleArticle;
