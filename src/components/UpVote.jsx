import { patchUpVote } from "../api";
import { useState } from "react";


const UpVote = ({ votes, article_id }) => {
    
  const [voteChange, setVoteChange] = useState(0);

  function incVote() {
    setVoteChange((currvoteChange) => 
      currvoteChange + 1)
    patchUpVote(article_id, 1).catch(()=> {
        setVoteChange((currvoteChange)=> 
        currvoteChange - 1)
        alert("Your Vote has not been submitted")

    })
  }

  function decVote() {
    setVoteChange((currVoteChange)=>
    currVoteChange - 1)
    patchUpVote(article_id, -1).catch(()=> {
        setVoteChange((currvoteChange)=> 
        currvoteChange + 1)
        alert("Your Vote has not been submitted")
    })

  }

  return (
   <section className="vote">
    <p>Votes</p> <p> {votes + voteChange}</p>
    <button onClick={incVote}>Vote for this article</button>
    <button onClick={decVote}>Un Vote this article</button>
   </section>
  );
};

export default UpVote;
