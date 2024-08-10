import { useEffect, useState } from "react"
import axios from "../../api/axios"
import "./Profile.css"
import { Link } from "react-router-dom"


const Profile = () => {
const [profile , setProfile] = useState(null)
    useEffect(() => {
        axios("/auth/profile/")
        .then(response => setProfile(response.data))
    }, [])


  return (
    <div className="modal-overlay">
    <div className="modal-content">
        <h1 className="modal-title">Profile</h1>
        {
            profile &&
            <img className="modal-avatar" src={profile.avatar} alt="Profile Avatar" />
        }
        {
            profile && <h2 className="modal-email">{profile.email}</h2> 
        }
        {
            profile && <h2 className="modal-password">{profile.password}</h2> 
            
        }
        {
            <Link to="/">Home</Link>
        }
    </div>
</div>

  )
}

export default Profile