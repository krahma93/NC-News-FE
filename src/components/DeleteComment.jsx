import { deleteComment } from "../api";
import { useState } from "react";


const DeleteComment = ({comment_id, author,comments, setComments }) => {
const loggedUser = "jessjelly"
const [isLoading, setIsLoading] = useState(false)



const handleSubmit = (e) => { 
    setIsLoading(true)
    deleteComment(comment_id)
  .then(() => {  
    const filterComments = comments.filter((comm) => comm.comment_id !== comment_id)
    alert("your comment was deleted")
    setComments(filterComments)
    setIsLoading(false)
})
}



  return (
  <main>
    {loggedUser === author && typeof comment_id === "number" && (
      
    <button
    onClick={(e) => {
      handleSubmit()
    }}> Delete

    </button>
    )}
    {isLoading? <p> Loading..</p> : null }
  </main>
  )
    }
 
    
export default DeleteComment;
