import { deleteComment } from "../api";

const DeleteComment = ({comment_id, author,comments, setComments }) => {
const loggedUser = "jessjelly"


const handleSubmit = (e) => { 
  deleteComment(comment_id)
  .then(() => {  
    const filterComments = comments.filter((comm) => comm.comment_id !== comment_id)
    alert("your comment was deleted")
    setComments(filterComments)
  })
}

  return (
  <main>
    {loggedUser === author && (

    <button
    onClick={(e) => {
      handleSubmit()
    }}> Delete

    </button>
    )}
    
  </main>
  )
    }
 
    
export default DeleteComment;
