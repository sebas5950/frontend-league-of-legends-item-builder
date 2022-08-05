import React, {useState} from "react"
import { useNavigate } from "react-router-dom"



const SignUp = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch(`/signup`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/login`)
                })
             }
            //  else {
            //     res.json().then(json => setErrors(Object.entries(json.errors)))
            // }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return(
        <div>
          <img src='https://wallpapercave.com/wp/wp3159851.jpg'  
    style={{   position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    filter: "blur(0px)"}}/> 
    <div class="form">
             <form className="signupbox" onSubmit={onSubmit}>
              <h1>Sign-up</h1>
              <br></br>
        <label className="loginname">
          Username
          </label>  
          <input type='text' name='username' value={username} onChange={handleChange} />
       
          <br></br>
        <br></br>
        
       
        <label className="passwordname">
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        <br></br>
        <br></br>
       
        <input type='submit' value='Sign-up' />
      </form>
      </div>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
        </div>
        
    )
}

export default SignUp