import { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../api";
import { Link, useParams } from "react-router-dom";

const TopicsList = ({ setErr }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    getTopics()
      .then((res) => {
        setTopics(res);
      })
      
  }, []);

  if (isLoading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main className="ItemsList">
      <section>
        <h1>Topics</h1>

        <ul className="ItemsList">
          {topics.map((top) => {
            return (
              <Link key={top.slug} to={`/topics/${top.slug}`}>
                <li key={top.slug}>
                  {" "}
                  <span> |{top.slug}| </span>{" "}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default TopicsList;
