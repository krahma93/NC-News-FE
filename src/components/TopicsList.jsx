import { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";



const TopicsList = () => {

    const [topics, setTopics] = useState([]);

    useEffect (() => {
    getTopics().then((res)=> {

        setTopics(res);

});
    },[]
    )

    return (
        <main className="ItemsList">
       <section>
       <h1>Topics</h1>

        <ul className="ItemsList">
            {topics.map((top)=> { 
                return (
                    
                    <Link key={top.slug} to={`/topics/${top.slug}`}>
                    <li key={top.slug}><span> |{top.slug}|    </span>  </li>
                    </Link>
                   
                   
                   )
                })}
        </ul>
                </section>
        
        
        </ main>
    )

}

export default TopicsList;