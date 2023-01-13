import { getSingleArticle } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import UpVote from "./UpVote";


const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setSingleArticle] = useState({});
  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    getSingleArticle(article_id).then((newArticle) => {
      setSingleArticle(newArticle);
    })
    .catch((err)=> {
        setErr('Sorry that article does not exist ')
        setIsLoading(false)
    })
  }, [article_id]);

if (isLoading)
return ( 
    <main>
        <p>Loading...</p>
    </main> ) 

if (err) {
        return (
            <main>
                <h1>{err}</h1>
            </main>
        )
    }

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
