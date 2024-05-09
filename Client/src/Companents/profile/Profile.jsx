import { Link, useParams } from 'react-router-dom';
import './Profile.css'
import axios from 'axios';
import { useEffect, useState } from 'react'; // Changed from useReducer to useEffect
function Profile (){
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        ( async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
                setUser(response.data); // Assuming the response contains user data
            } catch (error) {
                console.error('profile error:', error);
            }
        })()
        
    }, [id]);

    return (
        <>    
            <div className="profileBox">
                <h2>User Profile</h2>
                <p> {user.name}</p>
                <p> {user.email}</p>
                <p>Phone no.: {user.phone}</p>
                <p>Bio.: {user.bio}</p>
                <Link to={'/'}><span>Logout</span></Link>
            </div>
        </>
    );
}

export default Profile;
