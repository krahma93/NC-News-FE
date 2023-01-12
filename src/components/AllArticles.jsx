import { useEffect, useState } from "react"
import { getArticles} from "../api";
import { Link, useParams } from "react-router-dom";
import TopicsList from "./TopicsList";


const AllArticles = ( )=> {
    const [articles, setArtcicles] = useState ([]);
    const [isLoading, setIsLoading] = useState(true)
    const {slug} = useParams()


    useEffect(()=> {
        setIsLoading(true)
        getArticles(slug).then((res)=> {
            setArtcicles(res);
            setIsLoading(false)
        });
      
}, [slug])

if (isLoading) { 
    return <p>Loading...</p>
}

return (

    <main className="app" >
      <h2>Articles</h2>
      
      <TopicsList />
      <section className="AllArt">

      <ul className="AllArt">
        {articles.map((article) => {
          return ( 
            <Link key={article.article_id} to={`/articles/${article.article_id}`}>
              <li className="AllArt">
              <h2> {article.title}</h2>
              <h4>
              {article.body}
              </h4>
                    Author: {article.author} <br />
                       
                Topic: {article.topic}<br />
                    Votes: {article.votes} <br />
                    Comment count: {article.comment_count} <br />
                
                 
              Created on: {article.created_at}
              </li>
        </Link>
          );
        })}
      </ul>
        </section>
    </main>

)

}
    


export default AllArticles