import React, { useState } from 'react'
import "./Register.css"
import axios from '../../appi/axio';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleUserRegister = (e) =>{
        e.preventDefault();
            axios.post("/users",{name, email, password, avatar})
            .then(response => {
                if(response.status === 200){
                    Toastify({
                        text: "User registered sucssesufully",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                   navigate("/login")
                }
            })

    }


    const playSound = () => {
        const audio = new Audio('./src/mp3/sound-1-167181.mp3'); 
        audio.play();
    }




    
  return (
    <div className='form__div'>
        <form className='form' onSubmit={handleUserRegister}>
            <h1>Register</h1>
            <input type="text" placeholder='Enter your name' onChange={(e) =>setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email'onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' onChange={(e) =>setPassword(e.target.value)}/>
            <input type="url" placeholder='Enter your avatar url' onChange={(e) =>setAvatar(e.target.value)}/>
            <button  onClick={playSound}  className='form__button' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register