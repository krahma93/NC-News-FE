import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ article_id, setComments }) => {
  const [newAuthor, setNewAuthor] = useState("");
  const [newBody, setNewbody] = useState("")
    const [error, setErr] = useState(null)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
        author: newAuthor,
        body: newBody,
        username: newAuthor,
        votes: 0,
        article_id: {article_id},
        created_at: String(new Date()),
        comment_id: new Date(),
    }

    setComments((currComments) => {
         return   [ newComment, ...currComments

            ]
    })
    

    postComment(article_id, newComment)
    .then((res) => {
      alert("your item was added")
    }).catch((err) => { 
        setComments((currComments) => {
      const errComment = [...currComments]
            errComment.shift()
            return errComment
    }) 
    setErr('Sorry your comment can not be added')

})
  }


if (error) {
    return (
        <main>
            <p>{error}</p>
        </main>
    )
}
    

return (
    
    <form onSubmit={handleSubmit}> 
    <section>
    <label htmlFor="newAuthor"> Author Name
    <input id="newAuthor"
    type="text"
    value={newAuthor}
    onChange={(e)=> setNewAuthor(e.target.value)}></input>
    </label>
    </section>
<section>


    <label htmlFor="newBody"> Add comment here:
    <input id="newBody"
    type="text"
    value={newBody}
    onChange={(e)=> setNewbody(e.target.value)}></input>
    </label>
    </section>

    <button type="submit">Post Comment</button> 

    </form>

    

)

}
    

export default AddComment
