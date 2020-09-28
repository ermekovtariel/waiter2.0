import React from 'react'
import Workers from './Workers';
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from './WorkersReducer';

let mapStateToProps =(state)=>{
    return{
        users: this.state.usersPage.users
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId) => {
            dispatch(followAC(usersId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workers) 
