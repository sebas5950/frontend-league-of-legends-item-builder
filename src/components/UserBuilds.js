import {useState, useEffect} from 'react';
import ItemCard from "./ItemCard";


const UserBuilds = ({ champ, items }) => {


    const [selectData, setSelectData] = useState(1)
    const [updatedItems, setUpdatedItems ] = useState([])
    const [buildItems, setBuildItems ] = useState(1)


    const newData = {
        item_id: buildItems,
        champion_id: selectData,
        name: 'w.e'
    }

 const champion = champ.map(cha => {
    return <option value={cha.id} key={cha.id}>{cha.id}. {cha.name}</option>
 })

 const item = items.map(item => {
    return <option value={item.id} key={item.id}>{item.name}</option>
 })

function handleChange(e){
    setSelectData(e.target.value);
}

function handleItemChange(e){
    setBuildItems(e.target.value);
}

   useEffect(() => {
    fetch(`/champions/${selectData}/items`)
    .then(res => res.json())
    .then(newDat => setUpdatedItems(newDat))
  }, [selectData])

 

  function handleSubmit(e){
    e.preventDefault()
    fetch(`/builds`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(console.log)
}
  


//   console.log(selectData)
    // console.log(newid)
    // const {name, attack, health, magic, desc, image} = item

return (
    <div className="user builds">
        <div>
        </div>
        <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>{champion}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <select onChange={handleItemChange}>{item}</select>
            <button type='submit'>submit</button>
        </form>
         {/* {items.map(item => {
            return <ItemCard item={item} />
        })} */}
    </div >
)
 
}

export default UserBuilds;