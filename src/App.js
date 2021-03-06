import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Header from './Header'
import Card from './Card'

const App = () => {

    const [details, setDetails] = useState({})
  

    const fetchDetails = async () => {
        const {data} = await Axios.get('https://randomuser.me/api/')
        
        const details = data.results[0]

        setDetails(details)
    }

    useEffect(() => {
        fetchDetails()
    },[])

    return (
        <div className="container">
            <Header />
            <Card details={details}/>
        </div>
    )
}

export default App