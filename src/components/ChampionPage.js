import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserBuilds from "./UserBuilds";
import CommentCard from "./CommentCard"

const ChampionPage = ({ user }) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [championData, setChampionData] = useState({});
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([])
  const [commentData, setCommentData] = useState([])
  useEffect(() => {
    async function champion(){
    await fetch(`/champions/${id}`)
      .then((res) => res.json())
      .then( async (data) => setChampionData(data));

        await fetch(`/champions/${id}/items`)
        .then(res => res.json())
        .then(newDat => setItems(newDat))

      await  fetch(`/champions/${id}/comments`)
        .then(res => res.json())
        .then(newDat => setComments(newDat))
  } 
  champion()
  },[]);
  // async function fetchAllTheShit(){
  //   const [championRes, championWithItems, championComments] = await Promise.all([
  //     fetch(`/champions/${id}`),
  //     fetch(`/champions/${id}/items`),
  //     fetch(`/champions/${id}/comments`)
  //   ]);
  //   const champions = await championRes.json();
  //   const champItems = await championWithItems.json();
  //   const champComments = await championComments.json();

  //   return [champions, champItems, champComments]
  // }
  // fetchAllTheShit().then(([champions, champItems, champComments]))

  function deleteComment(id){
    const deletedComment = comments.filter((comment) => comment.id !== id)
      setComments(deletedComment)
      fetch(`/comments/${id}`, {
        method: 'DELETE'
      })}
    
  function onSubmit(e){
    // e.preventDefault()
      const comData ={
        text: commentData,
        champion_id: id,
        user_id: user.id
      }
        fetch(`/champions/${id}/comments`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(comData)
        })
        .then(r=> r.json())
        .then(data => setComments(data))
      }

  function handleChange(e) {
    setCommentData(e.target.value)
  }
  function handleClick() {
    navigate(-1);
  }
  // function editClick(comment) {
  //   setCommentData(comment)
  // }
  const buildItems = items.map(item => {
    return <UserBuilds items={item} key={item.id}/>
  })

  // function itemPicker(newItem){
  //   if (builds.includes(newItem) === false) {
  //     setBuilds([...builds, newItem])
  //   } else {
  //     const removedItem = builds.filter((item) => {
  //       return item !== newItem
  //     })
  //     setBuilds(removedItem)
  //   }
  // }
  

  const { name, title, blurb, attack, defense, magic, difficulty, image } = championData;

  return (
    <div className="bgimage2">  
    <button onClick={handleClick}>back</button>
      <h4 className="bigtitle">
        {name}, {title} 
      </h4>
      <div className="description1">
      <img className="detail-image2" src={image} />
  
      <p>{`LORE - ${blurb}`}</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Difficulty: {difficulty}</th>
            <th>Defense: {defense}</th>
            <th>Magic: {magic}</th>
            <th>Attack: {attack}</th>
          </tr>
          </thead>
      </table>
      

      <div className="builditems">
      {buildItems}
      </div>
      <h2></h2>
      <form class = "comment" onSubmit={onSubmit}>
      <h2>COMMENTS</h2>
        <label>
          <input type="text" text="text"  placeholder="Add a Comment..." onChange = {handleChange} />
        </label>
        
        <button type ="submit" >SUBMIT</button>
      </form>

      {comments.map(comment => {
        return <CommentCard key={comment.id} comment={comment} user = {user} deleteComment={deleteComment} setComments={setComments} />
      })}
    </div>
  );
};

export default ChampionPage;
