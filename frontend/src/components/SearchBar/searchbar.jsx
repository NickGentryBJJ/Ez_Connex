import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from "../../store/users"
import "./searchbar.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Searchbar = () => {
    const users = useSelector(userActions.getUsers)
    const [filteredUsers, setfilteredUsers] = useState([])
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);
    const history = useHistory();
    let newFilter = [];
    const dispatch = useDispatch();
    const searchDropDown = document.querySelector(".search-dropdown")
    // searchDropDown.style.paddingTop = "1%"
    useEffect(() => {
        const searchDropDown = document.querySelector(".search-dropdown");
        searchDropDown.style.visibility = ("hidden")
    }, [dispatch])

    
    const handleClick = () => {
        setQuery("")
        setfilteredUsers([])
        setSearching(false)
        searchDropDown.style.visibility = ("hidden")
    }
    
    const handleFilter = (e) => {
        
        searchDropDown.style.visibility = ("")
        setSearching(true)
        let searchName = e.target.value
        setQuery(searchName);
        let searchedUsers = [];
        users.forEach((user) => {
            if(user.firstName.toLowerCase().includes(searchName.toLowerCase())) searchedUsers.push(user)
        })
        newFilter = searchedUsers;
        if (searchName === "") {
            setfilteredUsers([])
        }
        else {
            setfilteredUsers(newFilter)
        }
        if (e.target.value === "") {searchDropDown.style.visibility = ("hidden")}
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
            {/* {filteredUsers.length !== 0 &&
                <div className='search-dropdown'>
                    {filteredUsers.slice(0,10).map((user) => 
                        <div onClick={() => history.push(`/users/${user.id}`)} className="searched-user"> 
                            <img onClick={handleClick} className='prof-pic' src={user.photo} />
                            <div onClick={handleClick} className='searched-user-name'>
                                {user.firstName} {user.lastName} 
                            </div>
                        </div>)} 
                </div>
            }  */}
            {searching === true && filteredUsers.length === 0 ? 
            <div className='search-dropdown'>
                <div className='no-user-found'>
                    No Users Found
                </div>
            </div>
        
        : <div className='search-dropdown'>
                {filteredUsers.slice(0,10).map((user) => 
                    <div onClick={() => history.push(`/users/${user.id}`)} className="searched-user"> 
                        <img onClick={handleClick} className='prof-pic' src={user.photo} />
                        <div onClick={handleClick} className='searched-user-name'>
                            {user.firstName} {user.lastName} 
                        </div>
                    </div>)} 
                </div>
    } 
    </div>
    )
}

export default Searchbar;