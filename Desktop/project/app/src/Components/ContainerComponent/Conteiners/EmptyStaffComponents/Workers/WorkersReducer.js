import React from 'react'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {
            photos: 'https://c7.hotpng.com/preview/647/377/106/computer-icons-computer-programming-programmer-avatar-computer-software-mechanical.jpg',
            id: 1,
            name: 'Khatab Khatabych',
            doljnost:'менеджер по продажам',
            photos: 'zzz',
            followed: true
        },
        {
            id: 2,
            name: 'Eshmat Tashmatovich',
            doljnost='менеджер по продажам',
            photos: 'zzz',
            followed: false
        }
    ]
}

const WorkersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id===action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default WorkersReducer
