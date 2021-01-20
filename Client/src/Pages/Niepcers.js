import React from 'react'
import {useEffect,useState} from 'react'
import{useSelector,useDispatch} from 'react-redux'
import {getNiepcers} from '../Actions/getNiepcers'
import Onephoto from './OnePhoto'

const Niepcers = () => {
    const myPhoto=useSelector(state=>state.myPhotosReducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getNiepcers())
    },[])
   
    return (
        <div style={{display:"flex" , justifyContent:"space-around"}}>
            {myPhoto.map((el,i)=><div key={i}><Onephoto state={el}/></div>)}
        </div>
    )
}

export default Niepcers
