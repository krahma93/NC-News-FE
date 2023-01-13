import { useEffect, useState } from "react"
import { getArticles} from "../api";
import { Link, useParams } from "react-router-dom";
import TopicsList from "./TopicsList";


const AllArticles = ( )=> {
    const [articles, setArtcicles] = useState ([]);
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] =useState('created_at')
    const [orderBy, setOrderBy] =useState('asc')
    const [err, setErr] = useState(null)

    const {slug} = useParams()


    useEffect(()=> {
        setErr(false)
        setIsLoading(true)
        getArticles(slug, sortBy, orderBy).then((res)=> {
          if (res.length === 0) 
            {setErr("Topic does not exist");
            }
            setArtcicles(res);
            setIsLoading(false)
        })
      
}, [slug, sortBy, orderBy])

if (isLoading) { 
    return <p>Loading...</p>
}
if (err) {
  return (
      <main>
          <h1>{err}</h1>
      </main>
  )
}

return (

    <main className="app" >
      
      
      <TopicsList setErr={setErr} />
      <section className="SingleItem">
Filter    :    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="votes">Votes</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
        </select>
        <section > <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="asc">Ascend</option>
          <option value="desc">Descend</option>
        </select> </section>

      </section>
      <section className="AllArt">

        <h2>Artciles</h2>
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