import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as userActions from "../../store/users"
import "./searchbar.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Searchbar = () => {
   
    const [query,setQuery] = useState("");
    const [filteredUsers,setfilteredUsers] = useState([])
    const users = useSelector(userActions.getUsers)
    const history = useHistory();
    let newFilter = [];

    const handleFilter = (e) => {
        
        let searchName = e.target.value
        setQuery(searchName);
            let tempArr = [];
            users.forEach((user) => {
                if(user.firstName.toLowerCase().includes(searchName.toLowerCase())) tempArr.push(user)
        })
        newFilter = tempArr;
        if(searchName === ""){
            setfilteredUsers([])
        }
        else{
            setfilteredUsers(newFilter)
        }
    }


    return (
    <div>
        <label>
            <input
                className='searchbar'
                type="text"
                placeholder="Search"
                onChange={handleFilter}
                value = {query}
            />
        </label>
        {filteredUsers.length !== 0 && (
            <div className='search-dropdown'>
            {filteredUsers.slice(0,10).map((user) => <div onClick={() => history.push(`/users/${user.id}`)} className="searched-user"> 
                <img className='prof-pic' src={user.photo} />
                <div className='searched-user-name'>
                    {user.firstName} {user.lastName} 
                </div>
            </div>)} 
            </div>
        )}
    </div>
  )
}

export default Searchbar;