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
        <div>
            
            <h1>{user.username}</h1>
            <p>{comment.text}</p>
            <button className="editbutton"onClick={() => setIsShown(true)}>Edit</button>
            {isShown &&(
                <form onSubmit={onEditSubmit}>
                    <input type="text" text="text" onChange = {handleChange} />
                    <button type="submit" >Submit</button>
                </form>
            )}
            <button className="delete button"
            onClick={(e) => {return deleteComment(comment.id), e.stopPropagation()}}
            >
                Delete
                </button>
        </div>
    )
}



export default CommentCard