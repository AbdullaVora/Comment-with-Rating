import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="btn-group">
                <Link to="/table"><button style={{ padding: '12px 35px' }}>Table</button></Link>
                <Link to="/card"><button style={{ padding: '12px 35px' }}>Cards</button></Link>
            </div>
            <Form />
        </>
    )
}

export default Home
