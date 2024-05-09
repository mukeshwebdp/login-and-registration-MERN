
import axios from 'axios'
import './Create.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Create(){
        const user ={
            name: '',
            email: '',
            phone: '',
            bio: '',
            password: ''
        }
        const [users, setUsers] = useState(user)

       const inputHandler =(e)=>{
            const {name, value} = e.target;
                setUsers({...users, [name]: value})
                console.log(users);
       }
       const submitFrom = async(e)=>{
        e.preventDefault();
                await axios.post('http://localhost:8000/api/create',users)
                .then((response)=>{
                    console.log(response);
                    if(!user){
                        alert('every field the section')
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
            
       }
    return(
        <div className="loginBox">
            
            <h2>Registration Page</h2>

            <form>
                <div className="box">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={inputHandler} required/>
                </div>

                <div className="box">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={inputHandler} required/>
                </div>
                <div className="box">
                    <label htmlFor="phone">Phone no.</label>
                    <input type="text" name="phone" id="phone" onChange={inputHandler} required/>
                </div>
                <div className="box">
                    <label htmlFor="bio">Bio</label>
                    <input type="text" name="bio" id="bio" onChange={inputHandler} required/>
                </div>
                <div className="box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={inputHandler} required/>
                </div>
                <button onClick={submitFrom}>Register</button>
            </form>
            <div className="jumpCreate">
                 <span> I am registered. <Link to={'/'}>Login Here</Link></span>
                </div>
        </div>
    )
}

export default Create;