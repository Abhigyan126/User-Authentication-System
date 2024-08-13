import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')
    const [userInfo, setUserInfo] = useState({ username: '', email: '' })
    
    const fetchQuote = async () => {
        try {
            const response = await fetch('http://localhost:1337/api/quote', {
                headers: {
                    'X-access-token': localStorage.getItem('token'),
                },
            })

            const data = await response.json()
            if (data.status === 'ok') {
                setQuote(data.quote)
            } else {
                alert(data.error)
            }
        } catch (error) {
            alert('Error fetching quote')
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                navigate('/login')
            } else {
                setUserInfo({ username: user.Name, email: user.email })
                fetchQuote()
            }
        } else {
            navigate('/login')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const handleQuoteUpdate = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:1337/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({ quote: tempQuote }),
            })

            const data = await response.json()
            if (data.status === 'ok') {
                setQuote(tempQuote)
                setTempQuote('')
            } else {
                alert(data.error)
            }
        } catch (error) {
            alert('Error updating quote')
        }
    }

    return (
        <div className="form-container">
            <div className="rectangle"></div>
            <h3>Welcome, {userInfo.username || 'User'}</h3>
            <h4>Email: {userInfo.email || 'Email not available'}</h4>
            <h3>Your quote: {quote || 'No quote found'}</h3>
            <form onSubmit={handleQuoteUpdate}>
                <input
                    type='text'
                    placeholder='Quote'
                    value={tempQuote}
                    onChange={e => setTempQuote(e.target.value)}
                />
                <input type='submit' value='Update quote' />
                <button type='button' onClick={handleLogout}>Logout</button>
            </form>
        </div>
    )
}

export default Dashboard
