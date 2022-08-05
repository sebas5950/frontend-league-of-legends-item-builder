import React, {useState} from "react"

const CommentCard = ({ comment, user, deleteComment, setComments }) => {
    const [isShown, setIsShown] = useState(false)
    const [commentData, setCommentData] = useState([])

    
    function handleChange(e) {
        setCommentData(e.target.value)
    }
    
    function onEditSubmit(e){
        // e.preventDefault()
          const comData ={
            text: commentData,
          }
            fetch(`/comments/${comment.id}`,{
              method:'PATCH',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(comData)
            })
            .then(r=> r.json())
            .then(data => setComments(data))
          }


    return(
        <div className="commentcard">
            
            <h2>{user.username}</h2>
            <br></br>
            <p>{comment.text}</p>
            <br></br>
            <button className="editbutton" onClick={() => setIsShown(true)}>EDIT</button>
         
            <button className="deletebutton"
            onClick={(e) => {return deleteComment(comment.id), e.stopPropagation()}}
            >
                DELETE
                </button>
                {isShown &&(
                <form className="editme" onSubmit={onEditSubmit}>
                    <input type="text" text="text" placeholder="Edit Comment..." onChange = {handleChange} />
                    <button type="submit" >SUBMIT</button>
                </form>
            )}
                
        </div>
    )
}



export default CommentCard