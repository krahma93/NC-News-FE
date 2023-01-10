import { getComments } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((newComment) => {
      setComments(newComment);
    });
  }, [article_id]);


  return (
    <main>
      <div className="SingleItem">
          <h1>Comments:</h1>
            {comments.map((comment) => {
                return (
                    <div className="SingleItem">
                     <p>{comment.body}
                     <li>
                        <p> Votes: {comment.votes} | 
                        Author: {comment.author} | 
                        Created At: {comment.created_at.slice(0, 10)}</p>
                     </li>
                     </p>
                </div>
                    
                )
            })}
               
            
     

      </div>
    </main>
  );
};

export default Comments;
