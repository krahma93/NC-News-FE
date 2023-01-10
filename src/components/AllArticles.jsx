import { useEffect, useState } from "react"
import { getArticles } from "../api";
import { Link } from "react-router-dom";



const AllArticles = ( )=> {
    const [articles, setArtcicles] = useState ([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setIsLoading(true)
        getArticles().then((res)=> {
            setArtcicles(res);
            setIsLoading(false)
        });
}, [])

if (isLoading) { 
    return <p>Loading...</p>
}

return (

    <main className="AllArt">
      <h2>All Articles</h2>
      <ul className="AllArt">
        {articles.map((article) => {
          return ( 
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
              <li className="AllArt">
              <h2> {article.title}</h2>
              <h4>
              {article.body.slice(0, 66)}
              </h4>
                    Author: {article.author} <br />
                       
                Topic: {article.topic}<br />
                    Votes: {article.votes} <br />
                    Comment count: {article.comment_count} <br />
                
                 
              Created on: {article.created_at.slice(0, 10)}
              </li>
        </Link>
          );
        })}
      </ul>
    </main>

)

}
    


export default AllArticles