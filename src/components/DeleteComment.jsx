import { deleteComment } from "../api";

const DeleteComment = ({comment_id, author}) => {
const loggedUser = "jessjelly"
  // const [item_id, setItemId] = useState("");


const handleSubmit = (e) => { 
  deleteComment(comment_id)
  .then(() => { 
    alert("your comment was deleted")
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
