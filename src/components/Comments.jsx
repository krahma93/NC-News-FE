import { getComments, } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

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
      <div className="SingleItems">
        <section>
          <AddComment article_id={article_id} setComments={setComments}/>
        </section>
        
          <h1>Comments:</h1>
            {comments.map((comment) => {
                return (
                    <section key={comment.comment_id} className="SingleItems">
                     <p>{comment.body}</p>
                     <li>
                        <p> Votes: {comment.votes} | 
                        Author: {comment.author} | 
                     Created At: {comment.created_at}
                       </p>
                       <DeleteComment comment_id={comment.comment_id} author={comment.author} />
                     </li>
                     
                </section>
                    
                )
            })}
               
            
     

      </div>
    </main>
  );
};

export default Comments;
