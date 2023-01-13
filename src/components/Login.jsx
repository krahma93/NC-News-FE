import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";
import { useState } from "react";




const LogIn = () => {
    const [users, setUser] = useState([])

    useEffect (()=> {
        getUsers().then((res)=> {
            setUser(res)
        })
    })



    return (
        <>
            <h2 className="ItemsList">Welcome Please Select Your Profile</h2>
            
            <ul className="ProfileList">
                {users.map((user) => {
                    return ( 
                        <Link key={user.username} to={`/users/${user.username}`}>
                            <li>{user.username}</li>
                            <img  className="Images" src={user.avatar_url}/>
                            <p>{user.kudos}</p>
                        </Link>
                    )
                })}
                </ul>
        </>
    )
}

export default LogIn;