import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/UserSlice'
import CustomCard from '../components/Card'

const Home = () => {
    const dispatch = useDispatch()
    const [data, setData]=useState([])
    const {users}=useSelector(state=>state)

    useEffect(()=>{
    dispatch(fetchUsers())
    },[dispatch])
    useEffect(()=>{
        setData(users)
    },[users])
    

  return (
    <div className='container  ' style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
    
    {data.map((user)=>{
        return <CustomCard key={user.id} user={user} />
    })}
    </div>
  )
}

export default Home