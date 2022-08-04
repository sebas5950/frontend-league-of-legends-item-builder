



const UserBuildBar = ({ build }) => {

const {name, user_id, champion_id} = build
    return(
        <div>
            {name}, {user_id}, {champion_id}, 
        </div>
        )
}





export default UserBuildBar