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
             <form onSubmit={onSubmit}>
        <label>
          Username
          </label>  
          <input type='text' name='username' value={username} onChange={handleChange} />
       
        <label>
         
         </label>
        
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        
       
        <input type='submit' value='Sign up!' />
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
        </div>
    )
}

export default SignUp