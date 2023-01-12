import { useState } from "react";
import { postComment } from "../api";



const AddComment = ({ article_id, setComments, }) => {
  const [newBody, setNewbody] = useState("")
    const [error, setErr] = useState(null)

   

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBody)  {
        alert ("Please enter a comment in the field")
    } else {
    const newComment = {
        author: `jessjelly`,
        body: newBody,
        username: `jessjelly`,
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


    <label htmlFor="newBody"> Add comment here:
    <textarea id="newBody"
    type="text"
    value={newBody}
    onChange={(e)=> setNewbody(e.target.value)}></textarea>
    </label>
    </section>

    <button type="submit">Post Comment</button> 

    </form>

    

)

}
    

export default AddComment
